import React from "react";
import "./Skill.css";

import Upwork from "../../img/Upwork.png";
import Fiverr from "../../img/fiverr.png";
import Amazon from "../../img/amazon.png";
import Shopify from "../../img/Shopify.png";
import Facebook from "../../img/Facebook.png";

import { motion } from "framer-motion";
import { Link } from "react-scroll";

const Skill = () => {
  const transition = { duration: 2, type: "spring" };

  return (
    <div className="skill" id="Skills">
      {/* Bên trái */}
      <div className="infor">
        <span>Technical</span>
        <span>Skills</span>
        <span>
          Lorem ipsum dolor sit amet, consectetur adipiscing
          <br />
          lorem ipsum dolor sit amet,
          <br />
          Lorem ipsum dolor sit amet, consectetur adipiscing
          <br />
          lorem ipsum dolor sit amet,
        </span>
        <Link spy={true} to="Contact" smooth={true}>
          <button className="button in-button">Liên hệ</button>
        </Link>
      </div>
      {/* Bên phải */}
      <div className="sk-right">
        <motion.div
          initial={{ rotate: 60 }}
          whileInView={{ rotate: 0 }}
          viewport={{ margin: "-40px" }}
          transition={{ duration: 3.5, type: "spring" }}
          className="sk-mainCircle"
        >
          <div className="sk-secCircle">
            <img src={Upwork} alt="" />
          </div>
          <div className="sk-secCircle">
            <img src={Fiverr} alt="" />
          </div>
          <div className="sk-secCircle">
            <img src={Amazon} alt="" />
          </div>
          <div className="sk-secCircle">
            <img src={Shopify} alt="" />
          </div>
          <div className="sk-secCircle">
            <img src={Facebook} alt="" />
          </div>
        </motion.div>
        {/* bg Circle */}
        <div className="sk-backCircle blueCircle"></div>
        <div className="sk-backCircle yellowCircle"></div>
      </div>
    </div>
  );
};

export default Skill;
