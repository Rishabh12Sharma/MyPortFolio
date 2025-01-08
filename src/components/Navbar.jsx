import React from "react";
import '../styles/Navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-logo">MyPortfolio</div>
      <ul className="navbar-links">
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#skills">Skills</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
      <a href="https://drive.google.com/file/d/1BW7zsOSWwPHyfQu-RfC4q27qzOSmeVIM/view?usp=sharing" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="resume-btn"
          >
            Resume
          </a>
    </nav>
  );
}

export default Navbar;