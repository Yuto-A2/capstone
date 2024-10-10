import { useEffect } from "react"
import "../components/Home.css"
import "../components/Login.css"
import "../components/Signup.css"
import Login from "../components/Login"
import Header from "../components/Header"

// homepage get components
export default function Home() {
  useEffect(() => {
    document.title = "Home | J-Goal"
  }, []);
  return (
    <>
    <Header />
    <main id="main">
      <h2 className="header2">Login</h2>
      <p>Let's track your learning♪</p>
      <div>
        <Login />
      </div>
    </main>
    </>
  )
}