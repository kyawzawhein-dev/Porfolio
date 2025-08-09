import React from "react";
import Header from "./components/Header";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Footer from "./components/Footer";
import "./index.css";

export default function App() {
  return (
    <div>
      <Header />
      <Skills />
      <Experience />
      <Projects />
      <Footer />
    </div>
  );
}
