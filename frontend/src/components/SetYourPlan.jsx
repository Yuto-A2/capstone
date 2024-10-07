import { useState, useEffect } from "react";
import "../components/SetYourPlan.css"
export default function SetYourPlan() {
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
        <div className="setGoalWrapper">
          <div className="setGoal">
            <p className="explanation">What’s your goal in this week?</p>
            <p className="explanation">(You can add up to five items)</p>
          </div>{/* setGoal */}
          <div className="setGoalContainer">
            <input name="setGoalForm" className="setGoalForm" type="text" placeholder="(ex) textp.10 - 15" />
          </div>{/* setGoalContainer */}
        </div>{/* setGoalWrapper */}

        {/* categories */}
        <div className="setCategoriesWrapper">
          <div className="setCategory">
            <p className="explanation">Category</p>
          </div>{/* setCategory */}
          <div className="setCategoryContainer">
            <input name="setCategoryForm" className="setCategoryForm" type="text" placeholder="(ex) Grammar" />
          </div>{/* setGoalContainer */}
        </div>{/* setGoalWrapper */}

        {/* setting goals of hour */}
        <div className="setTimeWrapper">
          <div className="setTime">
            <p className="explanation">How many hours do you want to learn in this week?</p>
          </div>{/* setTime */}
          <div className="setTimeContainer">
            <input name="setTimeForm" className="setTimeForm" type="text" placeholder="(ex) 20" />
          </div>{/* setTimeContainer */}
        </div>{/* setTimeWrapper */}

        {/* setting goals of homework title */}
        <div className="setHomeworkTitleWrapper">
          <div className="setHomeworkTitle">
            <p className="explanation">What is your homework?</p>
            <p className="explanation">(title) </p>
          </div>{/* setHomeworkTitle */}
          <div className="setHomeworkTitleContainer">
            <input name="setHomeworkTitleForm" className="setHomeworkTitleForm" type="text" placeholder="(ex) text.100 - 101" />
          </div>{/* setHomeworkTitleContainer */}
        </div>{/* setHomeworkTitleWrapper */}

        {/* setting goals of hour */}
        <div className="setHomeworkDscWrapper">
          <div className="setHomeworkDsc">
            <p className="explanation">What is your homework?</p>
            <p className="explanation">(description) </p>
          </div>{/* setHomeworkDsc */}
          <div className="setHomeworkDscContainer">
            <input name="HomeworkDsc" className="HomeworkDscForm" type="text" placeholder="(ex) Grammar practice." />
            <button className="btn" type="submit">Submit</button>
          </div>{/* setHomeworkDscContainer */}
        </div > {/* setHomeworkDscWrapper */}
      </form>
    </>
  );
}