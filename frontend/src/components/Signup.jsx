import { useRef } from "react"

// User name input.
export default function Signup() {
    const email = useRef();
    const password = useRef();

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(email.current.value)
        console.log(password.current.value)
    }
    return (
        <>
            <div className="userNameContainer">
                <form onSubmit={(e) => handleSubmit(e)}>
                    <label htmlFor="userName">User Name:</label>
                    <input name="userName" className="nameForm" type="text" required />
                    <label htmlFor="email">Email:</label>
                    <input name="email" className="emailForm" type="email" required />
                    <label htmlFor="">Password:</label>
                    <input name="password" className="password" type="password" required minLength="6" />
                    <label htmlFor="password">Confirm Password:</label>
                    <input name="confirmPsw" className="confirmPassword" type="password" required minLength="6" />
                    <button className="createButton" type="submit">Create an account</button>
                </form>
            </div>
        </>
    )
}

