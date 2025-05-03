import React from "react";
import "./About.css";
import { useNavigate } from "react-router-dom";

import imageOne from "../../assets/images/about-image-a.jpg";
import imageTwo from "../../assets/images/about-image-b.jpg";

const About = () => {
  const navigate = useNavigate();

  const handleAboutPage = () => {
    navigate("/about-us");
  };

  return (
    <div className="about" id="about">
      <div className="about-text">
        <h1>Little Lemon</h1>
        <h2>Chicago</h2>
        <p>
          Little Lemon is a charming neighborhood bistro that serves simple food
          and classic cocktails in a lively but casual environment the
          restaurant features a locally sourced menu with daily specials.Little
          Lemon is a charming neighborhood bistro that serves simple food and
          classic cocktails in a lively but casual environment the restaurant
          features a locally sourced menu with daily specials.
        </p>

        <button className="button" onClick={handleAboutPage}>
          Learn More
        </button>
      </div>

      <div className="about-image">
        <img src={imageOne} alt="Little Lemon chefs" loading="lazy" />
        <img src={imageTwo} alt="Little Lemon chefs" loading="lazy" />
      </div>
    </div>
  );
};

export default About;
