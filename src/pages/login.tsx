import "../assets/styles/login.css"
import pointer from "../assets/images/place.png"

export function Login () {

    return (
    <div className="container">
        <img src={pointer} alt="pointer" className="pointer"></img>
        <div className="containerBox">
            <div className="loginBox">
            <h2 id="login">LOGIN</h2>
            <div className="inputBox">
                <label>EMAIL</label>
                    <input type="text" id="emailInput" className="inputField" required/>
                <label>PASSWORD</label>
                    <input type="password" id="passwordInput" className="inputField" required/>
            </div>
            <div className="buttonGroup">
                <button id="loginbtn" className="btn">LOGIN</button>
            </div>
            </div>
            <div className="divider">
            <h2 id="info">Get more insight</h2>
                <div className="infoBox">
                        <p className="info-text">By being logged in you will be able to get more 
                        relevant news based on your preferences, region and your own custom filters.
                        It's totally free to make an account and use our services. 
                        <br/><br/>Join us today!
                        </p>
                    </div>
                <div className="buttonGroup">
                    <button id="signbtn" className="btn">SIGNUP</button>
                </div>
            </div>
        </div>
    </div>
    )
}

export default Login;