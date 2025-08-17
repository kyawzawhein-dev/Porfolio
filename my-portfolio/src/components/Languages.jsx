import React from "react";
import java from "../assets/java.jpg"; 
import Csharp from "../assets/C sharp.jpg";
import english from "../assets/english.png";
import react from "../assets/react.jpg";

export default function Languages() {
  const languages = [
    { img: java, name: "Java" },
    { img: Csharp, name: "C#" },
    { img: english, name: "English" },
    { img: react, name: "React" },
  ];

  return (
     <section id="languages" className="languages-section">
      <h2 className="section-title">Languages</h2>
      <div className="item-grid">
        {languages.map((lang, index) => (
          <div key={index} className="item-card">
            <img src={lang.img} alt={lang.name} className="circle-img" />
            <p>{lang.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
