
import React, { useState } from "react";
// import "./CSS/style.css";
import "./CSS/utils.css";


export default function Header() {
  const [buttonText, setButtonText] = useState('Join Now');

  const handleLinkClick = (link) => (event) => {
    event.preventDefault();

    if (link === '/fitness') {
      window.location.href = 'https://www.google.com/search?q=Your+Fitness+Gym';
    } else {
      console.error("Somthing went wrong")
    }
  };

  return (
    <div className="container mx-auto">
      <header className="header">
        <nav className="flex justify-between">
          <div className="logo font-bold flex items-center text-blue">
            <a href="/" onClick={handleLinkClick('/fitness')}>Your Fitness Gym</a>
          </div>
          <ul className="navbar flex items-center ">
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/about">About</a>
            </li>
            <li>
              <a href="/services">Services</a>
            </li>
            <li>
              <a href="/contact">Contact Us</a>
            </li>
            <li>
              <button className="btn" onClick={() => {}}>
                {buttonText}
              </button>
            </li>
          </ul>
        </nav>
        <hr />
      </header>
    </div>
  );
}
