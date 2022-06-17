import React from "react";
import "./Floating.css";
import { themeContext } from "../../Context";
import { useContext } from "react";

const FloatingDiv = ({ image, txt1 }) => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
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
