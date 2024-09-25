import {NavLink} from "react-router-dom"
export default function Nav() {
  return(
    <nav id="main-navigation">
      <ul>
        <li className="nav1"><NavLink to="/">Your Progress</NavLink></li>
        <li className="nav2"><NavLink to="/about">Set Your Learning</NavLink></li>
        <li className="nav3"><NavLink to="#">Complete</NavLink></li>
        <li className="nav4"><NavLink to="#">Achievement</NavLink></li>
      </ul>
    </nav>
  )
}