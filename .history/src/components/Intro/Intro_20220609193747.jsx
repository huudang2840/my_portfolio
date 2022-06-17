import React from "react";
import "./Intro.css";
import Github from "../../img/github.png";
import Instagram from "../../img/instagram.png";
import LinkedIn from "../../img/linkedin.png";

import Vector1 from "../../img/vector1.png";

const Intro = () => {
  return (
    <div className="intro">
      <div className="i-left">
        <div className="i-name">
          <span>Xin chào, tôi là</span>
          <span>Nguyễn Hửu Đăng</span>
          <span>
            Sinh viên trường Đại học Tôn Đức Thắng khóa 23, chuyên ngành Mạng máy tính và truyền
            thông dữ liệu, định hướng trở thành Fontend Developer
          </span>
        </div>
        <button className="button i-button">Liên hệ</button>
        <div className="i-icons">
          <img src={Github} alt="" />
          <img src={Instagram} alt="" />
          <img src={LinkedIn} alt="" />
        </div>
      </div>
      <div className="i-right">right</div>
    </div>
  );
};

export default Intro;
