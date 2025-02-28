import React from "react";
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
              <a href="/" className="nav-link">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="nav-link">
                Guide
              </a>
            </li>
            <li>
              <a href="/about" className="nav-link">
                About
              </a>
            </li>
            <li>
              <a href="#" className="nav-link">
                Helpline
              </a>
            </li>
            <li>
              <a href="/login" className="nav-link">
                Login
              </a>
            </li>
            <li>
              <a href="#">
                <img src={languageIcon} alt="" />
              </a>
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
