// import { useContext, useRef } from "react";
// import { loginCall } from "../AcitonCalls";
// import { AuthContext } from "../state/AuthContext";
// // User name input.
// export default function Login() {
//   const email = useRef();
//   const password = useRef();
//   const { user, isFetching, error, dispatch } = useContext(AuthContext);
//   const handleSubmit = (e) => {
//     e.preventDefault();
//     loginCall({
//       email: email.current.value,
//       password: password.current.value,
//     },
//       dispatch
//     )
//   }
//   console.log(user)
//   return (
//     <>
//       <div className="Login">
//         <form onSubmit={(e) => handleSubmit(e)}>
//           <label htmlFor="">Email:</label>
//           <input name="email" className="nameForm" type="email" required ref={email} />
//           <label htmlFor="">Password:</label>
//           <input name="password" className="password" type="password" required minLength="6" ref={password} />
//           <button className="loginButton" type="submit">Log in</button>
//           <button className="signupButton" type="submit">Sign up</button>
//         </form>
//       </div>
//     </>
//   )
// }

