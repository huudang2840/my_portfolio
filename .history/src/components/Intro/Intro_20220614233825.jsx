import React from "react";
import "./Intro.css";
import FloatingDiv from "../FloatingDiv/FloatingDiv";

import Github from "../../img/github.png";
import Instagram from "../../img/instagram.png";
import LinkedIn from "../../img/linkedin.png";

import Background1 from "../../img/background1.png";
import Background2 from "../../img/background2.png";
// import boy from "../../img/boy.png";
import avatar from "../../img/avt-2-rm-bg.png";
import thumbup from "../../img/thumbup.png";
import Crown from "../../img/crown.png";
import glassesimoji from "../../img/glassesimoji.png";

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
        <a href="" download>
          <button className="button i-button">Download CV</button>
        </a>
        <div className="i-icons">
          <img src={Github} alt="" />
          <img src={Instagram} alt="" />
          <img src={LinkedIn} alt="" />
        </div>
      </div>
      <div className="i-right">
        <img src={Background1} alt="" />
        <img src={Background2} alt="" />
        <img src={avatar} alt="" />
        <motion.img
          initial={{ left: "-36%" }}
          whileInView={{ left: "-24%" }}
          transition={transition}
          src={glassesimoji}
          alt=""
        />

        <motion.div
          initial={{ left: "100%", top: "-20%" }}
          whileInView={{ left: "68%" }}
          transition={transition}
          style={{ top: "-18%", left: "65%" }}
        >
          <FloatingDiv image={Crown} txt1="Web" txt2="Developer" />
        </motion.div>

        <motion.div
          initial={{ left: "30%", top: "65%" }}
          whileInView={{ left: "-4%" }}
          transition={transition}
          style={{ top: "70%", left: "0rem" }}
        >
          <FloatingDiv image={thumbup} txt1="Good" txt2="Job" />
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
