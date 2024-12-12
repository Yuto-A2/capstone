import { useEffect } from "react"
import "../components/Home.css"
import YourProgress from "../components/YourProgress"
export default function YourProgress() {
  useEffect(() => {
    document.title = "Your Progress | J-Goal"
  }, []);
  return (
    <>
      <main id="main">
        <YourProgress />
      </main>
    </>
  )
}