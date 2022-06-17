import React from "react";
import "./Footer.css";
import * as Unicons from "@iconscout/react-unicons";
// import { UilInstagramAlt, UilFacebook, UilGithub } from "@iconscout/react-unicons";
import Wave from "../../img/wave.png";

const Footer = () => {
  return (
    <div className="footer">
      <img src={Wave} alt="" style={{ width: "100%" }} />
      <div className="f-content">
        <span>dangnguyen2842@gmail.com</span>
        <Unicons.UilInstagramAlt color="white" size="3rem"></Unicons.UilInstagramAlt>
        <Unicons.UilFacebook color="white" size="3rem"></Unicons.UilFacebook>
        <Unicons.UilGithub color="white" size="3rem"></Unicons.UilGithub>
      </div>
      <div className="f-icons"></div>
    </div>
  );
};

export default Footer;
