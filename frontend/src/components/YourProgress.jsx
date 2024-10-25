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
        // let response = await fetch(`http://localhost:8888/YourProgress/${id}`);
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

  // Set default values for studyHours and homework if not present in userInfo
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
          <p className="studyText">You have studied {studyHours.total} hours.</p>
        </div>
        <div className="jlptRequired">
          <p className="requiredText">Required hours to pass JLPT N 5.</p>
          <p className="studyText">350 hours</p>
          <p className="studyText">You have studied {studyHours.jlpt} hours.</p>
        </div>
        <div className="goalOfWeek">
          <p className="requiredText">Your goal of this week.</p>
          <p className="studyText">{userInfo.planOfWeeklyStudyHour || "No weekly goal set"} hours</p>
          {userInfo.studied?.length > 0 ? (
            userInfo.studied.map((study, index) => (
              <p className="studyText" key={index}>
                {study.study}
              </p>
            ))
          ) : (
            <p className="studyText">No studies recorded this week.</p>
          )}
          <p className="studyText">You have studied {studyHours.weekly} hours.</p>
        </div>
        <div className="homeworkOfWeek">
          <p className="requiredText">Your Homework this week.</p>
          {homework.length > 0 ? (
            homework.map((hw, index) => (
              <div key={index}>
                <p className="studyText">{hw.homeworkTitle}</p>
              </div>
            ))
          ) : (
            <p>No homework this week.</p>
          )}
        </div>{/* /div homeworkOfWeek */}
      </div> {/* /div progressContainer */}
    </>
  );
}
