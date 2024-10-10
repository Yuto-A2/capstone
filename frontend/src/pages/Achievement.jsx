import Achievement from "../components/Achieve"
import Header from "../components/Header"
import "../components/Acheive.css"
import { useEffect } from "react"
export default function Acheivement() {
    useEffect(() => {
      document.title = "Home | J-Goal"
    }, []);
  return (
    <>
    <Header navigation />
    <div>
      <Achievement />
    </div>
    </>
  )
}

