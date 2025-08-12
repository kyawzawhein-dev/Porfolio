import React, { useState, useEffect } from "react";
import img1 from "../assets/profile.jpg"; // replace with your images
import img2 from "../assets/project.jpg";
import img3 from "../assets/skill.png";

export default function Experience() {
  const slides = [img1, img2, img3];
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-slide every 3 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === slides.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000);
    return () => clearInterval(timer);
  }, [slides.length]);

  // Navigation handlers
  const goPrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? slides.length - 1 : prevIndex - 1
    );
  };

  const goNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === slides.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <section className="experience-section">
      <h2>Experience</h2>
      <p>
        I studied Java in ACE inspiration over 1 year. 3 month as a beginner,
        6 months as JWD (Java Web Development) and 6 months as OJT (On Job Training).
        Then I worked with C# in ACE Data Systems (Banking) over a year.
      </p>

      <div className="carousel">
        <button className="nav-btn" onClick={goPrev}>←</button>
        <div className="carousel-img-wrapper">
          <img
            src={slides[currentIndex]}
            alt="Experience"
            className="carousel-img"
          />
        </div>
        <button className="nav-btn" onClick={goNext}>→</button>
      </div>
    </section>
  );
}
