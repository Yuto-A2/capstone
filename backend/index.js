// setting of express
const express = require("express");
const router = require("express").Router();
const cors = require("cors");
// setting of dotenv
const dotenv = require("dotenv");
dotenv.config();
// setting of database
const { MongoClient, ObjectId } = require("mongodb");
// const dbUrl = `mongodb+srv://${process.env.DBUSER}:${process.env.DBPWD}@${process.env.DBHOST}/?retryWrites=true&w=majority&appName=My-learning-plan`;
const dbUrl = "mongodb+srv://temothy101629:KYIvGsFHQ6emEHT0@my-learning-plan.rzopx.mongodb.net/?retryWrites=true&w=majority&appName=My-learning-plan";
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

//user's information add to sign up.
app.post("/api/users/add/submit", async (request, response) => {
    // user information
    let userName = request.body.userName;  
    let email = request.body.email;        
    let password = request.body.password;  
    let profilePic = request.body.profilePic; 

    
    // // set goal
    // let studyHours = request.body.studyHours; 
    // let planOfWeeklyStudyHour = request.body.planOfWeeklyStudyHour; 
    // let { homeworkTitle, homeworkDsc } = request.body.homework[0];
    // let homeworktitle = homeworkTitle;
    // let homeworkdsc = homeworkDsc;
    // let category = request.body.category;  

    // //achievement
    // let { daily, weekly, monthly, jlpt, total } = request.body.studiedHour;
    // let dailyHour = daily;
    // let weeklyHour = weekly;
    // let monthlyHour = monthly;
    // let jlptHour = jlpt;
    // let totalHour = total;
    // // studying array
    // let { study, date } = request.body.studied[0];  
    // let studied = study;
    // let studyDate = date;

    // input information
    let setUsers = {
        userName: userName,
        email: email,
        password: password,
        profilePic: profilePic,
        // studyHours: studyHours,
        // homework: [{
        //     homeworkTitle: homeworktitle,
        //     homeworkDsc: homeworkdsc
        // }],
        // planOfWeeklyStudyHour: planOfWeeklyStudyHour,
        // category: category,
        // studied: [{
        //     study: studied,
        //     date: studyDate
        // }],
        // studiedHour: {
        //     daily: dailyHour,
        //     weekly: weeklyHour,
        //     monthly: monthlyHour,
        //     jlptHour: jlptHour,
        //     total: totalHour,
        // },
    }
    await addUser(setUsers);
})

async function addUser(userInfo) {
    const db = await connection(); 
    var status = await db.collection("userInfo").updateOne(
        { userName: userInfo.userName }, 
        {
            // $push: { 
            //     studied: userInfo.studied[0],
            //     category: { $each: userInfo.category },
            //     homework: userInfo.homework[0],  
            // },
            $set: { 
                userName: userInfo.userName,  
                email: userInfo.email, 
                profilePic: userInfo.profilePic,  
                password: userInfo.password,  
                // studyHours: userInfo.studyHours,  
                // planOfWeeklyStudyHour: userInfo.planOfWeeklyStudyHour, 
                // studiedHour: userInfo.studiedHour,  
            }
        },
        { upsert: true }  
    );

    console.log("UserInformation updated");
};

// Set your plan
app.post("/api/users/add/submit/:id", async (request, response) => {
    let userId = request.params.id;

    // user information
    let userName = request.body.userName;  
    let email = request.body.email;        
    let password = request.body.password;  
    let profilePic = request.body.profilePic; 
    
    // set goal
    // let studyHours = request.body.studyHours; 
    let { homeworkTitle, homeworkDsc } = request.body.homework[0];
    let homeworktitle = homeworkTitle;
    let homeworkdsc = homeworkDsc;
    let planOfWeeklyStudyHour = request.body.planOfWeeklyStudyHour; 
    let category = request.body.category;  

    // input information
    let setUsers = {
        userName: userName,
        email: email,
        password: password,
        profilePic: profilePic,
        // studyHours: studyHours,
        planOfWeeklyStudyHour: planOfWeeklyStudyHour,
        category: category,
        homework: [{
            homeworkTitle: homeworktitle,
            homeworkDsc: homeworkdsc
        }]
    };

    // add or update the user based on their ID
    await updateUserById(userId, setUsers);
});

async function updateUserById(userId, userInfo) {
    const db = await connection(); 
    var status = await db.collection("StudyGoal").updateOne(
        { _id: userId },  
        {
            $push: { 
                category: { $each: userInfo.category },
                homework: userInfo.homework[0]  
            },
            $set: { 
                userName: userInfo.userName,  
                email: userInfo.email, 
                profilePic: userInfo.profilePic,  
                password: userInfo.password,  
                planOfWeeklyStudyHour: userInfo.planOfWeeklyStudyHour, 
                // studiedHour: userInfo.studiedHour,  
            }
        },
        { upsert: true }  
    );

    console.log("User information updated");
}

//input their achievement 
app.post("/api/achievement/add/submit/:id", async (request, response) => {
    let userId = request.params.id;

    // user information
    let userName = request.body.userName;  
    let email = request.body.email;        
    let password = request.body.password;  
    let profilePic = request.body.profilePic; 
    
    // set goal
    // let studyHours = request.body.studyHours; 
    let category = request.body.category;  

    // achievement
    let { daily, weekly, monthly, jlpt, total } = request.body.studiedHour;
    let dailyHour = daily;
    let weeklyHour = weekly;
    let monthlyHour = monthly;
    let jlptHour = jlpt;
    let totalHour = total;

    // studying array
    let { study, date } = request.body.studied[0];  
    let studied = study;
    let studyDate = date;

    // study note
    let studyNote = studyNote;

    // input information
    let setUsers = {
        userName: userName,
        email: email,
        password: password,
        profilePic: profilePic,
        // studyHours: studyHours,
        category: category,
        studied: [{
            study: studied,
            date: studyDate
        }],
        studiedHour: {
            daily: dailyHour,
            weekly: weeklyHour,
            monthly: monthlyHour,
            jlptHour: jlptHour,
            total: totalHour,
        },
        studyNote: studyNote,
    };

    // add or update the user based on their ID
    await updateAchievementById(userId, setUsers);
});

async function updateAchievementById(userId, userInfo) {
    const db = await connection(); 
    var status = await db.collection("StudyGoal").updateOne(
        { _id: userId },  
        {
            $push: { 
                studied: userInfo.studied[0],
                category: { $each: userInfo.category }, 
                studyNote: studyNote,
                // studyHours: userInfo.studyHours,  
            },
            $set: { 
                userName: userInfo.userName,  
                email: userInfo.email, 
                profilePic: userInfo.profilePic,  
                password: userInfo.password,  
                studiedHour: userInfo.studiedHour,  
            }
        },
        { upsert: true }  
    );

    console.log("User information updated");
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
    const editId = { _id: id };  
    const result = await db.collection("StudyGoal").findOne(editId);
    return result;
}

// get user's goal
app.get("/goals/:goalId", async (req, res) => {
    try {
        const userGoals = await getUserGoals(req.params.goalId);
        if (!userGoals) {
            return res.status(404).json({ error: "cannot find a goal." });
        }
        const { password, ...other } = userGoals;
        res.status(200).json(other);  
    } catch (err) {
        console.error(err);
        return res.status(500).json({ error: "Failed to get user's goals." });
    }
});

async function getUserGoals(goalId) {
    const db = await connection();
    const editId = {  _id: new ObjectId(goalId) }; 
    const result = await db.collection("StudyGoal").findOne(editId);  
    return result;
}

// get user's achievement
app.get("/achievement/:userId", async (req, res) => {
    try {
        let userId = req.params.userId; 
        const userAchievment = await getUserAchievments(userId);
        if (! userAchievment) {
            return res.status(404).json({ error: "cannot find an achievement." });
        }
        const { password, ...other } =  userAchievment;
        res.status(200).json(other);  
    } catch (err) {
        console.error(err);
        return res.status(500).json({ error: "Failed to get user's achievements." });
    }
});

async function getUserAchievments(userId) {
    const db = await connection();
    const editId = { userId: userId }; 
    const result = await db.collection("AchievedStudy").findOne(editId);  // `StudyGoal` コレクションから取得
    return result;
}

// get user information by query
// app.get("/", async (req, res) => {
//     const userId = req.query.userId;
//     const userName = req.query.userName;
//     const User = await new User ({
//         userId: req.params.userId,
//         userName: req.body.userName,
//         email: req.body.email,
//         password: req.body.password,
//     })
//     try {
//       const user = userId
//         ? await User.findById(userId)
//         : await User.findOne({ userName: userName });
//       const { password, ...other } = user._doc;
//       return res.status(200).json(other);
//     } catch (err) {
//       return res.status(500).json(err);
//     }
//   });

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






