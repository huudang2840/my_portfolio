import React from "react";

const Introduce = () => {
  return (
    <div className="introduce">
      {/* Bên trái */}
      <div className="infor">
        <span>My Awesome</span>
        <span>In My University</span>
        <span>
          Lorem ipsum dolor sit amet, consectetur adipiscing
          <br />
          lorem ipsum dolor sit amet, consectetur adipiscing
        </span>
        <button className="button in-button">Download CV</button>
      </div>
      {/* Bên phải */}
      <div className="cards"></div>
    </div>
  );
};

export default Introduce;
