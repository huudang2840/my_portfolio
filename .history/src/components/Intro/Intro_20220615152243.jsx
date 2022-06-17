import React from "react";
import "./Intro.css";
import FloatingDiv from "../FloatingDiv/FloatingDiv";

import Github from "../../img/github.png";
import Facebook from "../../img/fb.png";
import LinkedIn from "../../img/linkedin.png";

import Background1 from "../../img/background1.png";
import Background2 from "../../img/background2.png";
// import boy from "../../img/boy.png";
import avatar from "../../img/avt-2-rm-bg.png";
import icon1 from "../../img/icon1.png";
import icon2 from "../../img/icon2.png";
import icon3 from "../../img/icon3.png";

import Typical from "react-typical";

import { motion } from "framer-motion";

const Intro = () => {
  const transition = { duration: 2, type: "spring" };
  return (
    <div className="intro">
      <div className="i-left">
        <div className="i-name">
          <span>Hi, I am</span>
          <Typical
            steps={["Nguyen Huu Dang", 1000, "Website Developer", 1000]}
            loop={Infinity}
            wrapper="span"
          />
          <span style={{ maxWidth: "80%" }}>
            As a technology lover. Love to experience and learn new things. Always looking for
            challenges to improve myself as well as to exchange, meet and make friends with
            everyone.
          </span>
        </div>
        <a href="/" download>
          <button className="button i-button">Download CV</button>
        </a>
        <div className="i-icons">
          <a href="">
            <img src={Github} alt="" />
          </a>
          <a href="">
            <img src={Facebook} alt="" />
          </a>
          <a href="">
            <img src={LinkedIn} alt="" />
          </a>
        </div>
      </div>
      <div className="i-right">
        <img src={Background1} alt="" />
        <img src={Background2} alt="" />
        <img src={avatar} alt="" />
        <motion.img
          style={{ maxWidth: "14rem" }}
          initial={{ top: "-40%", left: "-20%" }}
          whileInView={{ top: "-30%", left: "-5%" }}
          transition={transition}
          src={icon1}
          alt=""
        />

        <motion.div
          initial={{ left: "100%", top: "-20%" }}
          whileInView={{ left: "70%" }}
          transition={transition}
          style={{ zIndex: "10", top: "-18%", left: "65%" }}
        >
          <FloatingDiv image={icon2} txt1="Web Developer" />
        </motion.div>

        <motion.div
          initial={{ left: "30%", top: "50%" }}
          whileInView={{ left: "2%" }}
          transition={transition}
          style={{ zIndex: "10", top: "70%", left: "0rem" }}
        >
          <FloatingDiv image={icon3} txt1="Friendly" />
        </motion.div>
        <div className="blur" style={{ background: "rgb(238 218 255)" }}></div>
        <div
          className="blur"
          style={{ background: "#C1F5FF", top: "17rem", left: "-9rem", height: "25rem" }}
        ></div>
      </div>
    </div>
  );
};

export default Intro;
