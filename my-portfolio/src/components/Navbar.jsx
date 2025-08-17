import { Link } from "react-scroll";
import "../css/Navbar.css";

export default function Navbar() {
  return (
    <nav className="navbar">
      <ul className="nav-links">
        <li>
          <Link to="about" smooth={true} duration={500} offset={-70}>
            About
          </Link>
        </li>
        <li>
          <Link to="experience" smooth={true} duration={500} offset={-70}>
            Experience
          </Link>
        </li>
        <li>
          <Link to="languages" smooth={true} duration={500} offset={-70}>
            Languages
          </Link>
        </li>
        <li>
          <Link to="projects" smooth={true} duration={500} offset={-70}>
            Projects
          </Link>
        </li>
      </ul>
    </nav>
  );
}
