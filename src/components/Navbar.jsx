import React from "react";
import { Link } from "react-router-dom";
import styles from "./Navbar.module.css";
import chatbotIcon from "../assets/chatbot.png";
import rakshaLogo from "../assets/raksha-logo.png";
import languageIcon from "../assets/language.png";

function Navbar() {
  return (
    <div className={styles.navContainer}>
      <div className={styles.chatbot}>
        <img src={chatbotIcon} alt="" height="55px" width="55px" />
      </div>
      <nav className={styles.nav}>
        <div className={styles.logoImage}>
          <img src={rakshaLogo} alt="logo" />
        </div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/guide">Guide</Link>
          </li>
          <li>
            <Link to="/helpline">Helpline</Link>
          </li>
          <li>
            <Link to="/login">Login</Link>
          </li>
          <li>
            <Link to="#">
              <img src={languageIcon} alt="" />
            </Link>
          </li>
        </ul>
      </nav>
      <div className={styles.scrollText}>
        <marquee behavior="scroll" direction="">
          *The disaster management platform focuses on providing efficient
          solutions for planning, responding to, and recovering from various
          natural and man-made disasters. The system integrates real-time data
          monitoring, resource allocation, and communication tools to enhance
          decision-making and response coordination during emergencies.
        </marquee>
      </div>
    </div>
  );
}

export default Navbar;
