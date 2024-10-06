import { useEffect } from "react"
import "../components/Home.css"
import "./Home.css"
import UserNameInput from "../components/UserNameInput"
import PasswordInput from "../components/PasswordInput"
import LoginBtn from "../components/LoginBtn"
import SignupBtn from "../components/SignupBtn"
// homepage get components
export default function Home() {
  useEffect(() => {
    document.title = "Home | J-Goal"
  }, []);
  return (
    <main id="main">
      <h2 className="header2">Login</h2>
      <p>Let's track your learning♪</p>
      <div className="inputContainer">
        <UserNameInput />
        <PasswordInput />
        <LoginBtn className="btn" />
        <SignupBtn className="btn" />
      </div>
    </main>
  )
}