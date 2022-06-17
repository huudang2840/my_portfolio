import React, { useRef, useState } from "react";
import "./Contact.css";
import "../Introduce/Introduce";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();
  const [done, setDone] = useState(false);

  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm("service_mpucvz5", "template_bf8vzpv", form.current, "5KF476gcvLuOiv28W").then(
      (result) => {
        console.log(result.text);
        setDone(true);
      },
      (error) => {
        console.log(error.text);
      }
    );
  };

  return (
    <div className="contact" id="Contact">
      {/* Left */}
      <div className="c-left">
        <span>Get in touch</span>
        <span>Contact me</span>
        <div className="blur c-blur1" style={{ background: "#ABF1FF94" }}></div>
      </div>
      {/* Right */}

      <div className="c-right">
        <form ref={form} onSubmit={sendEmail}>
          <input className="user" type="text" name="user_name" placeholder="Name" />
          <input className="user" type="email" name="user_email" placeholder="Email" />
          <textarea className="user" type="text" name="message" placeholder="Message" />
          <input type="submit" value="Send" className="button" />
          <span className="c-thanks">{done && "Thank you, I got your email! <3"}</span>
          <div className="blur c-blur1" style={{ background: "var(--purple)" }}></div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
