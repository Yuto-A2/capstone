export default function YourProgress() {
    return (
        <>
            <h2 className="subTitle">Your progress</h2>
            <div className="userNameContainer">
                <div className="userName-box">
                    <p className="userName">User name</p>
                    <p className="userName">You’ve spent   120 hours for learning Japanese.</p>
                </div>{/* userName-box */}
            </div>{/* userNameContainer */}
            <div className="passwordContainer">
                <div className="password-box">
                    <p className="psw">Required hours to acquire Japanese</p>
                    <p className="psw">2200 hours</p>
                    <p className="psw">You have studied  120 hours.</p>
                </div>{/* password-box */}
            </div>{/* passwordContainer */}
            <div className="passwordContainer">
                <div className="password-box">
                    <p className="psw">Required hours to pass JLPT N 5</p>
                    <p className="psw">350 hours</p>
                    <p className="psw">You have studied  13 hours.</p>
                </div>{/* password-box */}
            </div>{/* passwordContainer */}
            <div className="passwordContainer">
                <div className="password-box">
                    <p className="psw">Your goal of this week</p>
                    <p className="psw">30 hours.</p>
                    <p className="psw"></p>
                    <p className="psw">You have studied  20 hours.</p>
                </div>{/* password-box */}
            </div>{/* passwordContainer */}
            <div className="passwordContainer">
                <div className="password-box">
                    <p className="psw">Your Homework this week.</p>
                    <p className="psw"></p>
                    <p className="psw"></p>
                    <p className="psw"></p>
                </div>{/* password-box */}
            </div>{/* passwordContainer */}
        </>
    )
}