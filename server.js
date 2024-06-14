require('dotenv').config();
const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const crypto = require('crypto');
const { type } = require('os');
const app = express();

// Manage DB connection
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true });

const database = mongoose.connection;
database.on('error', (error) => console.error('Database connection error:', error));
database.once('open', () => console.log('Database connected'));

// Define data schemas (document formatting)
// Uniqueness is checked server-side
const userSchema = new mongoose.Schema({
    username: {
        required: true,
        type: String,
    },
    email: {
        required: true,
        type: String,
    },
    password: {
        required: true,
        type: String
    },
    accessToken: {
        type: String,
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

const taskSchema = new mongoose.Schema({
    username: {
        required: true,
        type: String,
    },
    title: {
        required: true,
        type: String,
    },
    dueDate: {
        type: Date,
    },
    include: {
        require: true,
        type: Boolean,
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

// Define cursor to the collection
const User = mongoose.model('User', userSchema);

const Task = mongoose.model('Task', taskSchema);

app.use(express.json());

// Serve static files from the Angular app
app.use(express.static(path.join(__dirname, 'dist/pomo-pengy')));

// Token Helper Functions
const generateAccessToken = () => {
    return crypto.randomBytes(32).toString('hex');
};

const authenticateToken = async (req, res, next) => {

    const token = req.headers['authorization'];

    if (!token) return res.sendStatus(401);

    try {
        const user = await User.findOne({ accessToken: token });
        if (!user) return res.sendStatus(403);

        req.user = user;
        next();
    } catch (error) {
        res.sendStatus(500).json({ message: error.message });
    }
};

// ------------------- API ROUTING -------------------
app.post('/api/login', async (req, res) => {
    const { email, password } = req.body;

    try {
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(400).json({ message: 'Invalid email or password' });
        }

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(400).json({ message: 'Invalid email or password' });
        }

        const accessToken = generateAccessToken();

        user.accessToken = accessToken;
        await user.save();

        res.status(200).json({ "username": user.username, "accessToken": accessToken });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

app.post('/api/register', async (req, res) => {
    const { username, email, password } = req.body;

    try {
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ message: 'User already exists' });
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        const newUser = new User({
            username,
            email,
            password: hashedPassword
        });

        const savedUser = await newUser.save();
        res.status(201).json(savedUser);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

app.post('/api/postTask', authenticateToken, async (req, res) => {
    const { title, dueDate, include } = req.body;
    const username = req.user.username;

    try {
        const newTask = new Task({
            username,
            title,
            dueDate,
            include
        });

        const savedTask = await newTask.save();
        res.status(201).json(savedTask);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

app.get('/api/getTasks', authenticateToken, async (req, res) => {
    const username = req.user.username;
    try {
        const storedTasks = await Task.find({username});
        res.status(201).json(storedTasks);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

app.post('/api/removeTask', authenticateToken, async (req, res) => {
    const { title } = req.body;
    const username = req.user.username;

    try {
        const result = await Task.deleteOne({ username, title });
        if (result.deletedCount === 0) {
            return res.status(404).json({ message: 'Task not found' });
        }
        res.status(200).json({ message: 'Task deleted', title });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

app.get('/api/penguins', async (req, res) => {
    res.status(200).json('You found the hidden route! Thank you for using Pomo Pengy!')
});

// Server static files
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'dist/pomo-pengy/index.html'));
});

app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something broke!');
});

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
