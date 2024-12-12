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
       <Header navigation/>
      <main id="main">
        <div className="inputContainer">
          <Signup />
        </div>
      </main>
    </>
  )
}