import React, { useState } from "react";
import { Link } from 'react-router-dom';

export default function Nav() {
  const [navActive, setNavActive] = useState(false);

  const burgerReveal = () => {
    setNavActive(!navActive);
  };

  return (
    <nav>
      <div className="logo">
        <Link to='/'>
          <h1>Keith Tharp</h1>
        </Link>
      </div>
      <ul className={`nav-bar ${navActive ? "mobile-menu-display" : null}`}>
        <Link to='/about'>
          <li onClick={burgerReveal}>About</li>
        </Link>
        <Link to='/portfolio'>
          <li onClick={burgerReveal}>Portfolio</li>
        </Link>
        <Link to='/contact'>
          <li onClick={burgerReveal}>Contact</li>
        </Link>
      </ul>
      <div className="mobile-menu" onClick={burgerReveal}>
        <div className="top-bun"></div>
        <div className="burger-patty"></div>
        <div className="bottom-bun"></div>
      </div>
    </nav>
  )

};