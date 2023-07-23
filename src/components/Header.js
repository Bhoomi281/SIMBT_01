import React from 'react';
import './Header.css'; // Import the CSS file for styling
import { Link } from 'react-router-dom';
const Header = () => {
  return (
    <header className="header">
      <div className="logo">
        <img src="https://upload.wikimedia.org/wikipedia/commons/d/dc/Portfolio.hu_full_logo.png?20200513123442 " alt="Logo" />
      </div>
      <nav className="nav">
        <ul>
        <li>
            <a href="/">Home</a>
          </li>
          <li>
          {/* <Link to="/about">About</Link> */}
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#projects">Projects</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
         
        </ul>
      </nav>
      <a href="https://drive.google.com/file/d/1O-Yk8Xlw66hB1dUbZf-ULoN6TtGo4oho/view?usp=share_link" target="_blank" rel="noopener noreferrer" className="resume-button">
        Resume
      </a>
    </header>
  );
};

export default Header;
