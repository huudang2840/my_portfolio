import React from "react";
import "./Project.css";
import { Swiper, SwiperSlide } from "swiper/react";
import eCard from "../../img/20-11.png";
import musicApp from "../../img/music-app.png";

import Ecommerce from "../../img/ecommerce.png";
import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";

import { themeContext } from "../../Context";
import { useContext } from "react";

const Project = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  const widthScreen = window.screen.availWidth;
  const project = [
    {
      title: "E-Card "Chào Mừng 20-11"",
      link: 1,
      name: "bill",
    },
    {
      id: 2,
      name: "ted",
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
        <SwiperSlide>
          <div className="s-wrapper">
            <a href="https://sixters19050401.github.io/" target="_blank" rel="noreferrer">
              <img src={eCard} alt="" style={{ height: "225px" }} />
            </a>
            <span style={{ color: darkMode ? "white" : "" }}>E-Card "Chào Mừng 20-11"</span>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="s-wrapper">
            <a href="https://sixters19050401.github.io/" target="_blank" rel="noreferrer">
              <img src={Ecommerce} alt="" />
            </a>
            <span style={{ color: darkMode ? "white" : "" }}>E-Card "Chào Mừng 20-11"</span>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="s-wrapper">
            <a href="https://sixters19050401.github.io/" target="_blank" rel="noreferrer">
              <img src={eCard} alt="" style={{ height: "225px" }} />
            </a>
            <span style={{ color: darkMode ? "white" : "" }}>E-Card "Chào Mừng 20-11"</span>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="s-wrapper">
            <a href="https://sixters19050401.github.io/" target="_blank" rel="noreferrer">
              <img src={eCard} alt="" style={{ height: "225px" }} />
            </a>
            <span style={{ color: darkMode ? "white" : "" }}>E-Card "Chào Mừng 20-11"</span>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Project;
