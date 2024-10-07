import { StudyGoal } from "../pages/dummyData";

// User name input.
export default function Acheive() {
    async function handleForm(e) {
        //e.preventDefault(); // prevent actual page refresh on submission
        //console.log(e.target.from.value);
        let userNameForm = {
            userName: e.target.userName.value,
        };
        await fetch(`https://8888/api/login`);
    }
    return (
        <>
            <div className="learningHour">
                <span className="learningtime">Learning hour</span>
                <span className="today">{StudyGoal[0].date}</span>
            </div>
            <table className="studyHourTable">
                <tr>
                    <th>Today</th>
                    <th>This week</th>
                    <th>This month</th>
                </tr>
                <tr>
                    <td>{StudyGoal[0].daylyAcheivedHour} hours</td>
                    <td>{StudyGoal[0].weeklyAcheivedHour} hours</td>
                    <td>{StudyGoal[0].monthlyAcheivedHour} hours</td>
                </tr>
            </table>

            <div className="categoryList">
                <p className="categoryText">category</p>
                <select name="studyCategory" id="studyCategory" className="options">
                    <option name="grammar" id="grammar" className="option">Grammar</option>
                    <option name="reading" id="reading" className="option">Reading</option>
                </select>
            </div>

            <div className="studyThisWeekContainer">
                <div className="studyThisWeekItems">
                    <p className="studiedDate">2024.9.15 Sun</p>
                    <p className="studyText">{StudyGoal[0].studiedSubject1}</p>
                </div>
            
            
                <div className="studyThisWeekItems">
                    <p className="studiedDate">2024.9.16 Mon</p>
                    <p className="studyText">{StudyGoal[0].studiedSubject2}</p>
                </div>
            
            
                <div className="studyThisWeekItems">
                    <p className="studiedDate">2024.9.17 Tue</p>
                    <p className="studyText">{StudyGoal[0].studiedSubject3}</p>
                </div>
            
            
                <div className="studyThisWeekItems">
                    <p className="studiedDate">2024.9.18 Wed</p>
                    <p className="studyText">{StudyGoal[0].studiedSubject4}</p>
                </div>
            
            
                <div className="studyThisWeekItems">
                    <p className="studiedDate">2024.9.19 Thurs</p>
                    <p className="studyText">{StudyGoal[0].studiedSubject5}</p>
                </div>
        
            
                <div className="studyThisWeekItems">
                    <p className="studiedDate">2024.9.20 Fri</p>
                    <p className="studyText">{StudyGoal[0].studiedSubject6}</p>
                </div>
            
            
                <div className="studyThisWeekItems">
                    <p className="studiedDate">2024.9.21 Sat</p>
                    <p className="studyText">{StudyGoal[0].studiedSubject7}</p>
                </div>
            </div>
        </>
    )
}

