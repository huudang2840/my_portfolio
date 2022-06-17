import React from "react";
import "./Introduce.css";
import Card from "../Card/Card";

import HeartEmoij from "../../img/heartemoji.png";
import Glasses from "../../img/glasses.png";
import Humble from "../../img/humble.png";

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
        {/* Thẻ 1 */}
        <div style={{ left: "14rem" }}>
          <Card emoij={HeartEmoij} heading={"Design"} detail={"Figma, Photoshop, Illustrator"} />
        </div>
        {/* Thẻ 2 */}
        <div style={{ top: "12rem", left: "-4rem" }}>
          <Card emoij={Glasses} heading={"Developer"} detail={"HTML, CSS, Javascript, React"} />
        </div>
        {/* Thẻ 3 */}
        <div style={{ top: "19rem", left: "12rem" }}>
          <Card emoij={Humble} heading={"UX/UI"} detail={"Lorem in Lorem in Lorem in"} />
        </div>
      </div>
    </div>
  );
};

export default Introduce;
