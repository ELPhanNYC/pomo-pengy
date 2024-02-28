import base64
from flask import Flask , request , make_response, jsonify
from flask_socketio import SocketIO
from pymongo import MongoClient # For using PyMongo 

import secrets
import hashlib
import bcrypt
from pymongo import MongoClient

app = Flask(__name__)
socketio = SocketIO(app, cors_allowed_origins="*") # Socket Def -> Needs JS Update
#app.config["MONGO_URI"] = 'mongodb://root:examplepass@mongodb:27017/rate_my_class?authSource=admin'
mongo = MongoClient('mongodb', username='root', password='examplepass')
#mongo = MongoClient("localhost")
db = mongo["pomo-pengy"]
users = db["users"]
posts = db["posts"]

@app.route("/login", methods=['POST']) # Reconfigured to work with common Mongo layout
def login():
    login = False
    login_dict = dict(request.form)
    user_not_escaped = login_dict.get("username_login") # using name from form
    pwd = login_dict.get("password_login") #using name from form
    user = user_not_escaped.replace("&","&amp").replace("<","&lt;").replace(">","&gt") #escape html in username
    auth_obj = users.find_one({"username" : user})
    if auth_obj != None:
        if bcrypt.checkpw(pwd.encode("utf-8"), auth_obj["password"]): # using bcrypt to check password
            login = True  
    if login:
        auth_token = secrets.token_urlsafe(16)
        hashed_token = hashlib.sha256(auth_token.encode())
        hashed_bytes = hashed_token.digest()
        users.update_one({"username" : user }, {"$set": {"auth_token": hashed_bytes}}, upsert=True)
        response = make_response("Moved Permanently",301)
        response.headers["Location"] = '/'
        response.set_cookie('auth_token', auth_token, httponly=True, max_age=3600)
        return response
    return make_response("Login Failed",400)

@app.route("/register", methods=['POST'])
def register():
    register_dict = dict(request.form)
    user = register_dict.get("username_reg")
    pwd = register_dict.get("password_reg")
    email = register_dict.get("email_reg")

    #Escape HTML in username
    user_escaped = user.replace("&","&amp").replace("<","&lt;").replace(">","&gt")
    
    if users.find_one({ "username" : user_escaped }) != None:
        res = make_response("Moved Permanently", 301)
        res.headers["Location"] = "/register_page"
        return res

    #Salt and Hash password
    salt = bcrypt.gensalt()
    hashed_pwd = bcrypt.hashpw(pwd.encode("utf-8"), salt)
    
    #Input username and password into "users" collection alongside email verification status and email address
    users.insert_one({"username": user_escaped, "password": hashed_pwd, "email": email})

    response = make_response("Moved Permanently", 301)
    response.headers["Location"] = '/login_page'
    return response

if __name__ == '__main__':
    # app.run(host='0.0.0.0',port=8080)
    socketio.run(app, host='0.0.0.0', port=8080, allow_unsafe_werkzeug=True)