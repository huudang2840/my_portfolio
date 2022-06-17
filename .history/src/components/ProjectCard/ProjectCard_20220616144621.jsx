import React from "react";

const ProjectCard = () => {
  return (
    <div className="p-wrapper">
      <a href="https://sixters19050401.github.io/" target="_blank" rel="noreferrer">
        <img src={eCard} alt="" style={{ height: "225px" }} />
      </a>
      <span style={{ color: darkMode ? "white" : "" }}>E-Card "Chào Mừng 20-11"</span>
    </div>
  );
};

export default ProjectCard;
