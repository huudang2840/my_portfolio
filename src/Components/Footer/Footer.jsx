import React from "react";
import "./Footer.css";

// import Facebook from "@iconscout/react-unicons/icons/uil-facebook";
// import Github from "@iconscout/react-unicons/icons/uil-github";
// import Email from "@iconscout/react-unicons/icons/uil-envelope";
// import LinkedIn from "@iconscout/react-unicons/icons/uil-linkedin";

import { BiCopyright } from "react-icons/bi";

const Footer = () => {
  return (
    <div className="footer">
      <div className="f-content">
        <BiCopyright> </BiCopyright> <p>Copyright @ 2023 by </p>
        <a href="https://facebook.com/dangdang.28" target="_blank" rel="noreferrer">
          Nguyen Huu Dang
        </a>
      </div>
    </div>
  );
};

export default Footer;
