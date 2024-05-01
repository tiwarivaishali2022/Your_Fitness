
import React, { useState } from "react";
// import "./CSS/style.css";
// import "./CSS/utils.css";


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
          <div className="logo font-bold flex items-center">
            <a href="/" className="link-underline-light"  onClick={handleLinkClick('/fitness')}>Your Fitness Gym</a>
          </div>
          <ul className="navbar flex items-center">
            <li>
              <a href="/" className="link-underline-light">Home</a>
            </li>
            <li>
              <a href="/about" className="link-underline-light">About</a>
            </li>
            <li>
              <a href="/services" className="link-underline-light">Services</a>
            </li>
            <li>
              <a href="/contact" className="link-underline-light">Contact Us</a>
            </li>
            <li>
              <button className="btn btn-danger" onClick={() => {}}>
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
