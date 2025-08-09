import React from "react";
import projectIcon from "../assets/project.jpg"; // placeholder

export default function Projects() {
  const projects = [
    { img: projectIcon, name: "PMS" },
    { img: projectIcon, name: "Banking Projects" },
    { img: projectIcon, name: "Portfolio" },
    { img: projectIcon, name: "Todo" },
  ];

  return (
    <section className="projects">
      <h2>Projects</h2>
      <div className="project-list">
        {projects.map((proj, index) => (
          <div key={index} className="project-card">
            <img src={proj.img} alt={proj.name} />
            <p>{proj.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
