import React from "react";
import "./LoginPage.css";

function LoginPage() {
  return (
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
          Don't have an account? <a href="#">Sign up</a>
        </span>
      </form>
    </div>
  );
}

export default LoginPage;
