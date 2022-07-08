import React from "react";
import "./Project.css";
import { Swiper, SwiperSlide } from "swiper/react";
import eCard from "../../img/20-11.png";
import musicApp from "../../img/music-app.png";
import shopeeClone from "../../img/shopee_clone.png";
import eWallet from "../../img/e-wallet.png";
import chatRoom from "../../img/chatroom.png";
import myPortfolio from "../../img/myportfolio.png";
import uiWalletApp from "../../img/ui-walletapp.png";
import magicNoteApp from "../../img/NoteApp.png";
import todoApp from "../../img/smartTodo.png";

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
      title: "E-Wallet",
      link: "https://vi-dien-tu.herokuapp.com",
      img: eWallet,
    },
    {
      title: "Magic Note App",
      link: "https://youtu.be/WhU7olvp8pQ",
      img: magicNoteApp,
    },
    {
      title: "Todo App",
      link: " https://youtu.be/r_UwUaFk3Rg",
      img: todoApp,
    },
    {
      title: "Chat room",
      link: "https://chat-socket-nodejs.herokuapp.com",
      img: chatRoom,
    },
    {
      title: "My Portfolio",
      link: "https://nguyen-huu-dang.herokuapp.com",
      img: myPortfolio,
    },
    {
      title: "UI Wallet App",
      link: "https://www.figma.com/proto/vzTMSl7FGUGNNqQe6C1dLe/UI-V%C3%AD-%C4%91i%E1%BB%87n-t%E1%BB%AD---Final?node-id=46%3A284&starting-point-node-id=46%3A284",
      img: uiWalletApp,
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
