import {NavLink} from "react-router-dom"
export default function Nav() {
  return(
    <nav id="main-navigation">
      <ul>
        <li className="nav1"><NavLink to="YourProgress">Your Progress</NavLink></li>
        <li className="nav2"><NavLink to="SetYourPlan">Set Your Plan</NavLink></li>
        <li className="nav2"><NavLink to="#">Track My Progress</NavLink></li>
        <li className="nav2"><NavLink to="#">Achievement</NavLink></li>
      </ul>
    </nav>
  )
}