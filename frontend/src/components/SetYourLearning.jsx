export default function SetYourLearing() {
    return (
        <>
            <h2 className="subTitle">Set your learning</h2>
            <div className="userNameContainer">
                <div className="userName-box">
                    <p className="userName">What's your goal in this week?</p>
                    <p className="userName">(You can add up to five items)</p>
                    <form>
                        <label htmlFor=""></label>
                        <input name="userName" className="nameForm" type="text" />
                    </form>
                </div>{/* userName-box */}
            </div>{/* userNameContainer */}
            <div className="userNameContainer">
                <div className="userName-box">
                    <p className="userName">Category</p>
                    <form>
                        <label htmlFor=""></label>
                        <input name="userName" className="nameForm" type="text" />
                    </form>
                </div>{/* userName-box */}
            </div>{/* userNameContainer */}
            <div className="userNameContainer">
                <div className="userName-box">
                    <p className="userName">How many hours do you want to learn in this week?</p>
                    <form>
                        <label htmlFor=""></label>
                        <input name="userName" className="nameForm" type="text" />
                    </form>
                </div>{/* userName-box */}
            </div>{/* userNameContainer */}
            <div className="userNameContainer">
                <div className="userName-box">
                    <p className="userName">What is your homework?</p>
                    <p className="userName">(title)</p>
                    <form>
                        <label htmlFor=""></label>
                        <input name="userName" className="nameForm" type="text" />
                    </form>
                </div>{/* userName-box */}
            </div>{/* userNameContainer */}
            <div className="userNameContainer">
                <div className="userName-box">
                    <p className="userName">About your homework</p>
                    <p className="userName">(description)</p>
                    <form>
                        <label htmlFor=""></label>
                        <input name="userName" className="nameForm" type="text" />
                    </form>
                </div>{/* userName-box */}
            </div>{/* userNameContainer */}
        </>
    )
}