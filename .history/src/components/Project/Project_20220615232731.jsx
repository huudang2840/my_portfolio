import React from "react";
import "./Project.css";
import { Swiper, SwiperSlide } from "swiper/react";
import Sidebar from "../../img/sidebar.png";
import Ecommerce from "../../img/ecommerce.png";
import Hoc from "../../img/hoc.png";
import MusicApp from "../../img/musicapp.png";
import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";

const Project = () => {
  return (
    <div className="project" id="Project">
      {/* Heading */}
      <span>
        My <span style={{ color: "var(--redPrimary)" }}>Projects</span>
      </span>

      {/* Slider */}
      <Swiper spaceBetween={30} slidesPerView={3} grabCursor={true} className="project-slider">
        <SwiperSlide>
          <a href="https://sixters19050401.github.io/?utm_source=zalo&utm_medium=zalo&utm_campaign=zalo">
            <img src={Sidebar} alt="" />
          </a>
        </SwiperSlide>
        <SwiperSlide>
          <img src={Ecommerce} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Hoc} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={MusicApp} alt="" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Project;
