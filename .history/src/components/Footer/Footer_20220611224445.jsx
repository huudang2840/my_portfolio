import React from "react";
import "./Footer.css";
import { UilInstagramAlt } from "@iconscout/react-unicons";

const Footer = () => {
  return (
    <div className="footer">
      <img src={Wave} alt="" style={{ width: "100%" }} />
      <div className="f-content">
        <span>dangnguyen2842@gmail.com</span>
      </div>
      <div className="f-icons"></div>
    </div>
  );
};

export default Footer;
