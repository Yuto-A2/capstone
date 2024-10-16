import { useState, useEffect, useContext } from "react";
import { useParams } from 'react-router-dom';
import "../components/Acheive.css";
import Header from "../components/Header";
import { AuthContext } from "../state/AuthContext";

export default function Achieve() {
    const { id } = useParams();
    const [userInfo, setUserInfo] = useState(null);
    const todayDate = new Date().toLocaleDateString('en-CA', { weekday: "long", year: "numeric", month: "short", day: "numeric" });
    const { user } = useContext(AuthContext);
    useEffect(() => {
        const getGoalInfo = async () => {
            try {
                // let response = await fetch(`http://localhost:8888/YourProgress/${id}`);
                let response = await fetch(`https://capstone-backend-ecru-tau.vercel.app/YourProgress/${id}`);
                if (!response.ok) {
                    throw new Error("Network response was not ok");
                }
                let data = await response.json();
                console.log(data);
                setUserInfo(data);
            } catch (error) {
                console.error("Fetch error:", error);
            }
        };
        getGoalInfo();
    }, [id]);

    // 
    if (!userInfo) {
        return <p>Please set your study first...</p>;
    }

    // Set default
    const studyHours = userInfo.studiedHour || { daily: 0, weekly: 0, monthly: 0 };
    const achievement = userInfo.studied || [];

    return (
        <>
        <Header navigation />
            <div className="learningHour">
                <span className="learningtime">Learning hour</span>
                <span className="today">{todayDate}</span>
            </div>

            <table className="studyHourTable">
                <thead>
                    <tr>
                        <th>Today</th>
                        <th>This week</th>
                        <th>This month</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>{studyHours.daily} hours</td>
                        <td>{studyHours.weekly} hours</td>
                        <td>{studyHours.monthly} hours</td>
                    </tr>
                </tbody>
            </table>

            <div className="categoryList">
                <p className="categoryText">Category</p>
                <select name="studyCategory" id="studyCategory" className="options">
                    <option value="grammar" className="option">Grammar</option>
                    <option value="reading" className="option">Reading</option>
                </select>
            </div>

            <div className="studyThisWeekContainer">
                {achievement.map((item, index) => (
                    <div className="studyThisWeekItems" key={index}>
                        <p className="studiedDate">{item.date}</p>
                        <p className="studyText">{item.study}</p>
                    </div>
                ))}
            </div>
        </>
    );
}
