import React from "react";
import "./Footer.css";

import Insta from "@iconscout/react-unicons/icons/uil-instagram";
import Facebook from "@iconscout/react-unicons/icons/uil-facebook";
import Github from "@iconscout/react-unicons/icons/uil-github";
import Github2 from "../../img/fb.png";

const Footer = () => {
  return (
    <div className="footer">
      <div className="f-content">
        <span>dangnguyen2842@gmail.com</span>
        <div className="f-icons">
          <Insta color="white" size="3rem"></Insta>
          <Facebook color="white" size="3rem"></Facebook>
          <Github color="white" size="3rem"></Github>
          <Github2></Github2>
        </div>
      </div>
    </div>
  );
};

export default Footer;
