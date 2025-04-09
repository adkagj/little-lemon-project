import React from "react";
import "./Hero.css";

import restaurantFoodImage from "../assets/images/restaurant-food.jpg";

const Hero = () => {
  return (
    <div className="hero">
      <div className="hero-content">
        <h1>Little Lemon</h1>
        <h2>Slovakia</h2>
        <p>
          Experience authentic Mediterranean cuisine in a cozy atmosphere. Fresh
          ingredients and traditional recipes passed down through generations.
        </p>
        <button className="reserve-btn">Reserve Table</button>
      </div>
      <div className="hero-image">
        <img src={restaurantFoodImage} alt="Restaurant food" />
      </div>

      <div className="hero-overlay"></div>
    </div>
  );
};

export default Hero;
