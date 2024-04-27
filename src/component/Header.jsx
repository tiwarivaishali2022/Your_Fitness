import React from 'react'
import './CSS/style.css';
import './CSS/utils.css';

export default function Header() {
  return (
    <div class="container mx-auto">
        <header className="header">
            <nav className="flex justify-between">
                <div className="logo font-bold flex items-center text-blue">Your Fitness Gym</div>
                <ul className="navbar flex items-center">
                    <li>Home</li>
                    <li>About</li>
                    <li>Services</li>
                    <li>Contact Us</li>
                    <li><button className="btn">Join Now</button></li>
                </ul>
            </nav>
            <hr />
        </header>
    </div>
  )
}
