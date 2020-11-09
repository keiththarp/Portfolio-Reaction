import React from "react";
import ProjectCard from "../components/Project-Card"
import Projects from "../assets/data/projects"

export default function Portfolio() {
  return (
    <section className="view-section">
      <div className="view-header">
        <h2>Portfolio</h2>
      </div>
      <div className="portfolio-container">
        {Projects.map(function (project, index) {
          return <ProjectCard key={index} project={project} />;
        })}
      </div>
      <div className="view-buffer"></div>
    </section>
  )

};