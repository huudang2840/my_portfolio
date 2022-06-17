import React from "react";
import "./Skill.css";

import html from "../../img/html.png";
import css from "../../img/css.png";
import js from "../../img/js.png";
import react from "../../img/react.png";
import nodejs from "../../img/nodejs.png";

import java from "../../img/java.png";
import sql from "../../img/sql.png";
import mongo from "../../img/mongoDB.png";

import { motion } from "framer-motion";
import { Link } from "react-scroll";

const Skill = () => {
  const transition = { duration: 3, type: "spring" };

  return (
    <div className="skill" id="Skills">
      {/* Bên trái */}
      <div className="infor">
        <span>Technical</span>
        <span>Skills</span>
        <span>
          <br />
          <b style={{ color: "black" }}>Development: </b>
          <br />
          HTML, CSS, JavaScript, Nodejs, Reactjs, Java
          <br />
          <br />
          <b style={{ color: "black" }}>Database: </b>
          <br />
          MongoDB, SQL
          <br />
        </span>
        <Link spy={true} to="Contact" smooth={true}>
          <button className="button in-button">Contact</button>
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
            <img src={css} alt="" />
          </div>
          <div className="sk-secCircle">
            <img src={html} alt="" />
          </div>
          <div className="sk-secCircle">
            <img src={js} alt="" />
          </div>
          <div className="sk-secCircle">
            <img src={react} alt="" />
          </div>
          <div className="sk-secCircle">
            <img src={nodejs} alt="" />
          </div>
        </motion.div>
        {/* bg Circle */}
        <div className="sk-backCircle blueCircle"></div>
        <div className="sk-backCircle redCircle"></div>
        <motion.img
          initial={{ top: "-10%", left: "40%" }}
          whileInView={{ top: "0%", left: "0%" }}
          transition={transition}
          src={java}
          alt=""
        />
        <motion.img
          initial={{ top: "0%", left: "30%" }}
          whileInView={{ top: "40%", left: "5%" }}
          transition={transition}
          src={sql}
          alt=""
        />
        <motion.img
          initial={{ top: "-40%", left: "-20%" }}
          whileInView={{ top: "5%", left: "70%" }}
          transition={transition}
          src={mongo}
          alt=""
        />
      </div>
    </div>
  );
};

export default Skill;
