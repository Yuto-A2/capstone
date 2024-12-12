import { useEffect } from "react"
import "../components/Complete.css"
import Header from "../components/Header"
import Complete from "../components/Complete"
import Nav from "../components/Nav"
// homepage get components
export default function TrackYourProgress() {
  useEffect(() => {
    document.title = "Track Your Progress | J-Goal"
  }, []);
  return (
    <>
    <Header navigation/>
    <Nav />
    <main id="main">
     <h2>Track Your Progress</h2>
     <p className="marginBottom">Let's record what you did today.</p>
      <div>
        <Complete />
      </div>
    </main>
    </>
  )
}