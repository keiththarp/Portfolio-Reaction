import React from "react";

export default function Contact() {
  return (
    <section className="view-section">
      <div className="view-header">
        <h2 className="">CONTACT</h2>
      </div>
      <div className="view-container">
        <img className="contact-photo" alt="Keith Tharp" src="./images/keith-tharp.jpg" />
        <ul className="contact-list">
          <li><span><img className="contact-icon" src="./images/phone.png" alt="phone icon" />6O3.49O.O8IO Call || Text</span></li>
          <li><span><img className="contact-icon" src="./images/mail.png" alt="email icon" />KeithSTharp@gmail.com</span></li>
          <li><a href="https://github.com/keiththarp"><img className="contact-icon" src="./images/github-icon.png" alt="github icon" />View my repos on Github</a></li>
          <li><a href="https://www.linkedin.com/in/keithstharp/"><img className="contact-icon" src="./images/linkedIn.png" alt="linkedIn icon" />My LinkedIn profile</a></li>
        </ul>
        <p><a href="https://bit.ly/KT-Resume">My resume.</a></p>

      </div>
      <div className="view-buffer"></div>
    </section>
  )

};
