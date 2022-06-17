import React from "react";
import "./Introduce.css";
import Card from "../Card/Card";

import Blood from "../../img/blood.png";
import Web from "../../img/web.png";
import secondPrize from "../../img/2nd.png";

const Introduce = () => {
  return (
    <div className="introduce" id="Introduce">
      {/* Bên trái */}
      <div className="infor">
        <span>My Awesome</span>
        <span>in University</span>
        <span>
          <br />
          I am a 3rd year student at Ton Duc Thang University.
          <br />
          My major is Information Technology.
          <br />
          <br />
          Won the second prize in the competition to design and build the "Chào mừng ngày 20-11"
          e-card of the Faculty of Information Technology of my University
          <br />
          <br />
          Won the second prize of the dance competition in the military semester and the art
          competition organized by the Faculty of Information Technology
          <br />
          <br />
          Participate in volunteering activities Donate blood for humanity
        </span>
      </div>
      {/* Bên phải */}
      <div className="cards">
        {/* Thẻ 1 */}
        <div style={{ left: "20rem" }}>
          <Card emoij={secondPrize} heading={"Dance Competition"} detail={"The Second Prize"} />
        </div>
        {/* Thẻ 2 */}
        <div style={{ top: "12rem", left: "1rem" }}>
          <Card emoij={Web} heading={"E-card Competition"} detail={"The Second Prize"} />
        </div>
        {/* Thẻ 3 */}
        <div style={{ top: "19rem", left: "20rem" }}>
          <Card
            emoij={Blood}
            heading={"Donate Blood"}
            detail={"Participate In Volunteering Activities"}
          />
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
