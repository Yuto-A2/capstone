import { useEffect } from "react"
import "../components/Complete.css"
import Complete from "../components/Complete"
// homepage get components
export default function TrackYourProgress() {
  useEffect(() => {
    document.title = "Track Your Progress | J-Goal"
  }, []);
  return (
    <main id="main">
      <div>
        <Complete />
      </div>
    </main>
  )
}