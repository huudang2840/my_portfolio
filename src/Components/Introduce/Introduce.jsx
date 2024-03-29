import React from "react";
import "./Introduce.css";
import Card from "../Card/Card";

import Blood from "../../img/blood.png";
import Web from "../../img/web.png";
import secondPrize from "../../img/2nd.png";

import { motion } from "framer-motion";

import { themeContext } from "../../Context";
import { useContext } from "react";

const Introduce = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  const transition = { duration: 2, type: "spring" };

  return (
    <div className="introduce" id="Introduce">
      {/* Bên trái */}
      <div className="infor">
        <span style={{ color: darkMode ? "white" : "" }}>My Awesome</span>
        <span>in University</span>
        <span>
          <br />
          I am a final year student at Ton Duc Thang University.
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
        <motion.div
          initial={{ right: "30%" }}
          whileInView={{ left: "20rem" }}
          style={{ top: "1rem" }}
          transition={transition}
        >
          <Card emoij={secondPrize} heading={"Dance Competition"} detail={"The Second Prize"} />
        </motion.div>
        {/* Thẻ 2 */}
        <motion.div
          initial={{ left: "-30%" }}
          whileInView={{ left: "1rem" }}
          style={{ top: "12rem" }}
          transition={transition}
        >
          <Card emoij={Web} heading={"E-card Competition"} detail={"The Second Prize"} />
        </motion.div>
        {/* Thẻ 3 */}
        <motion.div
          initial={{ right: "10%" }}
          whileInView={{ left: "19rem" }}
          style={{ top: "19rem" }}
          transition={transition}
        >
          <Card
            emoij={Blood}
            heading={"Donate Blood"}
            detail={"Participate In Volunteering Activities"}
          />
        </motion.div>

        <div
          className="blur in-blur-2"
          style={{ background: "var(--purple)", height: "20rem" }}
        ></div>
      </div>
    </div>
  );
};

export default Introduce;
