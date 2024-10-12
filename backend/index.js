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

// Connect with database.
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

//user's information add
app.post("/api/users/add/submit", async (request, response) => {
    let userName = request.body.userName;  
    let email = request.body.email;        
    let password = request.body.password;  
    let profilePic = request.body.profilePic; 
    
    let studyHours = request.body.studyHours; 
    let homework = request.body.homework; 
    let planOfWeeklyStudyHour = request.body.planOfWeeklyStudyHour; 
    let WeeklyStudySetting = request.body.WeeklyStudySetting; 
    let achievement = request.body.achievement; 
    let category = request.body.category; 

    let setUsers = {
        userName: userName,
        email: email,
        password: password,
        profilePic: profilePic,
        studyHours: studyHours,
        homework: homework,
        planOfWeeklyStudyHour: planOfWeeklyStudyHour,
        WeeklyStudySetting: WeeklyStudySetting,
        achievement: achievement,
        category: category
    }
    await addUser(setUsers);
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

// get user information by query
app.get("/", async (req, res) => {
    const userId = req.query.userId;
    const userName = req.query.userName;
    const User = await new User ({
        userId: req.params.userId,
        userName: req.body.userName,
        email: req.body.email,
        password: req.body.password,
    })
    try {
      const user = userId
        ? await User.findById(userId)
        : await User.findOne({ userName: userName });
      const { password, ...other } = user._doc;
      return res.status(200).json(other);
    } catch (err) {
      return res.status(500).json(err);
    }
  });

// Add user's information to login
app.post("/login", async (req, res) => {
    try {
        const user = await getEmail(req.body.email); // get user name
        if (!user) return res.status(404).send("cannot find the user name");
        
        const validPassword = req.body.password === user.password; 
        if (!validPassword) return res.status(400).json("Wrong password");
        
        return res.status(200).json(user);
    } catch (err) {
        return res.status(500).json(err);
    }
});

// access database and get the user email
async function getEmail(email) {
    const db = await connection();
    const result = await db.collection("userInfo").findOne({ email: email }); // search user name
    return result;
}


getloginInfo().then(data => {
    console.log(data);
}).catch(error => {
    console.error("Error fetching login info:", error);
});






