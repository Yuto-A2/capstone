import { useContext } from "react";
import { NavLink } from "react-router-dom"
import { AuthContext } from "../state/AuthContext";
export default function Nav() {
 const { user } = useContext(AuthContext);
  return (
    <nav id="main-navigation">
      <ul>
        <li className="nav1"><NavLink to={`/YourProgress/${user._id}`}>Your Progress</NavLink></li>
        <li className="nav2"><NavLink to={`/SetYourPlan/${user._id}`}>Set Your Plan</NavLink></li>
        <li className="nav2"><NavLink to={`/TrackMyProgress/${user._id}`}>Track My Progress</NavLink></li>
        <li className="nav2"><NavLink to={`/Achievement/${user._id}`}>Acheivement</NavLink></li>
      </ul>
    </nav>
  )
}