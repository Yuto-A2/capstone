import Achievement from "../components/Acheive"
import "../components/Acheive.css"
import { useEffect } from "react"
export default function Acheivement() {
    useEffect(() => {
      document.title = "Home | J-Goal"
    }, []);
  return (
    <div>
      <Achievement />
    </div>
  )
}

