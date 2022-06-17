import React from "react";
import "./Introduce.css";
import Card from "../Card/Card";

import HeartEmoij from "../../img/heartemoji.png";
import Glasses from "../../img/glasses.png";
import Humble from "../../img/humble.png";

const Introduce = () => {
  return (
    <div className="introduce" id="Introduce">
      {/* Bên trái */}
      <div className="infor">
        <span>My Awesome</span>
        <span>in University</span>
        <span>
          I am a 3rd year student at Ton Duc Thang University.
          <br />
          My major is Information Technology.
          <br />
          Won the second prize in the competition to design and build the "Chào mừng ngày 20-11"
          e-card of the Faculty of Information Technology of my University
          <br />
        </span>
        <a href="" download>
          <button className="button in-button">Download CV</button>
        </a>
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

        <div
          className="blur in-blur-2"
          style={{ background: "var(--purple)", height: "20rem" }}
        ></div>
      </div>
    </div>
  );
};

export default Introduce;
