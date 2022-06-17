import React from "react";
import "./Footer.css";
import Wave from "../../img/wave.png";

import Insta from "@iconscout/react-unicons/icons/uil-instagram";

const Footer = () => {
  return (
    <div className="footer">
      <img src={Wave} alt="" style={{ width: "100%" }} />
      <div className="f-content">
        <span>dangnguyen2842@gmail.com</span>
        <Insta color="white" size="3rem"></Insta>
        {/* <Unicons.UilFacebook color="white" size="3rem"></Unicons.UilFacebook>
        <Unicons.UilGithub color="white" size="3rem"></Unicons.UilGithub> */}
      </div>
      <div className="f-icons"></div>
    </div>
  );
};

export default Footer;
