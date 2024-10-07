import { useState, useEffect } from "react";
export default function Complete() {
    const [userInfo, SetYourPlan] = useState([]);
    // this rought get user's information from the database
    useEffect(() => {
        const getloginInfo = async () => {
            let response = await fetch("http://localhost:8888//:id");
            let data = await response.json();
            console.log(data);
            SetYourPlan(data);
        }
        getloginInfo();
    }, []);
    // show user's goal and achievement
    return (
        <>
            <form action="">
                {/* setting goals */}
                <div className="trackGoalWrapper">
                    <div className="trackGoal">
                        <p className="explanation">When did you study?</p>
                    </div>{/* trackGoal */}
                    <div className="trackGoalContainer">
                        <input name="trackGoalForm" className="trackGoalForm" type="date" />
                    </div>{/* trackGoalContainer */}
                </div>{/* trackGoalWrapper */}

                {/* categories */}
                <div className="trackStudiesWrapper">
                    <div className="trackStudy">
                        <p className="explanation">What did you do?</p>
                        <p className="explanation">(You can add up to five items)</p>
                    </div>{/* trackStudy */}
                    <div className="trackStudyContainer">
                        <input name="trackStudyForm" className="trackStudyForm" type="text" placeholder="(ex) textp.10 - 15" />
                    </div>{/* trackStudyContainer */}
                </div>{/* trackStudiesWrapper */}

                {/* track category */}
                <div className="categoryWrapper">
                    <div className="trackCategory">
                        <p className="explanation">category</p>
                    </div>{/* trackCategory */}
                    <div className="setCategoryContainer">
                        <input name="setCategoryForm" className="setCategoryForm" type="text" placeholder="(ex) grammar" />
                    </div>{/* setTimeContainer */}
                </div>{/* setTimeWrapper */}

                {/* track study hours */}
                <div className="trackStudyHourWrapper">
                    <div className="trackStudyHourTitle">
                        <p className="explanation">How many hours did you study?</p>
                    </div>{/* trackStudyHourTitle */}
                    <div className="trackStudyHourContainer">
                        <input name="trackStudyHourForm" className="trackStudyHourForm" type="text" placeholder="(ex) 20" />
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