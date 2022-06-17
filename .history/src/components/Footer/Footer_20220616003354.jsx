import React from "react";
import "./Footer.css";

import Facebook from "@iconscout/react-unicons/icons/uil-facebook";
import Github from "@iconscout/react-unicons/icons/uil-github";
import Email from "@iconscout/react-unicons/icons/uil-envelope";

const Footer = () => {
  return (
    <div className="footer">
      <div className="f-content">
        <span>dangnguyen2842@gmail.com</span>
        <div className="f-icons">
          <a
            target="_blank"
            rel="noreferrer"
            href="mailto:dangnguyen2842@gamil.com?"
            style={{ color: "white" }}
          >
            <Email size="3rem"></Email>
          </a>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.facebook.com/dangdang.28/"
            style={{ color: "white" }}
          >
            <Facebook size="3rem"></Facebook>
          </a>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://github.com/huudang2840"
            style={{ color: "white" }}
          >
            <Github size="3rem"></Github>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
