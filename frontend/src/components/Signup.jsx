import axios from "axios";
import { useRef, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";

export default function Signup() {
    const username = useRef();
    const passwordConfirmation = useRef();
    const email = useRef();
    const password = useRef();
    const navigate = useNavigate();
    const [errorMessage, setErrorMessage] = useState(""); 

    const handleSubmit = async (e) => {
        e.preventDefault();
        const submittedElement = document.getElementById("submitted");

        if (password.current.value !== passwordConfirmation.current.value) {
            setErrorMessage("Passwords do not match. Please try again."); 
            return;
        }

        setErrorMessage("");
        submittedElement.innerHTML = "Account created successfully!<br>Please go to login page";
        submittedElement.style.color = "green";

        try {
            const user = {
                userName: username.current.value,
                email: email.current.value,
                password: password.current.value,
            };
            await axios.post("https://capstone-backend-ecru-tau.vercel.app/api/users/add/submit/", user);
            navigate("/home");
        } catch (err) {
            console.log(err);
        }
    };

    return (
        <>
            <div className="signPageContainer">
                <p className="signupLetter">Sign up</p>
                <div className="signupPageBox">
                    <p className="signupExplanation1">If you log in, you can track your progress.</p>
                    <p className="signupExplanation2">That will help you plan your study.</p>
                </div>
            </div>

            <p>Please go to Login page after you create an account.</p>
            <div className="userNameContainer">
                <form onSubmit={(e) => handleSubmit(e)}>
                    <label htmlFor="userName">User Name:</label>
                    <input name="userName" className="nameForm" type="text" required ref={username} />
                    <label htmlFor="email">Email:</label>
                    <input name="email" className="emailForm" type="email" required ref={email} />
                    <label htmlFor="">Password:</label>
                    <input
                        name="password"
                        className="password"
                        type="password"
                        required
                        minLength="6"
                        ref={password}
                    />
                    <label htmlFor="password">Confirm Password:</label>
                    <input
                        name="confirmPsw"
                        className="confirmPassword"
                        type="password"
                        required
                        minLength="6"
                        ref={passwordConfirmation}
                    />
                    {errorMessage && <p className="errorMessage">{errorMessage}</p>} 
                    <button className="createButton" type="submit">
                        Create an account
                    </button>
                    <p>
                        <NavLink to={`/`}>Login</NavLink>
                    </p>
                </form>
            </div>
            <p id="submitted"></p>
        </>
    );
}
