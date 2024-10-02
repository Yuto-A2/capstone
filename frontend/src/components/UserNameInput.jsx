
// User name input.
export default function userName() {
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
      <div className="userNameContainer">
        <form onSubmit={handleForm}>
          <label htmlFor="">User Name:</label>
          <input name="userName" className="nameForm" type="text" />
        </form>
      </div>
    </>
  )
}

