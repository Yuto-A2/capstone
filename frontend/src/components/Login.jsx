export default function Login() {
    return (
        <>
            <h2 className="subTitle">Login</h2>
            <div className="userNameContainer">
                <div className="userName-box">
                    <p className="userName">User name</p>
                    <form>
                        <label htmlFor="">Name:</label>
                        <input name="userName" className="nameForm" type="text" />
                    </form>
                </div>{/* userName-box */}
            </div>{/* userNameContainer */}
            <div className="passwordContainer">
                <div className="password-box">
                    <p className="psw">Password</p>
                    <form>
                        <label htmlFor="">password:</label>
                        <input name="password" className="paswForm" type="text" />
                    </form>
                </div>{/* password-box */}
            </div>{/* passwordContainer */}
        </>
    )
}