import React from "react";
import "./Skill.css";

import Upwork from "../../img/upwork.png";
import Fiverr from "../../img/upwork.png";
import Upwork from "../../img/upwork.png";
import Upwork from "../../img/upwork.png";

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
    </div>
  );
};

export default Skill;
