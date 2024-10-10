import { useState, useEffect } from "react";
import "../components/YourProgress.css";
import { useParams } from 'react-router-dom';
import Header from "../components/Header"



export default function YourProgress() {
  const { id } = useParams();
  const [userInfo, setUserInfo] = useState(null); 

  useEffect(() => {
    const getloginInfo = async () => {
      try {
        let response = await fetch(`http://localhost:8888/YourProgress/${id}`);
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        let data = await response.json();
        console.log(data);
        setUserInfo(data);
      } catch (error) {
        console.error("Fetch error:", error);
      }
    }
    getloginInfo();
  }, [id]);


  if (!userInfo) {
    return <p>Loading...</p>; 
  }

  return (
    <>
    <Header navigation />
      <div className="userContainer">
        <img src={userInfo.profilePic} alt="" className="userImg" />
        <span className="userName">{userInfo.userName}</span>
      </div>
      <p className="studyHour">You’ve spent {userInfo.studyHours.total} hours for learning Japanese.</p>
      <div className="progressContainer">
        <div className="totalStudied">
          <p className="requiredText">Required hours to acquire Japanese.</p>
          <p className="studyText">2200 hours</p>
          <p className="studyText">You have studied {userInfo.studyHours.total} hours.</p>
        </div>
        <div className="jlptRequired">
          <p className="requiredText">Required hours to pass JLPT N 5.</p>
          <p className="studyText">350 hours</p>
          <p className="studyText">You have studied {userInfo.studyHours.jlpt} hours.</p>
        </div>
        <div className="goalOfWeek">
          <p className="requiredText">Your goal of this week.</p>
          <p className="studyText">{userInfo.planOfWeeklyStudyHour} hours</p>
          {/* loop study goal */}
          {userInfo.WeeklyStudySetting.map((study, index) => (
            <p className="studyText" key={index}>
              {study.study}
            </p>
          ))}
          <p className="studyText">You have studied {userInfo.studyHours.weekly} hours.</p>
        </div>
        <div className="homeworkOfWeek">
          <p className="requiredText">Your Homework this week.</p>
          {userInfo.homework.map((hw, index) => (
            <div key={index}>
              <p className="studyText">{hw.title}</p>
            </div>
          ))}
        </div>
      </div>{/* progress container */}
    </>
  );
}
