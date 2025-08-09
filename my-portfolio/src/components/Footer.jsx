import React from "react";
import githubIcon from "../assets/github.jpeg";
import facebookIcon from "../assets/facebook.png";
import linkedinIcon from "../assets/linkedin.png";
import emailIcon from "../assets/gmail.png";

export default function Footer() {
  return (
    <footer className="footer">
      <a href="https://github.com/kyawzaw-dev">
        <img src={githubIcon} alt="GitHub" />
      </a>
      <a href="https://facebook.com/KyawZaw">
        <img src={facebookIcon} alt="Facebook" />
      </a>
      <a href="https://linkedin.com/in/KyawZaw">
        <img src={linkedinIcon} alt="LinkedIn" />
      </a>
      <a href="mailto:zawk9340@gmail.com">
        <img src={emailIcon} alt="Email" />
      </a>
    </footer>
  );
}
