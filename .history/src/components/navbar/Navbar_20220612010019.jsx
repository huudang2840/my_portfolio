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
            <Link spy={true} to={Navbar} smooth={true} activeClass="activeClass">
              <li>Home</li>
            </Link>
            <Link spy={true} to={Navbar} smooth={true}></Link>

            <Link spy={true} to={Navbar} smooth={true}></Link>

            <Link spy={true} to={Navbar} smooth={true}></Link>

            <Link spy={true} to={Navbar} smooth={true}></Link>

            <li>Introduce</li>
            <li>Skills</li>
            <li>Experiences</li>
            <li>Project</li>
          </ul>
        </div>
        <button className="button n-button">Contact</button>
      </div>
    </div>
  );
};

export default Navbar;
