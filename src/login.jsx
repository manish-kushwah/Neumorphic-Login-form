import React from "react";
import "./style/login.scss";
import user from "./assets/user.svg";
import password from "./assets/password.svg";
import logo from "./assets/logo.png";

const LoginForm = () => {
  return (
    <div class="login-div">
      <div class="logo">
        <img src={logo} id="img-logo" alt="app-logo" />
      </div>
      <div class="title">Idiots Loop</div>
      <div class="sub-title">MARK-ONE</div>
      <div class="details">
        <div class="username">
          <img src={user} alt="user-svg" />
          <input type="username" class="user-input" placeholder="Username" />
        </div>
        <div class="password">
          <img src={password} alt="pass-svg" />
          <input type="password" class="pass-input" placeholder="Password" />
        </div>
      </div>
      <input type="submit" class="signin-btn" value="Login" />
      <div class="signup-fp-link">
        <a href="#section">Forgot password?</a> or{" "}
        <a href="#section">Sign up</a>
      </div>
    </div>
  );
};

export default LoginForm;
