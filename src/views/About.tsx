import React from "react";
import ResumeLink from '../components/ResumeLink'

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
          <li>Currently as an intern at KnownPoint Technologies I'm using <b>React</b> and <b>Redux</b> to help users complete their onboarding process.</li>
          <li>I'm also working with a passionate group on a personal side project in <b>Typescript</b> and <b>React Native</b> to help folks stay or get back on their path to recovery.</li>
          <li>And I'm excited to be working with a mentor on a health tracking app in <b>Angular</b> helping folks find correlations to solve their health mysteries.</li>
        </ul>
        <ResumeLink />
      </div>
      <div className="view-buffer"></div>
    </section>
  )

};