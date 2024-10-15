import { useContext, useRef, useEffect } from "react"
import { loginCall } from "../AcitonCalls";
import { AuthContext } from "../state/AuthContext";
import "../components/Home.css"
import "../components/Login.css"
import "../components/Signup.css"
import Header from "../components/Header"

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
    <Header />
      <div className="Login">
        <form onSubmit={(e) => handleSubmit(e)}>
          <label htmlFor="">Email:</label>
          <input name="email" className="nameForm" type="email" required ref={email} />
          <label htmlFor="">Password:</label>
          <input name="password" className="password" type="password" required minLength="6" ref={password} />
          <button className="loginButton" type="submit">Log in</button>
          <button className="signupButton" type="submit">Sign up</button>
        </form>
      </div>
    </>
  )
}


