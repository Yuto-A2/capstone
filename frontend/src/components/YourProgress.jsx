import { useState, useEffect, useContext } from "react";
import "../components/YourProgress.css";
import { useParams } from 'react-router-dom';
import Header from "../components/Header";
import { AuthContext } from "../state/AuthContext";

export default function YourProgress() {
  const { user } = useContext(AuthContext);
  const { id } = useParams();
  const [userInfo, setUserInfo] = useState(null); 
  const [error, setError] = useState(null);

  useEffect(() => {
    const getloginInfo = async () => {
      try {
        let response = await fetch(`https://capstone-backend-ecru-tau.vercel.app/YourProgress/${id}`);
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        let data = await response.json();
        setUserInfo(data);
      } catch (error) {
        setError(error.message);
        console.error("Fetch error:", error);
      }
    }
    getloginInfo();
  }, [id]);

  if (error) {
    return <p>Error: {error}</p>;  
  }

  if (!userInfo) {
    return <p>Please set your goal first...</p>;  
  }

  // Set default values for studyHours and homework
  const studyHours = userInfo.studyHours || {
    total: 0, 
    jlpt: 0, 
    weekly: 0 
  };
  const homework = userInfo.homework || [];

  return (
    <>
      <Header navigation />
      <div className="userContainer">
        <img src={userInfo.profilePic ? userInfo.profilePic : "/img/noAvatar.png"} alt="" className="userImg" />
        <span className="userName">{userInfo.userName}</span>
      </div>
      
      <p className="studyHour">You’ve spent {studyHours.total} hours for learning Japanese.</p>

      <div className="progressContainer">
        <div className="totalStudied">
          <p className="requiredText">Required hours to acquire Japanese.</p>
          <p className="studyText">2200 hours</p>
          {studyHours.total !== undefined ? (
            <p className="studyText">You have studied {studyHours.total} hours.</p>
          ) : (
            <p className="errorText">Total study hours data is missing.</p>
          )}
        </div>
        
        <div className="jlptRequired">
          <p className="requiredText">Required hours to pass JLPT N5.</p>
          <p className="studyText">350 hours</p>
          {studyHours.jlpt !== undefined ? (
            <p className="studyText">You have studied {studyHours.jlpt} hours.</p>
          ) : (
            <p className="errorText">JLPT study hours data is missing.</p>
          )}
        </div>
        
        <div className="goalOfWeek">
          <p className="requiredText">Your goal of this week.</p>
          <p className="studyText">{userInfo.planOfWeeklyStudyHour || "N/A"} hours</p>
          {userInfo.WeeklyStudySetting?.length > 0 ? (
            userInfo.WeeklyStudySetting.map((study, index) => (
              <p className="studyText" key={index}>
                {study.study}
              </p>
            ))
          ) : (
            <p className="errorText">No weekly study plan found.</p>
          )}
          {studyHours.weekly !== undefined ? (
            <p className="studyText">You have studied {studyHours.weekly} hours.</p>
          ) : (
            <p className="errorText">Weekly study hours data is missing.</p>
          )}
        </div>
        
        <div className="homeworkOfWeek">
          <p className="requiredText">Your Homework this week.</p>
          {homework.length > 0 ? (
            homework.map((hw, index) => (
              <div key={index}>
                <p className="studyText">{hw.title}</p>
                <p className="studyText">{hw.description}</p>
              </div>
            ))
          ) : (
            <p className="errorText">No homework this week.</p>
          )}
        </div>
      </div> {/* /div progressContainer */}
    </>
  );
}
