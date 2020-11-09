import React from "react";

export default function About() {
  return (
    <section className="view-section">
      <img className="about-photo" alt="Keith Tharp" src="./images/keith-tharp.jpg" />
      <div className="view-container">
        <p>I'm a <b>Full-stack web developer</b> building on my marketing and entrepreneurial background to
        create enjoyable web experiences. As a developer I enjoy combining the creativity and problem solving that I bring from my past careers into
        real solutions for clients and internet users.
        I've worked in several great groups within all aspects of app development and recently completed a media app
        that helps users log and save their media consumption.
        Using API queries from multiple sources we save and display a user's selection in a cleanly designed single
        page app.</p>
      </div>
      <div className="view-buffer"></div>
    </section>
  )

};