import React from "react";
import "./Skill.css";

import Upwork from "../../img/upwork.png";
import Fiverr from "../../img/fiverr.png";
import Amazon from "../../img/amazon.png";
import Shopify from "../../img/shopify.png";
import Facebook from "../../img/facebook.png";

const Skill = () => {
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
            <img src={Github} alt="" />
          </div>
          <div className="sk-secCircle">
            <img src={Fiverr} alt="" />
          </div>
          <div className="sk-secCircle">
            <img src={Amazon} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skill;
