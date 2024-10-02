
// Login Button.
export default function LoginBtn() {
  async function handleForm(e) {
    //e.preventDefault(); // prevent actual page refresh on submission
    //console.log(e.target.from.value);
    let LoginForm = {
      login: e.target.login.value,
    };
    await fetch(`https://8888/api/login`);
  }
  return (
    <>
      <div className="loginContainer">
        <form onSubmit={handleForm}>
          <button className="btn" type="submit">Log in</button>
        </form>
      </div>
    </>
  )
}

