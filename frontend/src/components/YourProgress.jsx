import { useState, useEffect } from "react";
import "../components/YourProgress.css"
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
        <img src="./img/john.jpeg" alt="" className="userImg" />
        <span className="userName">John</span>
      </div>
      <p className="studyHour">You’ve spent   120 hours for learning Japanese.</p>
      <div className="progressContainer">
        <div className="totalStudied">
          <p className="requiredText">Required hours to acquire Japanese.</p>
          <p className="studyText">2200 hours</p>
          <p className="studyText">You have studied  120 hours.</p>
        </div>
        <div className="jlptRequired">
          <p className="requiredText">Required hours to pass JLPT N 5.</p>
          <p className="studyText">350 hours</p>
          <p className="studyText">You have studied  13 hours.</p>
        </div>
        <div className="goalOfWeek">
          <p className="requiredText">Your goal of this week.</p>
          <p className="studyText">350 hours</p>
          <p className="studyText">You have studied  13 hours.</p>
        </div>
        <div className="homeworkOfWeek">
          <p className="requiredText">Your Homework this week.</p>
          <p className="studyText">Speaking practice</p>
          <p className="studyText">Grammar p. 100</p>
        </div>
      </div>{/* progress container */}
    </>
  );
}