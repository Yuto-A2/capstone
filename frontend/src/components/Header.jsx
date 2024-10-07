import Nav from "./Nav"
import { Users } from "../pages/dummyData";

export default function Header() {
  return (
    <header id="header">
      <div className="titleBox">
        <h1 id="site-name">
          <a href="/">J-Goal</a>
        </h1>
      </div> {/* titleBox */}
      <div className="loginUser">
        <span className="userName">Log out</span>
        <img src={Users[0].profilePicture} alt="" className="loginImg" />
      </div>
      <Nav />
    </header>
  );
}