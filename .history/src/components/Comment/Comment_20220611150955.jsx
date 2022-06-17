import React from "react";
import "./Comment.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Paginattion } from "swiper";

import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";

import Profile1 from "../../img/profile1.jpg";
import Profile2 from "../../img/profile2.jpg";
import Profile3 from "../../img/profile3.jpg";
import Profile4 from "../../img/profile4.jpg";

const Comment = () => {
  const customers = [
    {
      img: Profile1,
      message:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. ",
    },
    {
      img: Profile2,
      message:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. ",
    },
    {
      img: Profile3,
      message:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. ",
    },
    {
      img: Profile4,
      message:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. ",
    },
  ];
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
      <Swiper module={[Paginattion]} slidesPerView={1}>
        {customers.map((client, index) => {
          return (
            <SwiperSlide key={index}>
              <img src={client.img} alt="" />
              <span>{client.message}</span>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default Comment;
