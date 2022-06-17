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
        <UilInstagramAlt color="white" size="3rem"></UilInstagramAlt>
        <UilFacebook color="white" size="3rem"></UilFacebook>
        <UilGithub color="white" size="3rem"></UilGithub>
      </div>
      <div className="f-icons"></div>
    </div>
  );
};

export default Footer;
