import React from "react";
import "./Footer.css";

import Insta from "@iconscout/react-unicons/icons/uil-instagram";
import Facebook from "@iconscout/react-unicons/icons/uil-facebook";
// import Github from "../../img/f-github.png";

const Footer = () => {
  return (
    <div className="footer">
      <div className="f-content">
        <span>dangnguyen2842@gmail.com</span>
        <div className="f-icons">{/* <Github /> */}</div>
      </div>
      <div className="f-icons"></div>
    </div>
  );
};

export default Footer;
