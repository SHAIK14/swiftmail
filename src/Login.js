import React from "react";
import "./css/login.css";
function Login() {
  const login = () => {};
  return (
    <div className="loginwrapper">
      <div className="logoimg">
        <img
          src="https://cdn.vox-cdn.com/thumbor/8fWz6qpiMYMsZhY4vrc9Vhl5yL8=/0x110:1320x770/fit-in/1200x600/cdn.vox-cdn.com/uploads/chorus_asset/file/21939811/newgmaillogo.jpg"
          alt="logo"
        />
      </div>
      <button className="gmail_login" onClick={login}>
        Login with Gmail
      </button>
    </div>
  );
}

export default Login;
