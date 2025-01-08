import React from "react";
import '../styles/Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <p>&copy; 2025 MyPortfolio. All Rights Reserved.</p>
      <div className="social-links">
        <a href="https://www.linkedin.com/in/rishabhsh12/" target="_blank" rel="noopener noreferrer" className="social-link linkedin">
          LinkedIn
        </a>
        <a href="https://github.com/Rishabh12Sharma" target="_blank" rel="noopener noreferrer" className="social-link github">
          GitHub
        </a>
      </div>
    </footer>
  );
}

export default Footer;
