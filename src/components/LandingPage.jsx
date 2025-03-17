import React from "react";
import "./LandingPage.css";
import Navbar from "./Navbar.jsx";
import Section1 from "./Section1.jsx";
import Section2 from "./Section2.jsx";
import Section3 from "./Section3.jsx";
import ContactForm from "./ContactForm.jsx";
import Footer from "./Footer.jsx";
import LandingPageAlert from "./LandingPage-Alert.jsx";

const LandingPage = () => {
  return (
    <>
      <Navbar />
      <LandingPageAlert />
      <Section1 />
      <Section2 />
      <Section3 />
      <ContactForm />
      <Footer />
    </>
  );
};

export default LandingPage;
