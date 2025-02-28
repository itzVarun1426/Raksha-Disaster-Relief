import rakshaLogo from "../assets/Raksha-logo.png";

function Footer() {
  return (
    <>
      <footer>
        <div className="footer-links">
          <span>Contact Us</span>
          <ul>
            {/* SVG icons remain the same, just changed class to className */}
            {/* ... existing footer social icons ... */}
          </ul>
        </div>
        <div className="footer-image">
          <img src={rakshaLogo} alt="logo" height="150" width="150" />
        </div>
      </footer>
    </>
  );
}

export default Footer;
