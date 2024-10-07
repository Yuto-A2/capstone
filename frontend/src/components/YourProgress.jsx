import { useState, useEffect } from "react";
import "../components/YourProgress.css";
import { Users } from "../pages/dummyData";
import { StudyGoal } from "../pages/dummyData";

export default function YourProgress() {
  const [userInfo, YourProgress] = useState([]);
  // this rought get user's information from the database
  useEffect(() => {
    const getloginInfo = async () => {
      let response = await fetch("http://localhost:8888//:id");
      let data = await response.json();
      console.log(data);
      YourProgress(data);
    }
    getloginInfo();
  }, []);
  // show user's goal and achievement
  return (
    <>
      <div className="userContainer">
        <img src={Users[0].profilePicture} alt="" className="userImg" />
        <span className="userName">{Users[0].username}</span>
      </div>
      <p className="studyHour">You’ve spent {StudyGoal[0].totalStudyTime} hours for learning Japanese.</p>
      <div className="progressContainer">
        <div className="totalStudied">
          <p className="requiredText">Required hours to acquire Japanese.</p>
          <p className="studyText">2200 hours</p>
          <p className="studyText">You have studied {StudyGoal[0].totalStudyTime} hours.</p>
        </div>
        <div className="jlptRequired">
          <p className="requiredText">Required hours to pass JLPT N 5.</p>
          <p className="studyText">350 hours</p>
          <p className="studyText">You have studied {StudyGoal[0].jlptStudyHour} hours.</p>
        </div>
        <div className="goalOfWeek">
          <p className="requiredText">Your goal of this week.</p>
          <p className="studyText">{StudyGoal[0].weeklyGoalTime} hours</p>
          <p className="studyText">You have studied {StudyGoal[0].weeklyAcheivedHour} hours.</p>
        </div>
        <div className="homeworkOfWeek">
          <p className="requiredText">Your Homework this week.</p>
          <p className="studyText">{StudyGoal[0].homework1}</p>
          <p className="studyText">{StudyGoal[0].homework2}</p>
        </div>
      </div>{/* progress container */}
    </>
  );
}