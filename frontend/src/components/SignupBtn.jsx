
// SignUp Button.
export default function SignupBtn() {
  async function handleForm(e) {
    //e.preventDefault(); // prevent actual page refresh on submission
    //console.log(e.target.from.value);
    let SignUpForm = {
      signup: e.target.signup.value,
    };
    await fetch(`https://8888/api/login`);
  }
  return (
    <>
      <div className="signupContainer">
        <form onSubmit={handleForm}>
          <button className="btn" type="submit">Sign up</button>
        </form>
      </div>
    </>
  )
}

