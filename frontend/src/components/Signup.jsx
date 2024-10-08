
// User name input.
export default function Signup() {
    async function handleForm(e) {
        //e.preventDefault(); // prevent actual page refresh on submission
        //console.log(e.target.from.value);
        let setUsers = {
            userName: e.target.userName.value,
            email: e.target.email.value,
            password: e.target.password.value,
            confirmPsw: e.target.confirmPsw.value
        };
        await fetch(`https://localhost:8888/api/users/add/submit`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(setUsers) 
        });
    }
    return (
        <>
            <div className="userNameContainer">
                <form onSubmit={handleForm}>
                    <label htmlFor="userName">User Name:</label>
                    <input name="userName" className="nameForm" type="text" />
                    <label htmlFor="email">Email:</label>
                    <input name="email" className="emailForm" type="email" />
                    <label htmlFor="">Password:</label>
                    <input name="password" className="password" type="password" />
                    <label htmlFor="password">Confirm Password:</label>
                    <input name="confirmPsw" className="confirmPassword" type="password" />
                    <button className="createButton" type="submit">Create an account</button>
                </form>
            </div>
        </>
    )
}

