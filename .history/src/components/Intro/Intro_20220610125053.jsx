import React from "react";
import "./Intro.css";
import FloatingDiv from "../FloatingDiv/FloatingDiv";

import Github from "../../img/github.png";
import Instagram from "../../img/instagram.png";
import LinkedIn from "../../img/linkedin.png";

import Vector1 from "../../img/Vector1.png";
import Vector2 from "../../img/Vector2.png";
// import boy from "../../img/boy.png";
import avatar from "../../img/avt_NHD_2.png";
import thumbup from "../../img/thumbup.png";
import Crown from "../../img/crown.png";
import glassesimoji from "../../img/glassesimoji.png";

const Intro = () => {
  return (
    <div className="intro">
      <div className="i-left">
        <div className="i-name">
          <span>Xin chào, tôi là</span>
          <span>Nguyễn Hửu Đăng</span>
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
        <img src={glassesimoji} alt="" />

        <div style={{ top: "-18%", left: "65%" }}>
          <FloatingDiv image={Crown} txt1="Web" txt2="Developer" />
        </div>

        <div style={{ top: "70%", left: "0rem" }}>
          <FloatingDiv image={thumbup} txt1="Good" txt2="Job" />
        </div>
        <div className="blur" style={{ background: "rgb(238 218 255)" }}></div>
        <div
          className="blur"
          style={{ background: "#C1F5FF", top: "20rem", left: "-9rem", height: "11rem" }}
        ></div>
      </div>
    </div>
  );
};

export default Intro;
