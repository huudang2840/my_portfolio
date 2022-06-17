import React from "react";
import "./ProjectCard";

const ProjectCard = (link, img, darkMode, title) => {
  return (
    <div className="p-wrapper">
      <a href={link} target="_blank" rel="noreferrer">
        <img src={img} alt="" style={{ height: "225px" }} />
      </a>
      <span style={{ color: darkMode ? "white" : "" }}>{title}</span>
    </div>
  );
};

export default ProjectCard;
