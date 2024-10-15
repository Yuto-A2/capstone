const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
dotenv.config();

const app = express();
const port = process.env.PORT || 8888;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors({
    origin: "*"
}));

// MongoDB接続
mongoose.connect(`mongodb+srv://${process.env.DBUSER}:${process.env.DBPWD}@${process.env.DBHOST}/?retryWrites=true&w=majority&appName=My-learning-plan`)
    .then(() => console.log("MongoDB connected"))
    .catch((err) => console.log("MongoDB connection error:", err));

// Userモデルの定義
const UserSchema = new mongoose.Schema({
    userName: String,
    email: String,
    password: String,
    profilePic: String,
    studyHours: {
        daily: Number,
        weekly: Number,
        monthly: Number,
        jlpt: Number,
        total: Number
    },
    homework: [{ title: String, description: String }],
    planOfWeeklyStudyHour: Number,
    category: String,
    studied: [{ study: String, date: String }],
    studiedHour: {
        daily: Number,
        weekly: Number,
        monthly: Number,
        jlptHour: Number,
        total: Number
    }
});

const User = mongoose.model("User", UserSchema);

// ユーザー登録
app.post("/api/users/add/submit", async (req, res) => {
    try {
        const { userName, email, password, profilePic } = req.body;
        const hashedPassword = await bcrypt.hash(password, 10); // パスワードをハッシュ化
        const newUser = new User({
            userName,
            email,
            password: hashedPassword,
            profilePic
        });
        await newUser.save();
        res.status(201).json({ message: "User registered successfully" });
    } catch (err) {
        res.status(500).json({ error: "Failed to register user", details: err });
    }
});

// ユーザーログイン
app.post("/login", async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await User.findOne({ email });
        if (!user) return res.status(404).json("User not found");

        const isPasswordValid = await bcrypt.compare(password, user.password);
        if (!isPasswordValid) return res.status(400).json("Wrong password");

        res.status(200).json({ userName: user.userName, profilePic: user.profilePic });
    } catch (err) {
        res.status(500).json({ error: "Login failed", details: err });
    }
});

// ユーザー情報取得
app.get("/YourProgress/:id", async (req, res) => {
    try {
        const user = await User.findById(req.params.id);
        if (!user) return res.status(404).json("User not found");
        const { password, ...userInfo } = user.toObject();
        res.status(200).json(userInfo);
    } catch (err) {
        res.status(500).json({ error: "Failed to fetch user information", details: err });
    }
});

// サーバー起動
app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});
