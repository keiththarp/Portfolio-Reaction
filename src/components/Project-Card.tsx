import React from "react";
import IProject from "../assets/interfaces/IProject";

interface IProps {
  project: IProject;
}

export default function ProjectCard(props: IProps) {
  return (

    <div className="project-card">
      <img src={props.project.imageURL} className="card-image" alt="" />
      <div className="project-card-body">
        <h3 className="card-title">{props.project.name}</h3>
        <p className="card-text">{props.project.description}</p>
        <div>
          <a href={props.project.deployed}><img className="portfolio-icon"
            src="./images/internet.png" alt="" />Deployed App</a>
        </div>
        <div>
          <a href={props.project.github}><img className="portfolio-icon"
            src="./images/github-icon.png" alt="" />GitHub Repo</a>
        </div>
      </div>
    </div>
  )

};