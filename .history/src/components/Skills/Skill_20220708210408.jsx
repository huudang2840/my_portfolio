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

import firebase from "../../img/firebase.png";
import figma from "../../img/figma.png";

import { motion } from "framer-motion";
import { Link } from "react-scroll";
import { themeContext } from "../../Context";
import { useContext } from "react";

const Skill = () => {
  const transition = { duration: 3, type: "spring" };
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div className="skill" id="Skills">
      {/* Bên trái */}
      <div className="infor">
        <span style={{ color: darkMode ? "white" : "" }}>Technical</span>
        <span>Skills</span>
        <span>
          <br />
          <b style={{ color: darkMode ? "white" : "black" }}>Development: </b>
          <br />
          HTML, CSS, JavaScript, Nodejs, Reactjs, Java
          <br />
          <br />
          <b style={{ color: darkMode ? "white" : "black" }}>Database: </b>
          <br />
          MongoDB, SQL, Firebase
          <br />
          <br />
          <b style={{ color: darkMode ? "white" : "black" }}>UX/UI: </b>
          <br />
          Figma
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
          whileInView={{ top: "25%", left: "-18%" }}
          transition={transition}
          src={java}
          alt=""
        />

        <motion.img
          initial={{ top: "-10%", left: "50%" }}
          whileInView={{ top: "-5%", left: "10%" }}
          transition={transition}
          src={mongo}
          alt=""
        />
        <motion.img
          initial={{ top: "-10%", left: "40%" }}
          whileInView={{ top: "5%", left: "-5%" }}
          transition={transition}
          src={firebase}
          alt=""
        />
        <motion.img
          initial={{ top: "0%", left: "30%" }}
          whileInView={{ top: "50%", left: "0%" }}
          transition={transition}
          style={{ scale: "0.7" }}
          src={sql}
          alt=""
        />
        <motion.img
          initial={{ top: "0%", left: "30%" }}
          whileInView={{ top: "70%", left: "-2%" }}
          style={{ scale: "0.6" }}
          transition={transition}
          src={figma}
          alt=""
        />
      </div>
    </div>
  );
};

export default Skill;
