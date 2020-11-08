import React from "react";
import { Link } from 'react-router-dom';

export default function Nav() {
  return (
    <nav>
      <div className="logo">
        <Link to='/'>
          <h1>Keith Tharp</h1>
        </Link>
      </div>
      <ul className="nav-bar">
        <Link to='/about'>
          <li>About</li>
        </Link>
        <Link to='/portfolio'>
          <li>Portfolio</li>
        </Link>
        <Link to='/contact'>
          <li>Contact</li>
        </Link>
      </ul>
    </nav>
  )

};