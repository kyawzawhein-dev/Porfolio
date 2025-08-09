import React from "react";
import icon from "../assets/skill.png"; // placeholder

export default function Skills() {
  const skills = [
    { img: icon, text: "1 year +" },
    { img: icon, text: "1 year +" },
    { img: icon, text: "Upper intermediate" },
    { img: icon, text: "Currently Studying" },
    { img: icon, text: "Currently Studying" },
    { img: icon, text: "Currently Studying" },
    { img: icon, text: "Currently Studying" },
  ];

  return (
    <section className="skills">
      {skills.map((skill, index) => (
        <div key={index} className="skill-card">
          <img src={skill.img} alt="" />
          <p>{skill.text}</p>
        </div>
      ))}
    </section>
  );
}
