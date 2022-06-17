import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import Sidebar from "../../img/Sidebar.png";

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
