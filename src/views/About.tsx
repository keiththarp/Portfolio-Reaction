import React from "react";

export default function About() {
  return (
    <section className="view-section">
      <img className="about-photo" alt="Keith Tharp" src="./images/keith-tharp.jpg" />
      <div className="view-container">
        <p><b>Full-stack engineer</b> building on my marketing and entrepreneurial background to create enjoyable web experiences.</p>
        <p>Certificate in full stack development from the University of New Hampshire.</p>
        <p>As a developer I enjoy combining the creativity and problem solving from my past careers
          into real solutions for clients and internet users.</p>
        <ul>
          <li>Currently as an intern at KnownPoint Technologies I'm using React and Redux to help users complete their onboarding process.</li>
          <li>I'm also working with a passionate group on a personal side project Typescript in React Native aimed at helping folks in recovery.</li>
          <li>And I'm excited to be working with a mentor on a health tracking app in Angular geared toward helping folks solve health questions.</li>
        </ul>
        <p><a className="resume" href="https://bit.ly/KT-Resume">My resume.</a></p>
      </div>
      <div className="view-buffer"></div>
    </section>
  )

};