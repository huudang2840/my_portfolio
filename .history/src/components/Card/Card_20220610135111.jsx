import React from "react";
import "./Card.css";

const Card = ({ emoij, heading, detail }) => {
  return (
    <div className="card">
      <img src={emoij} alt="" />
      <span>{heading}</span>
      <span>{detail}</span>
      <button className="button c-button">MORE</button>
    </div>
  );
};

export default Card;
