import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import styles from "./Navbar.module.css";
import chatbotIcon from "../assets/chatbot.png";
import rakshaLogo from "../assets/raksha-logo.png";
import languageIcon from "../assets/language.png";
import Chatbot from "./Chatbot";

function Navbar() {
  const [isChatbotVisible, setIsChatbotVisible] = useState(false);

  const toggleChatbot = () => {
    setIsChatbotVisible(!isChatbotVisible);
  };

  return (
    <div className={styles.navContainer}>
      <div className={styles.chatbot} onClick={toggleChatbot}>
        <img src={chatbotIcon} alt="chatbot" height="55px" width="55px" />
      </div>
      <nav className={styles.nav}>
        <div className={styles.logoImage}>
          <img src={rakshaLogo} alt="logo" />
        </div>
        <ul>
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? styles.active : styles.navLink
              }
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/guide"
              className={({ isActive }) =>
                isActive ? styles.active : styles.navLink
              }
            >
              Guide
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/helpline"
              className={({ isActive }) =>
                isActive ? styles.active : styles.navLink
              }
            >
              Helpline
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/login"
              className={({ isActive }) =>
                isActive ? styles.active : styles.navLink
              }
            >
              Login
            </NavLink>
          </li>
          <li>
            <NavLink
              to="#"
              className={({ isActive }) =>
                isActive ? styles.active : styles.navLink
              }
            >
              <img src={languageIcon} alt="language" />
            </NavLink>
          </li>
        </ul>
      </nav>
      <div className={styles.scrollText}>
        <marquee behavior="scroll">
          *The disaster management platform focuses on providing efficient
          solutions for planning, responding to, and recovering from various
          natural and man-made disasters. The system integrates real-time data
          monitoring, resource allocation, and communication tools to enhance
          decision-making and response coordination during emergencies.
        </marquee>
      </div>
      {isChatbotVisible && (
        <div className={styles.chatbotPopup}>
          <Chatbot />
          <button onClick={toggleChatbot} className={styles.closeButton}>
            Close
          </button>
        </div>
      )}
    </div>
  );
}

export default Navbar;
