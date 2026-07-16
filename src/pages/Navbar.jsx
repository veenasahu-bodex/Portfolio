import React from "react";
import "./navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">
        <span></span> Veena Sahu <span></span>
      </div>

      <ul className="nav-links">
        <li><a href="#home">Home</a></li>
        <li><a href="#skills">Skills</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#education">Education</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <button className="resume-btn"><a href="/Resume.pdf" download target="_blank" rel="noopener noreferrer">Resume</a></button>
    </nav>
  );
}

export default Navbar;