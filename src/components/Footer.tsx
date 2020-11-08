import React from "react";

const currentYear = new Date().getFullYear();

export default function Footer() {
  return (
    <section className="footer-section">
      <div className="">
        &copy; Keith Tharp {currentYear}
      </div>
      <div className="">
        KeithTharp.com
        </div>
      <div className="">
        KeithSTharp@Gmail.com
        </div>
    </section>
  )

};