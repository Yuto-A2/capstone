import {useEffect} from "react"
import "../components/Home.css"
import UserNameInput from "../components/UserNameInput"
import PasswordInput from "../components/PasswordInput"
import LoginBtn from "../components/LoginBtn"
import SignupBtn from "../components/SignupBtn"
import EmailInput from "../components/EmailInput"
import ConfirmPsw from "../components/ConfirmPsw"
// homepage get components
export default function Signup() {
  useEffect(() => {
    document.title = "SignUp | Yuto-A"
  }, []);
  return(
    <main id="main">
      <UserNameInput />
      <EmailInput />
      <PasswordInput />
      <ConfirmPsw />
      <LoginBtn />
      <SignupBtn />
    </main>
  )
}