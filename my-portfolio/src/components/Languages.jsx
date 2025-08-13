import React from "react";
import java from "../assets/java.jpg"; // Replace with your images
import Csharp from "../assets/C sharp.jpg";
import english from "../assets/english.png";
import react from "../assets/react.jpg";

export default function Projects() {
  const projects = [
    { img: java, name: "Java" },
    { img: Csharp, name: "C#" },
    { img: english, name: "English" },
    { img: react, name: "React" },
  ];

  return (
    <section className="projects-section">
      <h2>Languages</h2>
      <div className="projects-grid">
        {projects.map((proj, index) => (
          <div key={index} className="project-card">
            <img src={proj.img} alt={proj.name} className="project-img" />
            <p>{proj.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
