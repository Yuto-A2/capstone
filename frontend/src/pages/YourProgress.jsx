import {useEffect} from "react"
import "../components/Home.css"
import YourProgress from "../components/YourProgress"
export default function YourProgress() {
  useEffect(() => {
    document.title = "Your Progress | J-Goal"
  }, []);
  return(
    <main id="main">
      <h2 className="header2">Your Progress</h2>
      <YourProgress />
    </main>
    
  )
}