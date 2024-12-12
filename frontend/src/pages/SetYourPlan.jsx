import {useEffect} from "react"
import Header from "../components/Header"
import Nav from "../components/Nav"
import "../components/Home.css"
import SetYourPlan from "../components/SetYourPlan"
export default function YourProgress() {
  useEffect(() => {
    document.title = "Your Progress | J-Goal"
  }, []);
  return(
    <>
    <Header navigation/>
    <Nav />
    <main id="main">
      <h2>Set Your Plan</h2>
      <p>What is your goal this week?</p>
      <p className="marginBottom">Let's set your goal/plan.</p>
      <SetYourPlan />
    </main>
    </>
  )
}