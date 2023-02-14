import React, { useEffect } from "react";
import "./Skill.css";
import AOS from "aos";
import "aos/dist/aos.css";

import html from "../../img/html.png";
import css from "../../img/css.png";
import js from "../../img/js.png";
import react from "../../img/react.png";
import nodejs from "../../img/nodejs.png";

// import java from "../../img/java.png";
import sql from "../../img/sql.png";
import mongo from "../../img/mongoDB.png";

import firebase from "../../img/firebase.png";
// import figma from "../../img/figma.png";

import { motion } from "framer-motion";
import { Link } from "react-scroll";
import { themeContext } from "../../Context";
import { useContext } from "react";

const Skill = () => {
  useEffect(() => {
    AOS.init({ duration: 1500 });
  }, []);
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div className="skill" id="Skills">
      {/* Bên trái */}
      <div className="infor infor-skill">
        <span style={{ color: darkMode ? "white" : "" }}>Technical</span>
        <span>Skills</span>
        <span>
          <br />
          <b style={{ color: darkMode ? "white" : "black" }}>Development: </b>
          <br />
          HTML, CSS, JavaScript, ReactJS, NodeJS, Java
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

      <div className="sk-center">
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
      </div>

      <div className="sk-right">
        {/* <Fade bottom cascade duration={1500} appear={false}> */}
        <img src={sql} alt="" data-aos="fade-up" />
        <img src={mongo} alt="" data-aos="fade-up" />
        <img src={firebase} alt="" data-aos="fade-up" />
        {/* </Fade> */}
      </div>
    </div>
  );
};

export default Skill;
