import {useEffect} from "react"
import "../components/Home.css"
import SetYourPlan from "../components/SetYourPlan"
export default function YourProgress() {
  useEffect(() => {
    document.title = "Your Progress | J-Goal"
  }, []);
  return(
    <main id="main">
      <SetYourPlan />
    </main>
    
  )
}