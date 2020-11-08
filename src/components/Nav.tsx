import React from "react";
import { Link } from 'react-router-dom';

export default function Nav() {
  return (
    <nav>
      <div className="logo">
        <Link to='/Portfolio-Reaction/'>
          <h1>Keith Tharp</h1>
        </Link>
      </div>
      <ul className="nav-bar">
        <Link to='/Portfolio-Reaction/about'>
          <li>About</li>
        </Link>
        <Link to='/Portfolio-Reaction/portfolio'>
          <li>Portfolio</li>
        </Link>
        <Link to='/Portfolio-Reaction/contact'>
          <li>Contact</li>
        </Link>
      </ul>
    </nav>
  )

};