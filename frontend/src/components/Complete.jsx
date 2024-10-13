import axios from "axios";
import { useRef } from "react";

// import { useState, useEffect } from "react";
export default function Complete() {
    const studyDate = useRef();
    const studied = useRef();
    const studiedHour = useRef();
    const category = useRef();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const user = {
                category: category.current.value,
                studyDate: studyDate.current.value,
                studied: studied.current.value,
                studiedHour: studiedHour.current.value
            };
            await axios.post("http://localhost:8888/api/achievement/add", user)
        } catch (err) {
            console.log(err)
        }
    };
    // show user's goal and achievement
    return (
        <>
            <form onSubmit={(e) => handleSubmit(e)}>
                {/* setting goals */}
                <div className="trackGoalWrapper">
                    <div className="trackGoal">
                        <p className="explanation">When did you study?</p>
                    </div>{/* trackGoal */}
                    <div className="trackGoalContainer">
                        <input name="trackGoalForm" className="trackGoalForm" type="date" ref={studyDate}/>
                    </div>{/* trackGoalContainer */}
                </div>{/* trackGoalWrapper */}

                {/* categories */}
                <div className="trackStudiesWrapper">
                    <div className="trackStudy">
                        <p className="explanation">What did you do?</p>
                        <p className="explanation">(You can add up to five items)</p>
                    </div>{/* trackStudy */}
                    <div className="trackStudyContainer">
                        <input name="trackStudyForm" className="trackStudyForm" type="text" placeholder="(ex) textp.10 - 15" ref={studied}/>
                    </div>{/* trackStudyContainer */}
                </div>{/* trackStudiesWrapper */}

                {/* track category */}
                <div className="categoryWrapper">
                    <div className="trackCategory">
                        <p className="explanation">category</p>
                    </div>{/* trackCategory */}
                    <div className="setCategoryContainer">
                        <input name="setCategoryForm" className="setCategoryForm" type="text" placeholder="(ex) grammar" ref={category}/>
                    </div>{/* setTimeContainer */}
                </div>{/* setTimeWrapper */}

                {/* track study hours */}
                <div className="trackStudyHourWrapper">
                    <div className="trackStudyHourTitle">
                        <p className="explanation">How many hours did you study?</p>
                    </div>{/* trackStudyHourTitle */}
                    <div className="trackStudyHourContainer">
                        <input name="trackStudyHourForm" className="trackStudyHourForm" type="text" placeholder="(ex) 20" ref={studiedHour} />
                    </div>{/* trackStudyHourContainer */}
                </div>{/* trackStudyHourForm */}

                {/* track acheivements */}
                <div className="setHomeworkDscWrapper">
                    <div className="setHomeworkDscContainer">
                        <button className="btn" type="submit">Submit</button>
                    </div>{/* setHomeworkDscContainer */}
                </div > {/* setHomeworkDscWrapper */}
            </form>
        </>
    );
}