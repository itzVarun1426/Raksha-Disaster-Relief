import React from "react";
import { Link } from "react-router-dom";
import styles from "./LoginPage.module.css";
import rakshaLogo from "../assets/raksha-logo.png";

function LoginPage() {
  return (
    <div className={styles.elementsContainer}>
      <Link className={styles.loginLogoImage} to="/">
        <img src={rakshaLogo} alt="logo" />
      </Link>
      <div className={styles.formContainer}>
        <form className={styles.form}>
          <div className={styles.loginHeading}>Login</div>
          <span className={styles.inputSpan}>
            <input type="email" name="email" id="email" placeholder=" " />
            <label htmlFor="email" className={styles.label}>
              Email
            </label>
          </span>
          <span className={styles.inputSpan}>
            <input
              type="password"
              name="password"
              id="password"
              placeholder=" "
            />
            <label htmlFor="password" className={styles.label}>
              Password
            </label>
          </span>
          <span className={styles.forgotPassword}>
            <a href="#">Forgot password?</a>
          </span>
          <input className={styles.submit} type="submit" value="Log in" />
          <span className={styles.signupLink}>
            Don't have an account? <Link to="/register">Sign up</Link>
          </span>
        </form>
      </div>
    </div>
  );
}

export default LoginPage;
