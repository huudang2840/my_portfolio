import React from "react";

const FloatingDiv = ({ image }) => {
  return (
    <div className="floatingdiv">
      <img src={image} alt="" />
      <span>
        Web
        <br />
        Developer
      </span>
    </div>
  );
};

export default FloatingDiv;
