import profile from "../assets/profile.jpg";
import "../css/header.css";
import { FaUser, FaBirthdayCake, FaPhone, FaEnvelope } from "react-icons/fa";

export default function Header(){
  return (
    <section id="about" className="header">
      <br></br>
    <header className="header">
      <img
        src={profile}
        alt="Profile"
        className="profile-img"
      />
      <div className="info-card">
        <div className="info-item">
          <FaUser className="info-icon" />
          <span>Kyaw Zaw Hein / Bo Bo / Jason</span>
        </div>
        <br></br>
        <div className="info-item">
          <FaBirthdayCake className="info-icon" />
          <span>22</span>
        </div>
        <br></br>
        <div className="info-item">
          <FaPhone className="info-icon" />
          <span>+66996321434 (TH)</span>
        </div>
        <br></br>
        <div className="info-item">
          <FaEnvelope className="info-icon" />
          <span>zawk9340@gmail.com</span>
        </div>
      </div>
    </header>
    </section>
  )
}