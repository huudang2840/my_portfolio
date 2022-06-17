import React from "react";
import "./Navbar.css";
import "./App.css";

const Navbar = () => {
  return (
    <div className="n-wrapper">
      <div className="n-left">
        <div className="n-name">Dang Nguyen</div>
        <span>toggle</span>
      </div>
      <div className="n-right">
        <div className="n-list">
          <ul>
            <li>Trang chủ</li>
            <li>Giới thiệu</li>
            <li>Kỹ năng</li>
            <li>Kinh nghiệm</li>
            <li>Dự án</li>
          </ul>
        </div>
        <button className="button">Liên hệ</button>
      </div>
    </div>
  );
};

export default Navbar;
