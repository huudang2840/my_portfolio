import React from "react";
import "./Project.css";
import { Swiper, SwiperSlide } from "swiper/react";
import eCard from "../../img/20-11.png";
import musicApp from "../../img/music-app.png";
import shopeeClone from "../../img/shopee_clone.png";
import eWallet from "../../img/e-wallet.png";
import chatRoom from "../../img/chatroom.png";

import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";

import { themeContext } from "../../Context";
import { useContext } from "react";

import ProjectCard from "../ProjectCard/ProjectCard";

const Project = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  const widthScreen = window.screen.availWidth;
  const projects = [
    {
      title: "E-Wallet'",
      link: "https://vi-dien-tu.herokuapp.com",
      img: eWallet,
    },
    {
      title: "Chat room'",
      link: "https://chat-socket-nodejs.herokuapp.com",
      img: chatRoom,
    },
    {
      title: "E-Card 'Chào Mừng 20-11'",
      link: "https://sixters19050401.github.io/",
      img: eCard,
    },

    {
      title: "Music App",
      link: "https://huudang2840.github.io/music-player/",
      img: musicApp,
    },
    {
      title: "Shopee Clone UI",
      link: "https://huudang2840.github.io/shopee_clone/",
      img: shopeeClone,
    },
  ];

  return (
    <div className="project" id="Project">
      {/* Heading */}
      <span style={{ color: darkMode ? "white" : "" }}>
        My <span style={{ color: "var(--redPrimary)" }}>Projects</span>
      </span>

      {/* Slider */}

      <Swiper
        height={30}
        spaceBetween={30}
        slidesPerView={widthScreen <= 480 ? 1 : 3}
        grabCursor={true}
        className="project-slider"
      >
        {projects.map((p, index) => {
          return (
            <SwiperSlide key={index}>
              <ProjectCard link={p.link} img={p.img} darkMode={darkMode} title={p.title} />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default Project;
