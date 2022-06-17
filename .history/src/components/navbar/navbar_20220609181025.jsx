import React from "react";

const navbar = () => {
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
            <li>Kinh nghiệm</li>
            <li>Dự án</li>
            <li>Liên hệ</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default navbar;
