import React from "react";
import "./Hero.css";
import { useNavigate } from "react-router-dom";
import restaurantFoodImage from "../../assets/images/restaurant-food.jpg";

const Hero = () => {
  const navigate = useNavigate();

  const handleReservation = () => {
    navigate("/booking");
  };

  return (
    <div className="hero">
      <div className="hero-content">
        <h1>Little Lemon</h1>
        <h2>Chicago</h2>
        <p>
          Experience authentic Mediterranean cuisine in a cozy atmosphere. Fresh
          ingredients and traditional recipes passed down through generations.
        </p>
        <button className="button" onClick={handleReservation}>
          Reserve a Table
        </button>
      </div>
      <div className="hero-image">
        <img src={restaurantFoodImage} alt="Restaurant food" loading="lazy" />
      </div>

      <div className="hero-overlay"></div>
    </div>
  );
};

export default Hero;
