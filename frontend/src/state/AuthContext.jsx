
import { createContext, useReducer } from "react"
import AuthReducer from "./AuthReducer";

const initialState = {
    // user : null,
    user: {
        _id: "670acedc28a8aa1f3fb29229",
        userName: "Daniel",
        email: "daniel@gmail.com",
        password: "123456",
        profilePicture: "/person/1.jpeg",
        coverPicture: "",
        followers: [],
        followings: [],
        isAdmin: false
    },
    isFetching: false,
    error: false,
}

export const AuthContext = createContext(initialState);

export const AuthContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(AuthReducer, initialState);
    return (
        <AuthContext.Provider value={{
            user: state.user,
            isFetching: state.isFetching,
            error: state.error,
            dispatch,
        }}>
            {children}
        </AuthContext.Provider>
    )
}