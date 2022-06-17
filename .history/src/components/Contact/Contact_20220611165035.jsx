import React from "react";
import "./Contact.css";

const Contact = () => {
  return (
    <div className="contact">
      {/* Left */}
      <div className="w-left">
        <div className="awsome">
          <span>Get in touch</span>
          <span>Contact me</span>
          <div className="blur s-blur1" style={{ background: "#ABF1FF94" }}></div>
        </div>
      </div>
      {/* Right */}

      <div className="c-right">
        <form>
          <input type="text" name="name" placeholder="Họ và tên" />
        </form>
      </div>
    </div>
  );
};

export default Contact;
