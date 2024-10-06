import {useEffect} from "react"
import "../components/Home.css"
import UserNameInput from "../components/UserNameInput"
import PasswordInput from "../components/PasswordInput"
import LoginBtn from "../components/LoginBtn"
import EmailInput from "../components/EmailInput"
import ConfirmPsw from "../components/ConfirmPsw"
import CreateAccount from "../components/CreateAccount"
// homepage get components
export default function Signup() {
  useEffect(() => {
    document.title = "SignUp | J-Goal"
  }, []);
  return(
    <main id="main">
      <div className="inputContainer">
      <UserNameInput />
      <EmailInput />
      <PasswordInput />
      <ConfirmPsw />
      <LoginBtn />
      <CreateAccount />
      </div>
    </main>
  )
}