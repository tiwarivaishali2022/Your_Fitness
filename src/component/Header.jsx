import React from "react";
import "./CSS/style.css";
import "./CSS/utils.css";

export default function Header() {
  return (
    <div className="container mx-auto">
      <header className="header">
        <nav className="flex justify-between">
          <div className="logo font-bold flex items-center text-blue">
            Your Fitness Gym
          </div>
          <ul className="navbar flex items-center">
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
              <button className="btn">Join Now</button>
            </li>
          </ul>
        </nav>
        <hr />
      </header>
    </div>
  );
}
