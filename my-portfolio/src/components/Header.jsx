import profile from "../assets/profile.jpg";
import "../css/header.css";

export default function Header(){
  return (
    <header className="header">
      {/* <div className="tagline">
        <h4>Software Programmer</h4>
        <p>Hard to find</p>
        <p>Easy to lose</p>
        <p>Impossible to forget</p>
      </div> */}
      <img
        src={profile}
        alt="Profile"
        className="profile-img"
      />
      <h2>Kyaw Zaw Hein / Bo Bo / Jason</h2>
      <h2>22</h2>
      <h2>+66996321434 (TH)</h2>
      <h2>zawk9340@gmail.com</h2>
    </header>
  )
}