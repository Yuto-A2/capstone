const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        min: 3,
        max: 25,
        unique: true,
    },
    email: {
        type: String,
        required: true,
        max: 50,
        unique: true,
    },
    password: {
        type: String,
        required: true,
        min: 6,
        max: 50,
    },
    profilePicture: {
        type: String,
        default: "",
    },
    isAdmin: {
        type: Boolean,
        default: false,
    },
    desc: {
        type: String,
        max: 70,
    },
    totalStudyTime: {
        type: Number,  
        default: 0,
    },
    studiedSubjects: {
        type: [String],  
    },
    categories: {
        type: [String],  
    },
    weeklyGoalTime: {
        type: Number,  
        default: 0,
    },
},
{ timestamps: true }
);

module.exports = mongoose.model("User", UserSchema);
