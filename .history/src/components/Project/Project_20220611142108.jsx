import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import Sidebar from "../../img/sidebar.png";
import Ecommerce from "../../img/ecommerce.png";
import Hoc from "../../img/hoc.png";
import MusicApp from "../../img/sidebar.png";

const Project = () => {
  return (
    <div className="project">
      {/* Heading */}
      <span>My Recent</span>
      <span>Projects</span>

      {/* Slider */}
      <Swiper>
        <SwiperSlide></SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Project;
