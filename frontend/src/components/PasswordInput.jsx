
// password input.
export default function password() {
  async function handleForm(e) {
    //e.preventDefault(); // prevent actual page refresh on submission
    //console.log(e.target.from.value);
    let passwordForm = {
      password: e.target.password.value,
    };
    await fetch(`https://8888/api/login`);
  }
  return (
    <>
      <div className="passwordContainer">
        <form onSubmit={handleForm}>
          <label htmlFor="">Password:</label>
          <input name="password" className="password" type="password" />
        </form>
      </div>
    </>
  )
}

