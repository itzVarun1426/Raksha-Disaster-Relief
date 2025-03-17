import React, { useState } from "react";
import { Link } from "react-router-dom";
import rakshaLogo from "../assets/raksha-logo.png";
import "./RegisterPage.css";

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
    if (Object.values(formData).some(value => value.trim() === "")) {
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
    setFormData(prevState => ({ ...prevState, [e.target.name]: e.target.value }));
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
    <div className="register-page-container">
      <Link className="register-logo-image" to="/">
        <img src={rakshaLogo} alt="logo" />
      </Link>
      <form className="form">
        <p className="title">Register</p>
        <div className="flex">
          <label>
            <input required placeholder type="text" className="input" />
            <span>Firstname</span>
          </label>
          <label>
            <input required placeholder type="text" className="input" />
            <span>Lastname</span>
          </label>
        </div>
        <label>
          <input required placeholder type="email" className="input" />
          <span>Email</span>
        </label>
        <label>
          <input required placeholder type="password" className="input" />
          <span>Password</span>
        </label>
        <label>
          <input required placeholder type="password" className="input" />
          <span>Confirm password</span>
        </label>
        <button className="submit">Submit</button>
        <p className="signin">Already have an acount ? <Link to="/login">Signin</Link></p>
      </form>
    </div>
  );
};

export default RegisterPage;