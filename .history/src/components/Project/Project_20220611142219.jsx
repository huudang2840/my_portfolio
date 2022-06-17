import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import Sidebar from "../../img/sidebar.png";
import Ecommerce from "../../img/ecommerce.png";
import Hoc from "../../img/hoc.png";
import MusicApp from "../../img/musicapp.png";
import "swiper/css";

const Project = () => {
  return (
    <div className="project">
      {/* Heading */}
      <span>My Recent</span>
      <span>Projects</span>

      {/* Slider */}
      <Swiper>
        <SwiperSlide>
          <img src={Sidebar} alt="" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Project;
