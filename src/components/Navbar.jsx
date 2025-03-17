import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import chatbotIcon from "../assets/chatbot.png";
import rakshaLogo from "../assets/raksha-logo.png";
import languageIcon from "../assets/language.png";

function Navbar() {
  return (
    <>
      <div className="chatbot">
        <img src={chatbotIcon} alt="" height="55px" width="55px" />
      </div>
      <main>
        <nav>
          <div className="logo-image">
            <img src={rakshaLogo} alt="logo" />
          </div>
          <ul>
            <li>
              <Link to="/" className="nav-link">
                Home
              </Link>
            </li>
            <li>
              <Link to="#" className="nav-link">
                Guide
              </Link>
            </li>
            <li>
              <Link to="/about" className="nav-link">
                About
              </Link>
            </li>
            <li>
              <Link to="#" className="nav-link">
                Helpline
              </Link>
            </li>
            <li>
              <Link to="/login" className="nav-link">
                Login
              </Link>
            </li>
            <li>
              <Link to="#">
                <img src={languageIcon} alt="" />
              </Link>
            </li>
          </ul>
        </nav>
        <div className="sroll-text">
          <marquee behavior="scroll" direction="">
            *The disaster management platform focuses on providing efficient
            solutions for planning, responding to, and recovering from various
            natural and man-made disasters. The system integrates real-time data
            monitoring, resource allocation, and communication tools to enhance
            decision-making and response coordination during emergencies.
          </marquee>
        </div>
      </main>
    </>
  );
}

export default Navbar;
