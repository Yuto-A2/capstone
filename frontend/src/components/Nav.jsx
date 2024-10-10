import {NavLink} from "react-router-dom"
export default function Nav() {
  return(
    <nav id="main-navigation">
      <ul>
        <li className="nav1"><NavLink to="/YourProgress/66f30a99182e279b2fc7737b">Your Progress</NavLink></li>
        <li className="nav2"><NavLink to="/SetYourPlan">Set Your Plan</NavLink></li>
        <li className="nav2"><NavLink to="/TrackMyProgress">Track My Progress</NavLink></li>
        <li className="nav2"><NavLink to="/Achievement/66f30a99182e279b2fc7737b">Acheivement</NavLink></li>
      </ul>
    </nav>
  )
}