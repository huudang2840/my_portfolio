import React from "react";
import "./Comment.css";

const Comment = () => {
  return (
    <div className="c-wapper">
      <div className="c-heading">
        <span>Client always </span>
        <span>Comments </span>
        <span>for me </span>

        <div className="blur c-blur1" style={{ background: "var(--purple)" }}></div>
        <div className="blur c-blur2" style={{ background: "var(--purple)" }}></div>
      </div>
    </div>
  );
};

export default Comment;
