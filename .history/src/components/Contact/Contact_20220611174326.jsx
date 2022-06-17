import "./Contact.css";
import "../Introduce/Introduce";
import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", form.current, "YOUR_PUBLIC_KEY").then(
      (result) => {
        console.log(result.text);
      },
      (error) => {
        console.log(error.text);
      }
    );
  };

  return (
    <div className="contact">
      {/* Left */}
      <div className="c-left">
        <span>Get in touch</span>
        <span>Contact me</span>
        <div className="blur c-blur1" style={{ background: "#ABF1FF94" }}></div>
      </div>
      {/* Right */}

      <div className="c-right">
        <form>
          <input className="user" type="text" name="name" placeholder="Họ và tên" />
          <input className="user" type="email" name="email" placeholder="Email" />
          <textarea className="user" type="text" name="message" placeholder="Message" />
          <input type="submit" value="Send" className="button" />
        </form>
        <div className="blur c-blur1" style={{ background: "var(--purple)" }}></div>
      </div>
    </div>
  );
};

export default Contact;
