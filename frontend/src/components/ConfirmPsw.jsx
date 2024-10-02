
// password input.
export default function confirmPsw() {
  async function handleForm(e) {
    //e.preventDefault(); // prevent actual page refresh on submission
    //console.log(e.target.from.value);
    let passwordForm = {
      confirmPsw: e.target.confirmPsw.value,
    };
    await fetch(`https://8888/api/login`);
  }
  return (
    <>
      <div className="passwordContainer">
        <form onSubmit={handleForm}>
          <label htmlFor="">Confirm Password:</label>
          <input name="confirmPsw" className="confirmPassword" type="password" />
        </form>
      </div>
    </>
  )
}

