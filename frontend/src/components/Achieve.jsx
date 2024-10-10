import { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';
import "../components/Acheive.css"

export default function Achieve() {
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

    const { studyHours, achievement } = userInfo;

    if (!studyHours || !achievement) {
        return <p>Data is not available</p>;
    }

    return (
        <>
            <div className="learningHour">
                <span className="learningtime">Learning hour</span>
                <span className="today">{userInfo.date}</span>
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
