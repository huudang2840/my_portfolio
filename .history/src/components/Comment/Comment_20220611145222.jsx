import React from "react";
import "./Comment.css";
import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";

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
    </div>
  );
};

export default Comment;
