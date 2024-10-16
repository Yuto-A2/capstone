import Nav from "./Nav"

export default function Header({ navigation }) {
  const LoginSignUp = () => {
    return (
      <header></header>
    )
  }

  const OtherPages = () => {
    return (
      <header id="header">
        <div className="titleBox">
          <h1 id="site-name">
            <a href="/">J-Goal</a>
          </h1>
        </div> {/* titleBox */}
        <div className="loginUser">
          <span className="userName">Log out</span>
          <img src={userInfo.profilePic ? userInfo.profilePic : "/img/noAvatar.png"} alt="" className="loginImg" />
        </div>
        <Nav />
      </header>
    );
  }
  return (
    <>
      {navigation ? <OtherPages /> : <LoginSignUp />}
    </>
  )
}