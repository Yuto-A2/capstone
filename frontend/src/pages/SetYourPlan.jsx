import {useEffect} from "react"
import Header from "../components/Header"
import "../components/Home.css"
import SetYourPlan from "../components/SetYourPlan"
export default function YourProgress() {
  useEffect(() => {
    document.title = "Your Progress | J-Goal"
  }, []);
  return(
    <>
    <Header navigation/>
    <main id="main">
      <SetYourPlan />
    </main>
    </>
  )
}