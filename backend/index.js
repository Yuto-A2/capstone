// setting of express
const express = require("express");
const router = require("express").Router();
const cors = require("cors");
// setting of dotenv
const dotenv = require("dotenv");
dotenv.config();
// setting of database
const { MongoClient, ObjectId } = require("mongodb");
const dbUrl = `mongodb+srv://${process.env.DBUSER}:${process.env.DBPWD}@${process.env.DBHOST}/?retryWrites=true&w=majority&appName=My-learning-plan`;
const client = new MongoClient(dbUrl);
const mongoose = require("mongoose");
mongoose.connect(dbUrl).then(() => {
    console.log("Connecting DB...");
}).catch((err) => {
    console.log(err)
})
// setting of port 
const app = express();
const port = process.env.PORT || "8888";
app.listen(port, () => {
    console.log(`Listening on http://localhost:${port}`);
});
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors({
    origin: "*"
}));


// api/login 
// get user's information
app.get("/api/login", async (request, response) => {
    let login = await getloginInfo();
    response.json(login);
})

async function connection() {
    await client.connect();
    const db = client.db("loginInfo");
    return db;
}

async function getloginInfo() {
    db = await connection();
    const results = db.collection("userInfo").find({});
    const res = await results.toArray();
    return res;
}

// api/goals 
// get goal's information
app.get("/api/goal", async (request, response) => {
    let goal = await getGoalInfo();
    response.json(goal);
})

async function connection() {
    await client.connect();
    const db = client.db("loginInfo");
    return db;
}

async function getGoalInfo() {
    db = await connection();
    const results = db.collection("StudyGoal").find({});
    const res = await results.toArray();
    return res;
}

//user's information add
app.get("/api/users/add", async (request, response) => {
    let links = await getloginInfo();
    response.render("YourProgress", { title: "Add menu link", menu: links })
});
app.post("/api/users/add/submit", async (request, response) => {
    let userId = request.body.userId;
    let userName = request.body.userName;
    let email = request.body.email;
    let password = request.body.password;
    let setUsers = {
        userId: userId,
        userName: userName,
        email: email,
        password: password
    }
    await addUser(setUsers);
    response.redirect("/");
})

async function addUser(userInfo) {
    db = await connection();
    var status = await db.collection("userInfo").insertOne(userInfo);
    console.log("study added");
}

// get each user's informain
app.get("/YourProgress/:id", async (req, res) => {
    try {
        const user = await getSingleLink(req.params.id);
        if (!user) {
            return res.status(404).json({ error: "cannot find a user." });
        }
        const { password, ...other } = user;
        res.status(200).json(other);
    } catch (err) {
        console.error(err);
        return res.status(500).json({ error: "failed to get user's info." });
    }
});

async function getSingleLink(id) {
    const db = await connection();
    const editId = { _id: new ObjectId(id) };
    const result = await db.collection("userInfo").findOne(editId);
    return result;
}

//Add user's information to signup
app.get("/api/signup/add", async (request, response) => {
    let links = await getloginInfo();
    response.render("set-your-goal", { title: "Add menu link", menu: links })
});
app.post("/api/signup/add/submit", async (request, response) => {
    let userId = request.body.userId;
    let userName = request.body.userName;
    let email = request.body.email;
    let password = request.body.password;
    let signup = {
        userId: userId,
        userName: userName,
        email: email,
        password: password,
    }
    await addStudy(signup);
    response.redirect("YourProgress/:id");
})

async function addStudy(newStudy) {
    db = await connection();
    var status = await db.collection("StudyGoal").insertOne(newStudy);
    console.log("study added");
}

getloginInfo().then(data => {
    console.log(data);
}).catch(error => {
    console.error("Error fetching login info:", error);
});






