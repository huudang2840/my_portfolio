import React from "react";
import "./Introduce.css";
import Card from "../Card/Card";

import HeartEmoij from "../../img/heartemoji.png";
import Glasses from "../../img/glasses.png";

const Introduce = () => {
  return (
    <div className="introduce">
      {/* Bên trái */}
      <div className="infor">
        <span>My Awesome</span>
        <span>in University</span>
        <span>
          Lorem ipsum dolor sit amet, consectetur adipiscing
          <br />
          lorem ipsum dolor sit amet, consectetur adipiscing
        </span>
        <button className="button in-button">Download CV</button>
      </div>
      {/* Bên phải */}
      <div className="cards">
        <div style={{ left: "14rem" }}>
          <Card emoij={HeartEmoij} heading={"Design"} detail={"Figma, Photoshop, Illustrator"} />
        </div>

        <div style={{ top: "12rem", left: "-4rem" }}>
          <Card emoij={Glasses} heading={"Design"} detail={"Figma, Photoshop, Illustrator"} />
        </div>
      </div>
    </div>
  );
};

export default Introduce;
