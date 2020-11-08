import React from "react";

export default function Contact() {
  return (
    <section className="about-section">
      <div className="about-container">
        <h2 className="">CONTACT DETAILS</h2>
        <hr className="my-hr" />
        <img className="contact-photo" alt="Keith Tharp" src="./images/keith-tharp.jpg" />
        <ul className="contact-list">
          <li><span><img className="contact-icon" src="./images/phone.png" alt="phone icon" />6O3.49O.O8IO - Call || Text</span></li>
          <li><span><img className="contact-icon" src="./images/mail.png" alt="email icon" />KeithSTharp@gmail.com</span></li>
          <li><a href="https://github.com/keiththarp"><img className="contact-icon" src="./images/github-icon.png" alt="github icon" />View my repos on Github</a></li>
          <li><a href="https://www.linkedin.com/in/keithstharp/"><img className="contact-icon" src="./images/linkedIn.png" alt="linkedIn icon" />My LinkedIn profile</a></li>
        </ul>

      </div>

    </section>
  )

};
