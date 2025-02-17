import "../assets/styles/login.css"

export function Login () {

    return (
    <div className="container">
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
                <button id="loginBtn" className="btn">LOGIN</button>
            </div>
            </div>
            <div className="divider">

            </div>
        </div>
    </div>
    )
}

export default Login;