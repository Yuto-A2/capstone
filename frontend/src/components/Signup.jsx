import axios from "axios";
import { useRef } from "react"
import { NavLink, useNavigate } from "react-router-dom";

// User name input.
export default function Signup() {
    const username = useRef();
    const passwordConfirmation = useRef();
    const email = useRef();
    const password = useRef();
    const navigate = useNavigate();
    const handleSubmit = async (e) => {
        e.preventDefault();
        const submittedElement = document.getElementById("submitted");
        submittedElement.innerHTML = "Account created successfully!<br>Please go to login page";
        submittedElement.style.color = "green";
        if (password.current.value !== passwordConfirmation.current.value) {
            passwordConfirmation.current.setCustomValidity("Wrong password")
        } else {
            try {
                const user = {
                    userName: username.current.value,
                    email: email.current.value,
                    password: password.current.value,
                };
                // await axios.post("http://localhost:8888/api/users/add/submit/", user);
                await axios.post("https://capstone-backend-ecru-tau.vercel.app/api/users/add/submit/", user);
                navigate("/home")
            } catch (err) {
                console.log(err)
            }
        }
    };
    return (
        <>
        <div class="signPageContainer">
            <p class="signupLetter">Sign up</p>
            <div class="signupPageBox">
                <p class="signupExplanation1">If you log in, you can track your progress.</p>
                <p class="signupExplanation2">That will help you plan your study.</p>
            </div>{/* /div class="signupPageBox"  */}
        </div>{/* /div class="signupPageContainer" */}

            <p>Please go to Login page after you create an acoount.</p>
            <div className="userNameContainer">
                <form onSubmit={(e) => handleSubmit(e)}>
                    <label htmlFor="userName">User Name:</label>
                    <input name="userName" className="nameForm" type="text" required ref={username} />
                    <label htmlFor="email">Email:</label>
                    <input name="email" className="emailForm" type="email" required ref={email} />
                    <label htmlFor="">Password:</label>
                    <input name="password" className="password" type="password" required minLength="6" ref={password} />
                    <label htmlFor="password">Confirm Password:</label>
                    <input name="confirmPsw" className="confirmPassword" type="password" required minLength="6" ref={passwordConfirmation} />
                    <button className="createButton" type="submit">Create an account</button>
                    <p><NavLink to={`/`}>Login</NavLink></p>
                </form>
            </div>
            <p id="submitted"></p>
        </>
    )
}

