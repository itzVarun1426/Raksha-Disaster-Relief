import React, { useState } from "react";
import { Link } from "react-router-dom";
import rakshaLogo from "../assets/raksha-logo.png";
import styles from "./RegisterPage.module.css";

const RegisterPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    aadhaarNumber: "",
    mobileNumber: "",
    password: "",
    birthDate: "",
    gender: "Male",
  });

  const [error, setError] = useState("");

  const validateForm = () => {
    if (Object.values(formData).some((value) => value.trim() === "")) {
      return "All fields are required.";
    }
    if (!/^\d{12}$/.test(formData.aadhaarNumber)) {
      return "Aadhaar number must be exactly 12 digits.";
    }
    if (!/^\d{10}$/.test(formData.mobileNumber)) {
      return "Mobile number must be exactly 10 digits.";
    }
    if (formData.password.length < 6) {
      return "Password must be at least 6 characters long.";
    }
    return null;
  };

  const handleChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationError = validateForm();
    if (validationError) {
      setError(validationError);
      return;
    }
    console.log("Registered Data:", formData);
    setError("");
  };

  return (
    <div className={styles.registerPageContainer}>
      <Link className={styles.registerLogoImage} to="/">
        <img src={rakshaLogo} alt="logo" />
      </Link>
      <form className={styles.formContainer} onSubmit={handleSubmit}>
        <p className={styles.registerTitle}>Register</p>
        <div className={styles.inputGroup}>
          <label className={styles.inputLabel}>
            <input
              required
              placeholder=" "
              type="text"
              className={styles.inputField}
              name="firstName"
              onChange={handleChange}
            />
            <span>Firstname</span>
          </label>
          <label className={styles.inputLabel}>
            <input
              required
              placeholder=" "
              type="text"
              className={styles.inputField}
              name="lastName"
              onChange={handleChange}
            />
            <span>Lastname</span>
          </label>
        </div>
        <label className={styles.inputLabel}>
          <input
            required
            placeholder=" "
            type="email"
            className={styles.inputField}
            name="email"
            onChange={handleChange}
          />
          <span>Email</span>
        </label>
        <label className={styles.inputLabel}>
          <input
            required
            placeholder=" "
            type="password"
            className={styles.inputField}
            name="password"
            onChange={handleChange}
          />
          <span>Password</span>
        </label>
        <label className={styles.inputLabel}>
          <input
            required
            placeholder=" "
            type="password"
            className={styles.inputField}
            name="confirmPassword"
            onChange={handleChange}
          />
          <span>Confirm Password</span>
        </label>
        <button className={styles.submitButton} type="submit">
          Submit
        </button>
        <p className={styles.signInText}>
          Already have an account? <Link to="/login">Sign in</Link>
        </p>
      </form>
    </div>
  );
};

export default RegisterPage;
