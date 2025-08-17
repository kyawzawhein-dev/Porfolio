import React from "react";
import pms from "../assets/project.jpg"; 
import banking from "../assets/bank.png";
import portfolio from "../assets/profile.jpg";
import todo from "../assets/todo.png";

export default function Projects() {
  const projects = [
    { img: pms, name: "PMS" },
    { img: banking, name: "Banking Projects" },
    { img: portfolio, name: "Portfolio" },
    { img: todo, name: "Todo" },
  ];

  return (
    <section id="projects" className="projects-section">
      <h2 className="section-title">Projects</h2>
      <div className="item-grid">
        {projects.map((proj, index) => (
          <div key={index} className="item-card">
            <img src={proj.img} alt={proj.name} className="circle-img" />
            <p>{proj.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
