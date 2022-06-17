import React from "react";
import "./Floating.css";

const FloatingDiv = ({ image, txt1 }) => {
  return (
    <div className="f-wrapper">
      <img className="f-img" src={image} alt="" />
      <div className="floatingdiv">
        <span>{txt1}</span>
      </div>
    </div>
  );
};

export default FloatingDiv;
