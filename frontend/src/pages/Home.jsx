import { useContext, useRef, useEffect } from "react"
import { loginCall } from "../AcitonCalls";
import { AuthContext } from "../state/AuthContext";
import "../components/Home.css"
import "../components/Login.css"
import "../components/Signup.css"
import Header from "../components/Header"
import { NavLink } from "react-router-dom";

export default function Home() {
  const email = useRef();
  const password = useRef();
  const { user, isFetching, error, dispatch } = useContext(AuthContext);
  const handleSubmit = (e) => {
    e.preventDefault();
    loginCall({
      email: email.current.value,
      password: password.current.value,
    },
      dispatch
    )
  }
  console.log(user)
  return (
    <>
      <Header navigation />
      <div class="explanation">
        <div class="jGoalBox">
          <p class="explaneJGoal">What is J-Goal?</p>
        </div>{/* /div class="jGoalBox" */}
        <div class="explanationBox">
          <p class="explaneJGoal1">
            J-Goal is a learning plan app.
          </p>
          <p class="explaneJGoal2">
            Log in or sign up to track your progress.
          </p>
        </div>{/* /div class="explanationBox" */}
      </div>{/* /div class="explanation" */}
      <div className="Login">
        <form onSubmit={(e) => handleSubmit(e)}>
          <label htmlFor="">Email:</label>
          <input name="email" className="nameForm" type="email" required ref={email} />
          <label htmlFor="">Password:</label>
          <input name="password" className="password" type="password" required minLength="6" ref={password} />
          <button className="loginButton" type="submit" disabled={isFetching}>Log in
          </button>
        </form>
        {error && <p className="errorMessage">Invalid email or password. Please try again.</p>}
      </div>
      <p> <NavLink to={`/SignUp`}>Here is sign up!</NavLink> </p>
    </>
  )
}


