
// User name input.
export default function Signup() {
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
                    <label htmlFor="">Email:</label>
                    <input name="email" className="emailForm" type="email" />
                    <label htmlFor="">Password:</label>
                    <input name="password" className="password" type="password" />
                    <label htmlFor="">Confirm Password:</label>
                    <input name="confirmPsw" className="confirmPassword" type="password" />
                    <button className="createButton" type="submit">Create an account</button>
                </form>
            </div>
        </>
    )
}

