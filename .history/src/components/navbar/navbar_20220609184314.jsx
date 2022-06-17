import React from "react";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="n-wrapper">
      <div className="n-left">
        <div className="n-name">Dang Nguyen</div>
        <span>toggle</span>
      </div>
      <div className="n-right">
        <div className="n-list">
          <ul>
            <li>Home</li>
            <li>Introduce</li>
            <li>Skills</li>
            <li>Experience</li>
            <li>Dự án</li>
          </ul>
        </div>
        <button className="button">Liên hệ</button>
      </div>
    </div>
  );
};

export default Navbar;
