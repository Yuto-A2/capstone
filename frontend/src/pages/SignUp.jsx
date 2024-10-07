import {useEffect} from "react"
import "../components/Home.css"
import Signup from "../components/Signup"
// homepage get components
export default function SignUp() {
  useEffect(() => {
    document.title = "SignUp | J-Goal"
  }, []);
  return(
    <main id="main">
      <div className="inputContainer">
      <Signup />
      </div>
    </main>
  )
}