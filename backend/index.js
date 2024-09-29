const express = require("express");
const router = require("express").Router();
const cors = require("cors");
const dotenv = require("dotenv");
dotenv.config();
const { MongoClient } = require("mongodb");
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
const userRoute = require("./routes/users");
const authRoute = require("./routes/auth");
const postRoute = require("./routes/posts");


app.use(express.urlencoded({ extended: true}));
app.use(express.json());

app.use(cors({
    origin: "*"
}));

app.use("/api/users", userRoute);
app.use("/api/auth", authRoute);
app.use("/api/posts", postRoute);
app.get("/api/login", async (request, response) => {
    let login = await getloginInfo();
    response.json(login);
})

app.listen(port, () => {
    console.log(`Listening on http://localhost:${port}`);
});

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

getloginInfo().then(data => {
    console.log(data);  
}).catch(error => {
    console.error("Error fetching login info:", error);
});
