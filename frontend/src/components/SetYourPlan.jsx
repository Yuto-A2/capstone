import { useContext, useRef } from "react";
import "../components/SetYourPlan.css"
import axios from "axios";
import { useParams } from "react-router-dom";
import { AuthContext } from "../state/AuthContext";

export default function SetYourPlan() {
  // const { id } = useParams();
  // const [userInfo, setUserInfo] = useState(null); 
  // const [error, setError] = useState(null);

  // useEffect(() => {
  //   const getloginInfo = async () => {
  //     try {
  //       let response = await fetch(`http://localhost:8888/YourProgress/${id}`);
  //       if (!response.ok) {
  //         throw new Error("Network response was not ok");
  //       }
  //       let data = await response.json();
  //       setUserInfo(data);
  //     } catch (error) {
  //       setError(error.message);
  //       console.error("Fetch error:", error);
  //     }
  //   }
  //   getloginInfo();
  // }, [id]);

  const category = useRef();
  const studyHour = useRef();
  const homeworkTitle = useRef();
  const homeworkDsc = useRef();
  const { user } = useContext(AuthContext);

  const handleSubmit = async (e) => {
    e.preventDefault();

    
    const newGoal = {
      userId: user._id,
      category: [category.current.value],
      homework: [{
        homeworkTitle: homeworkTitle.current.value,
        homeworkDsc: homeworkDsc.current.value,
    }],
    userName: user.userName,
    email: user.email,
    password: user.password,
    planOfWeeklyStudyHour: parseFloat(studyHour.current.value),
    };
    try {
      
      await axios.post(`http://localhost:8888/api/users/add/submit/${user._id}`, newGoal, {
        headers: {
          "Content-Type": "application/json",  
        },
      });
      console.log("Goal updated successfully");
    } catch (err) {
      console.log("Error while updating goal:", err);  
    }
  };


  // show user's goal and achievement
  return (
    <>
      <form onSubmit={(e) => handleSubmit(e)}>
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
            <input name="setCategoryForm" className="setCategoryForm" type="text" placeholder="(ex) Grammar" ref={category} />
          </div>{/* setGoalContainer */}
        </div>{/* setGoalWrapper */}

        {/* setting goals of hour */}
        <div className="setTimeWrapper">
          <div className="setTime">
            <p className="explanation">How many hours do you want to learn in this week?</p>
          </div>{/* setTime */}
          <div className="setTimeContainer">
            <input name="setTimeForm" className="setTimeForm" type="text" placeholder="(ex) 20" ref={studyHour} />
          </div>{/* setTimeContainer */}
        </div>{/* setTimeWrapper */}

        {/* setting goals of homework title */}
        <div className="setHomeworkTitleWrapper">
          <div className="setHomeworkTitle">
            <p className="explanation">What is your homework?</p>
            <p className="explanation">(title) </p>
          </div>{/* setHomeworkTitle */}
          <div className="setHomeworkTitleContainer">
            <input name="setHomeworkTitleForm" className="setHomeworkTitleForm" type="text" placeholder="(ex) text.100 - 101" ref={homeworkTitle} />
          </div>{/* setHomeworkTitleContainer */}
        </div>{/* setHomeworkTitleWrapper */}

        {/* setting goals of hour */}
        <div className="setHomeworkDscWrapper">
          <div className="setHomeworkDsc">
            <p className="explanation">What is your homework?</p>
            <p className="explanation">(description) </p>
          </div>{/* setHomeworkDsc */}
          <div className="setHomeworkDscContainer">
            <input name="HomeworkDsc" className="HomeworkDscForm" type="text" placeholder="(ex) Grammar practice." ref={homeworkDsc} />
            <button className="btn" type="submit">Submit</button>
          </div>{/* setHomeworkDscContainer */}
        </div > {/* setHomeworkDscWrapper */}
      </form>
    </>
  );
}