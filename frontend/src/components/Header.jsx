import Nav from "./Nav"
export default function Header() {
  return (
    <header id="header">
      <div className="titleBox">
        <h1 id="site-name">
          <a href="#"><img id="logo" src="/img/logo.png" alt="logo"/></a>
          <a href="/">J-Goal</a>
        </h1>
      </div> {/* titleBox */}
      <Nav />
    </header>
  );
}