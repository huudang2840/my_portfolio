import React from "react";

const Card = ({ emoij, heading, detail }) => {
  return (
    <div className="card">
      <img src={emoij} alt="" />
      <span>{heading}</span>
      <span>{heading}</span>
    </div>
  );
};

export default Card;
