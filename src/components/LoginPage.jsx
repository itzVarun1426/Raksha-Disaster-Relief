import React from "react";
import "./LoginPage.css";
import { Link } from "react-router-dom";
import rakshaLogo from "../assets/raksha-logo.png";

function LoginPage() {
  return (
    <>
      <div className="Elements-container">
        <Link className="login-logo-image" to="/">
          <img src={rakshaLogo} alt="logo" />
        </Link>
        <div className="form-container">
          <form className="form">
            <span className="input-span">
              <label htmlFor="email" className="label">
                Email
              </label>
              <input type="email" name="email" id="email" />
            </span>
            <span className="input-span">
              <label htmlFor="password" className="label">
                Password
              </label>
              <input type="password" name="password" id="password" />
            </span>
            <span className="span">
              <a href="#">Forgot password?</a>
            </span>
            <input className="submit" type="submit" defaultValue="Log in" />
            <span className="span">
              Don't have an account? <Link to= "/register">Sign up</Link>
            </span>
          </form>
        </div>
      </div>
    </>
  );
}

export default LoginPage;
