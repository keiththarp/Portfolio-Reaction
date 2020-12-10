import React from "react";

export default function About() {
  return (
    <section className="view-section">
      <img className="about-photo" alt="Keith Tharp" src="./images/keith-tharp.jpg" />
      <div className="view-container">
        <p><b>Full-stack engineer</b> building on my marketing and entrepreneurial background to create enjoyable web experiences. Recently earned a certificate in full stack development from the University of New Hampshire, increasing my HTML and CSS knowledge while adding JavaScript, React.js, and database systems. As a developer I enjoy combining the creativity and problem solving that I bring from my past careers into real solutions for clients and internet users. I've worked in several great groups within all aspects of app development one of which recently completed development of Ascent Sobriety, an app for folks in recovery, a purpose close to my heart. The app's driving concept is non-linear sobriety tracking with the intent of encouraging those in recovery to stay on their journey, through and beyond struggles and hiccups.</p>
        <p><a href="https://bit.ly/KT-Resume">My resume.</a></p>
      </div>
      <div className="view-buffer"></div>
    </section>
  )

};