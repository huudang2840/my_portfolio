import React, { useRef, useState, useEffect } from "react";
import "./Contact.css";
import "../Introduce/Introduce";
import emailjs from "@emailjs/browser";
import { themeContext } from "../../Context";
import { useContext } from "react";
import { BsFillTelephoneFill } from "react-icons/bs";
import { GrMail } from "react-icons/gr";
import { FaHome, FaUserAlt } from "react-icons/fa";
// import { HiMail } from "react-icons/hi";

import Github from "../../img/github.png";
// import Email from "@iconscout/react-unicons/icons/uil-envelope";
import LinkedIn from "../../img/linkedin.png";

import AOS from "aos";
import "aos/dist/aos.css";

const Contact = () => {
  useEffect(() => {
    AOS.init({ duration: 1500 });
  }, []);
  const form = useRef();
  const [done, setDone] = useState(false);

  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm("service_0x6cqln", "template_8cda5tf", form.current, "BTdI6XlDvb8F6LORh").then(
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
      <div className="c-title">
        <span style={{ color: darkMode ? "white" : "" }}>Contact me</span>
        <span>-get in touch-</span>
        <div className="blur c-blur1" style={{ background: "#ABF1FF94" }}></div>
      </div>
      {/* Right */}

      <div className="c-form" data-aos="fade-up" data-aos-duration="1000">
        <div className="c-left">
          <h1>Information</h1>
          <span>
            <FaUserAlt></FaUserAlt>
            <p>Nguyen Huu Dang</p>
          </span>
          <span>
            <BsFillTelephoneFill></BsFillTelephoneFill>
            <p>0786628280</p>
          </span>
          <span>
            <GrMail></GrMail>
            <p>dangnguyen2842@gmail.com</p>
          </span>
          <span>
            <FaHome></FaHome>
            <p>Ho Chi Minh, Viet Nam</p>
          </span>

          <div className="i-icons contact-icon">
            {/* <a
              className="mail-icon"
              target="_blank"
              rel="noreferrer"
              href="mailto:dangnguyen2842@gmail.com"
            >
              <HiMail size="3.2rem"></HiMail>
            </a> */}
            <a target="_blank" href="https://github.com/huudang2840" rel="noreferrer">
              <img src={Github} alt="" />
            </a>

            <a
              target="_blank"
              href="https://www.linkedin.com/in/đăng-nguyễn-7a4b04240/"
              rel="noreferrer"
            >
              <img src={LinkedIn} alt="" />
            </a>
          </div>
        </div>
        <div className="c-right">
          <form ref={form} onSubmit={sendEmail}>
            <span className="group-input">
              <input className="user" type="text" name="user_name" placeholder="Your Name" />
              <input className="user" type="email" name="user_email" placeholder="Email Address" />
            </span>

            <input className="user" type="text" name="user_subject" placeholder="Subject" />
            <textarea
              className="user"
              type="text"
              name="message"
              placeholder="How can I help you ?"
            />
            <input type="submit" value="Send" className="button" />
            <span className="c-thanks">{done && "Thank you, I got your email! "}</span>
            <div className="blur c-blur1" style={{ background: "var(--purple)" }}></div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
