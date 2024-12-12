import axios from "axios";
import { useContext, useRef } from "react";
import { AuthContext } from "../state/AuthContext";
import { NavLink, useNavigate } from "react-router-dom";

export default function Complete() {
    const studyDate = useRef();
    const studied = useRef();
    const studiedHour = useRef();
    const category = useRef();
    const { user } = useContext(AuthContext);
    const navigate = useNavigate();

    // Error if user is null
    if (!user) {
        console.log("User is null");
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        const submittedElement = document.getElementById("submitted");
        submittedElement.innerHTML = `Submitted successfully. Go to Your Progress page or Set Your Plan page.`;
        submittedElement.style.color = "green";
        // studyhour from string to numer
        const studiedHourValue = parseFloat(studiedHour.current.value);

        const achievement = {
            userName: user.userName,
            email: user.email,
            password: user.password,
            category: [category.current.value],
            studied: [{
                study: studied.current.value,
                date: studyDate.current.value
            }],
            studiedHour: {
                daily: studiedHourValue,
                weekly: 0,
                monthly: 0,
                jlptHour: 0,
                total: studiedHourValue
            },
        };

        try {
            // Send the POST request to update the achievement
            // await axios.post(`http://localhost:8888/api/achievement/add/submit/${user._id}`, achievement, {
            await axios.post(`https://capstone-backend-ecru-tau.vercel.app/api/achievement/add/submit/${user._id}`, achievement, {
                headers: {
                    "Content-Type": "application/json",
                },
            });
            console.log("Achievement updated successfully");
            console.log(user._id); 
            navigate(`/YourProgress/${user._id}`);
        } catch (err) {
            console.log("Error while updating achievement:", err);
        }
    };

    return (
        <>
            <form onSubmit={(e) => handleSubmit(e)}>
                {/* setting goals */}
                <div className="trackGoalWrapper">
                    <div className="trackGoal">
                        <p className="explanation">When did you study?</p>
                    </div>
                    <div className="trackGoalContainer">
                        <input name="trackGoalForm" className="trackGoalForm" type="date" ref={studyDate} required/>
                    </div>
                </div>

                {/* categories */}
                <div className="trackStudiesWrapper">
                    <div className="trackStudy">
                        <p className="explanation">What did you do?</p>
                        <p className="explanation">(You can add up to five items)</p>
                    </div>
                    <div className="trackStudyContainer">
                        <input name="trackStudyForm" className="trackStudyForm" type="text" placeholder="(ex) textp.10 - 15" ref={studied} required/>
                    </div>
                </div>

                {/* track category */}
                <div className="categoryWrapper">
                    <div className="trackCategory">
                        <p className="explanation">Category</p>
                    </div>
                    <div className="setCategoryContainer">
                        <input name="setCategoryForm" className="setCategoryForm" type="text" placeholder="(ex) grammar" ref={category} required/>
                    </div>
                </div>

                {/* track study hours */}
                <div className="trackStudyHourWrapper">
                    <div className="trackStudyHourTitle">
                        <p className="explanation">How many hours did you study?</p>
                    </div>
                    <div className="trackStudyHourContainer">
                        <input name="trackStudyHourForm" className="trackStudyHourForm" type="number" placeholder="(ex) 5" min='0' max='24' ref={studiedHour} required/>
                    </div>
                </div>

                {/* submit button */}
                <div className="setHomeworkDscWrapper">
                    <div className="setHomeworkDscContainer">
                        <button className="btn" type="submit">Submit</button>
                    </div>
                </div>
            </form>
            <p id="submitted"></p>
        </>
    );
}
