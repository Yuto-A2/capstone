import { useEffect } from "react"
import "../components/Home.css"
import Signup from "../components/Signup"
import Header from "../components/Header"
// homepage get components
export default function SignUp() {
  useEffect(() => {
    document.title = "SignUp | J-Goal"
  }, []);
  return (
    <>
      <Header />
      <main id="main">
        <h2 className="header2">Sign Up</h2>
        <div className="inputContainer">
          <Signup />
        </div>
      </main>
    </>
  )
}