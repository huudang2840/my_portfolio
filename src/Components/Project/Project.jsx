import React, { useEffect } from "react";

import "./Project.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import AOS from "aos";
import "aos/dist/aos.css";

import { themeContext } from "../../Context";
import { useContext } from "react";
import Github from "@iconscout/react-unicons/icons/uil-github";
import { projects } from "./listProjects.jsx";

const Project = () => {
  useEffect(() => {
    AOS.init({ duration: 1500 });
  }, []);
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 4000,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    arrows: true,
    adaptiveHeight: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          arrows: false,
          dots: true,
        },
      },
    ],
  };

  return (
    <div className="project" id="Project">
      <div className="project-center">
        <span style={{ color: darkMode ? "white" : "" }}>
          My <span style={{ color: "var(--redPrimary)" }}>Projects</span>
        </span>
      </div>

      <Slider {...settings}>
        {projects.map((item) => (
          <div className="project-card" data-aos="zoom-in">
            <div className="project-card-top">
              <img src={item.img} alt={item.title} />
              <a href={item.link} target="_blank" rel="noreferrer">
                <h1>{item.title}</h1>
              </a>
              <p>{item.description}</p>
            </div>
            <div className="project-card-bottom">
              <a href={item.github} target="_blank" rel="noreferrer">
                <Github size="1.5rem"></Github>
              </a>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Project;
