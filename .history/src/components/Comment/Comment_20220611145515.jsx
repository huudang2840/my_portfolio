import React from "react";
import "./Comment.css";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";

import Profile1 from "../../img/profile1.png";

const Comment = () => {
  return (
    <div className="c-wapper">
      <div className="c-heading">
        <span>Client always </span>
        <span>Comments </span>
        <span>for me </span>

        <div className="blur c-blur1" style={{ background: "var(--purple)" }}></div>
        <div className="blur c-blur2" style={{ background: "skyblue" }}></div>
      </div>

      {/* Slider */}
      <Swiper></Swiper>
    </div>
  );
};

export default Comment;
