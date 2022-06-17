import React from "react";
import "./Intro.css";
import FloatingDiv from "../FloatingDiv/FloatingDiv";

import Github from "../../img/github.png";
import Instagram from "../../img/instagram.png";
import LinkedIn from "../../img/linkedin.png";

import Vector1 from "../../img/Vector1.png";
import Vector2 from "../../img/Vector2.png";
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
          <span>Xin chào, tôi là</span>

          <span>
            <Typical
              steps={["Nguyễn", 1000, " Hửu", 1000, " Đăng", 1000]}
              loop={Infinity}
              wrapper="p"
            />
          </span>

          <span>
            Sinh viên trường Đại học Tôn Đức Thắng khóa 23, chuyên ngành Mạng máy tính và truyền
            thông dữ liệu, định hướng trở thành Fontend Developer
          </span>
        </div>
        <button className="button i-button">Liên hệ</button>
        <div className="i-icons">
          <img src={Github} alt="" />
          <img src={Instagram} alt="" />
          <img src={LinkedIn} alt="" />
        </div>
      </div>
      <div className="i-right">
        <img src={Vector1} alt="" />
        <img src={Vector2} alt="" />
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
