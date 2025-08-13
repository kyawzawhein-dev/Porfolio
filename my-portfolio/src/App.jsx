import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer"
import Experience from "./components/Experience";
import Languages from "./components/Languages"
import Projects from "./components/Projects";
import "./index.css";

export default function App() {
  return (
<>
<Header />
<Experience />
<br></br>
<Languages />
<Projects />
<Footer />
</>
  );
}
