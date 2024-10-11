
// User name input.
export default function Login() {
    async function handleForm(e) {
      //e.preventDefault(); // prevent actual page refresh on submission
      //console.log(e.target.from.value);
      let userNameForm = {
        userName: e.target.userName.value,
      };
      await fetch(`https://8888/api/login`);
    }
    return (
      <>
        <div className="Login">
          <form onSubmit={handleForm}>
            <label htmlFor="">User Name:</label>
            <input name="userName" className="nameForm" type="text" required />
            <label htmlFor="">Password:</label>
            <input name="password" className="password" type="password" required minLength="6" />
            <button className="loginButton" type="submit">Log in</button>
            <button className="signupButton" type="submit">Sign up</button>
          </form>
        </div>
      </>
    )
  }
  
  