
// User name input.
export default function emailInput() {
  async function handleForm(e) {
    //e.preventDefault(); // prevent actual page refresh on submission
    //console.log(e.target.from.value);
    let emailForm = {
      email: e.target.email.value,
    };
    await fetch(`https://8888/api/login`);
  }
  return (
    <>
      <div className="emailContainer">
        <form onSubmit={handleForm}>
          <label htmlFor="">Email:</label>
          <input name="email" className="emailForm" type="email" />
        </form>
      </div>
    </>
  )
}

