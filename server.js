require("dotenv").config();
const express = require("express");
const path = require("path");
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const crypto = require("crypto");
const { type } = require("os");
const app = express();

// Manage DB connection
mongoose.connect(process.env.MONGO_URI, {});
const database = mongoose.connection;
database.on("error", (error) =>
  console.error("Database connection error:", error),
);
database.once("open", () => console.log("Database connected"));

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
    type: String,
  },
  accessToken: {
    type: String,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
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
    default: Date.now,
  },
});

const statsSchema = new mongoose.Schema({
  username: {
    required: true,
    type: String,
  },
  timeStudy: {
    /* Cummulative time studying (Pomodoro session based)  */ type: Number,
  },
  completedTasks: {
    /* Number of tasks removed (Making assumption that all input tasks are correct) */ type: Number,
  },
  tasksLifetime: {
    /* Total Number of tasks (active and inactive) */ type: Number,
  },
  NumberSessions: {
    /* Number of Pomodoro timers started AND completed */ type: Number,
  },
  streak: {
    /* Current consecutive Number days on the application */ type: Number,
  },
  longestStreak: {
    /* Max consecutive Number days on the application */ type: Number,
  },
  activeDays: { /* Number days on the application (lifetime)*/ type: Number },
  lastDateOnline: { type: Date },
});

// Define cursor to the collection
const User = mongoose.model("User", userSchema);
const Task = mongoose.model("Task", taskSchema);
const Stats = mongoose.model("Stats", statsSchema);

app.use(express.json());

// Serve static files from the Angular app
app.use(express.static(path.join(__dirname, "dist/pomo-pengy")));

// Token Helper Functions
const generateAccessToken = () => {
  return crypto.randomBytes(32).toString("hex");
};

const authenticateToken = async (req, res, next) => {
  const token = req.headers["authorization"];

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
app.post("/api/login", async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: "Invalid email or password" });
    }

    const username = user.username;

    const now = new Date();
    const dateOnly = new Date(now.getFullYear(), now.getMonth(), now.getDate());

    const stat = await Stats.findOne({ username });
    if (!stat) {
      const newStat = new Stats({
        username: username,
        timeStudy: 0,
        completedTasks: 0,
        tasksLifetime: 0,
        NumberSessions: 0,
        streak: 1,
        longestStreak: 1,
        activeDays: 1,
        lastDateOnline: dateOnly,
      });
      await newStat.save();
    } else {
      const lastActive = new Date(stat.lastDateOnline);
      const diff = Math.floor((now - lastActive) / (1000 * 60 * 60 * 24));

      const updateStat = {
        activeDays: stat.activeDays + 1,
        lastDateOnline: dateOnly,
      };

      if (diff === 1) {
        updateStat.streak = stat.streak + 1;
        if (updateStat.streak > stat.longestStreak) {
          updateStat.longestStreak = updateStat.streak;
        }
      } else if (diff > 1) {
        updateStat.streak = 1;
      }

      await Stats.findOneAndUpdate({ username }, updateStat);
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ message: "Invalid email or password" });
    }

    const accessToken = generateAccessToken();

    user.accessToken = accessToken;
    await user.save();

    res.status(200).json({ username: user.username, accessToken: accessToken });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});


app.post("/api/register", async (req, res) => {
  const { username, email, password } = req.body;

  try {
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "User already exists" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = new User({
      username,
      email,
      password: hashedPassword,
    });

    const now = new Date();
    const dateOnly = new Date(now.getFullYear(), now.getMonth(), now.getDate());

    const newStat = new Stats({
      username: username,
      timeStudy: 0,
      completedTasks: 0,
      tasksLifetime: 0,
      NumberSessions: 0,
      streak: 1,
      longestStreak: 1,
      activeDays: 1,
      lastDateOnline: dateOnly,
    });

    const savedStats = await newStat.save();
    const savedUser = await newUser.save();
    res.status(201).json(savedUser);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

app.post("/api/postTask", authenticateToken, async (req, res) => {
  const { title, dueDate, include } = req.body;
  const username = req.user.username;

  try {
    const newTask = new Task({
      username,
      title,
      dueDate,
      include,
    });

    const savedTask = await newTask.save();

    // Updating statistics
    const user = await Stats.findOne({ username });

    if(user) {
      const patch = await Stats.findOneAndUpdate(
        { username },
        { $inc: { tasksLifetime: 1 } },
        { returnDocument: 'after' },
      );
    }

    res.status(201).json(savedTask);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

app.get("/api/getTasks", authenticateToken, async (req, res) => {
  const username = req.user.username;
  try {
    const storedTasks = await Task.find({ username });
    res.status(201).json(storedTasks);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

app.delete("/api/removeTask", authenticateToken, async (req, res) => {
  const { title } = req.query;
  const username = req.user.username;

  try {
    const result = await Task.deleteOne({ username, title });
    if (result.deletedCount === 0) {
      res.status(404).json({ message: "Task not found" });
    } else {
      // Making the assumption that a deleted task is a completed task (In practice, not always true)
      const user = await Stats.findOne({ username });
      if (user) {
        const patch = await Stats.findOneAndUpdate(
          { username },
          { $inc: {completedTasks: 1} },
        );
      }
      res.status(200).json({ message: "Task deleted", title });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

app.get("/api/penguins", async (req, res) => {
  res
    .status(200)
    .json("You found the hidden route! Thank you for using Pomo Pengy!");
});

app.post("/api/endSession", authenticateToken, async (req, res) => {
  const { sessionTime } = req.body;
  const username = req.user.username;

  try {
    const user = Stats.findOne({ username });
    if (user) {
      const userStat = await Stats.findOneAndUpdate(
        { username },
        {
          $inc:{timeStudy: Number(sessionTime), NumberSessions: 1}
        },
      );
      res.status(200);
    } else {
      res.status(404).json({ message: "User not found" });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
});

app.get("/api/sendStats", authenticateToken, async (req, res) => {
  const username = req.user.username;
  try {
    const userStats = await Stats.findOne({ username });
    if (userStats) {
      const cleanedStats = {
        "study time": userStats.timeStudy,
        "number of completed tasks": userStats.completedTasks,
        "number of tasks created": userStats.tasksLifetime,
        "number of sessions completed": userStats.NumberSessions,
        "current study streak": userStats.streak,
        "longest study streak": userStats.longestStreak,
      };
      res.status(200).json(cleanedStats);
    } else {
      res.status(404).json({ message: "User not found" });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
});

app.patch("/api/patchTask", authenticateToken, async (req, res) => {
  const username = req.user.username;
  const { title, newTitle, newDueDate, newInclude } = req.body;

  try {
    const updatedTask = await Task.findOneAndUpdate(
      { username, title },
      {$set: {
          title: newTitle,
          dueDate: newDueDate,
          include: newInclude
      }}
    );
    if (!updatedTask) {
      return res.status(404).send({ message: 'Task not found' });
    }
    res.send(updatedTask);
  } catch (error) {
    res.status(500).send({ message: 'Error updating task', error });
  }


});

app.get("/api/getRanking", authenticateToken, async (req, res) => {
  const username = req.user.username;
  try {
    const userStats = await Stats.findOne({ username });
    if (userStats) {
      const studyTime = userStats.timeStudy;
      let rank = "rank up by studying!";
      const ranking = { 45: "Rookie Pengy",
                        90: "Apprentice Pengy",
                        180: "Junior Pengy Analyst",
                        360: "Associate Pengy",
                        720: "Pengy Analyst",
                        1480: "Pengy Fellow",
                        2960: "Pengy Researcher",
                        3600: "Erudite Pengy",
                        4600: "Luminary Pengy",
                        5600: "Master Pengy",
                        6600: "Doctor Pengy",
                        10000: "Enlightened Pengy"
                      };
      for(let min in ranking){
        if(studyTime >= min){
          rank = ranking[min];
        }
      }
      res.status(200).json({cur: rank});
    } else {
      res.status(404).json({ message: "User not found" });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
});

// Server static files
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "dist/pomo-pengy/index.html"));
});

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("Something broke!");
});

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
