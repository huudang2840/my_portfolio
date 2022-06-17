import React from "react";
import "./Skill.css";

const Skill = () => {
  return (
    <div className="skill">
      {/* Bên trái */}
      <div className="infor">
        <span>Làm Việc Bằng Các</span>
        <span>ngôn ngữ</span>
        <span>
          Lorem ipsum dolor sit amet, consectetur adipiscing
          <br />
          lorem ipsum dolor sit amet,
          <br />
          Lorem ipsum dolor sit amet, consectetur adipiscing
          <br />
          lorem ipsum dolor sit amet,
        </span>
        <a href="" download>
          <button className="button in-button">Download CV</button>
        </a>
      </div>
    </div>
  );
};

export default Skill;
