import React from "react";
import profileImg from "../assets/profile.jpg"; // replace with your image

export default function Header() {
  return (
    <header className="header">
      <img src={profileImg} alt="Profile" className="profile-img" />
      <div className="header-info">
        <p><strong>Name:</strong> Kyaw Zaw Hein / Bo Bo / Jason</p>
        <p><strong>Age:</strong> 22</p>
        <p><strong>Ph No:</strong> 09963073590 (TH)</p>
        <p><strong>Email:</strong> zawk9340@gmail.com</p>
        <p><strong>Address:</strong> House No 334/85 Moo 4, San Phak Wan Subdistrict, Hang Dong district, Chiang Mai Province, Thailand</p>
      </div>
    </header>
  );
}
