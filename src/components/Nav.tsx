import React from "react";

export default function Nav() {
  return (
    <nav>
      <div className="logo">
        <h1>Keith Tharp</h1>
      </div>
      <ul className="nav-bar">

        <li className="current">
          <a href="#home">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#portfolio">Portfolio</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>
    </nav>
  )

};