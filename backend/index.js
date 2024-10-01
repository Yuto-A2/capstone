const express = require("express");
const router = require("express").Router();
const cors = require("cors");
const dotenv = require("dotenv");
dotenv.config();
const { MongoClient, ObjectId } = require("mongodb");
const dbUrl = `mongodb+srv://${process.env.DBUSER}:${process.env.DBPWD}@${process.env.DBHOST}/?retryWrites=true&w=majority&appName=My-learning-plan`;
const client = new MongoClient(dbUrl);
const mongoose = require("mongoose");
mongoose.connect(dbUrl).then(()=>{
    console.log("Connecting DB...");
}).catch((err) =>{
    console.log(err)
})

const app = express();
const port = process.env.PORT || "8888";

app.use(express.urlencoded({ extended: true}));
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

async function getloginInfo(){
    db = await connection();
    const results = db.collection("userInfo").find({});
    const res = await results.toArray();
    return res;
}

//user's information add
app.get("/api/menu/add", async (request, response) => {
    let links = await getloginInfo();
    response.render("set-your-goal", { title: "Add menu link", menu: links })
});
app.post("/api/setGoal/add/submit", async (request, response) => {
    let desc = request.body.weight; 
    let totalStudyTime = request.body.path;  
    let studiedSubjects = request.body.name; 
    let categories = request.body.path;  
    let weeklyGoalTime = request.body.name; 
    await addStudy(newStudy);
    response.redirect("/");
})

async function addStudy(newStudy) {
    db = await connection();
    var status = await db.collection("userInfo").insertOne(newStudy);
    console.log("study added");
}

// get each user's informain
app.get("/api/login/:id", async (req, res) => {
    try {
        const user = await User.findById(req.params.id);
        res.status(200).json(user);
    } catch (err) {
        res.status(500).json({ error: "Failed to get user's information" });
    }
});




getloginInfo().then(data => {
    console.log(data);  
}).catch(error => {
    console.error("Error fetching login info:", error);
});

app.listen(port, () => {
    console.log(`Listening on http://localhost:${port}`);
});




