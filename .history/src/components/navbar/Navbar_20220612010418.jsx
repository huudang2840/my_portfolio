import React from "react";
import "./Navbar.css";
import Toggle from "../Toggle/Toggle";
import { Link } from "react-scroll";

const Navbar = () => {
  return (
    <div className="n-wrapper">
      <div className="n-left">
        <div className="n-name">Dang Nguyen</div>
        <Toggle />
      </div>
      <div className="n-right">
        <div className="n-list">
          <ul style={{ listStyle: "none" }}>
            <Link spy={true} to="Navbar" smooth={true} activeClass="activeClass">
              <li>Home</li>
            </Link>
            <Link spy={true} to="Introduce" smooth={true}>
              <li>Introduce</li>
            </Link>
            <Link spy={true} to="Skills" smooth={true}>
              <li>Skills</li>
            </Link>
            <Link spy={true} to="Project" smooth={true}>
              <li>Project</li>
            </Link>
          </ul>
        </div>
        <Link spy={true} to="Project" smooth={true}>
          <button className="button n-button">Contact</button>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
