import React from "react";
import "./Skill.css";

import Upwork from "../../img/Upwork.png";
import Fiverr from "../../img/fiverr.png";
import Amazon from "../../img/amazon.png";
import Shopify from "../../img/Shopify.png";
import Facebook from "../../img/Facebook.png";

import { motion } from "framer-motion";

const Skill = () => {
  const transition = { duration: 2, type: "spring" };

  return (
    <div className="skill">
      {/* Bên trái */}
      <div className="infor">
        <span>Làm Việc Bằng Các</span>
        <span>Ngôn Ngữ</span>
        <span>
          Lorem ipsum dolor sit amet, consectetur adipiscing
          <br />
          lorem ipsum dolor sit amet,
          <br />
          Lorem ipsum dolor sit amet, consectetur adipiscing
          <br />
          lorem ipsum dolor sit amet,
        </span>
        <button className="button in-button">Liên hệ</button>
      </div>
      {/* Bên phải */}
      <div className="sk-right">
        <div className="sk-mainCircle">
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
        </div>
        {/* bg Circle */}
        <div className="sk-backCircle blueCircle"></div>
        <div className="sk-backCircle yellowCircle"></div>
      </div>
    </div>
  );
};

export default Skill;
