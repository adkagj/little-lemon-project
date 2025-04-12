import React from "react";
// import "./Specials.css";
import greekSalad from "../../assets/images/greek-salad.jpg";
import bruchetta from "../../assets/images/bruchetta.svg";
import lemonDessert from "../../assets/images/lemon-dessert.jpg";
import deliveryIcon from "../../assets/images/delivery-icon.png";

import "./Specials.css";
import { useNavigate } from "react-router-dom";

const Specials = () => {
  const navigate = useNavigate();
  const handleOrderOnline = () => {
    navigate("/order-online");
  };

  return (
    <div className="specials">
      <div className="specials-text">
        <h1 className="title">This week's specials</h1>
        <button className="button" onClick={handleOrderOnline}>
          Order Online
        </button>
      </div>

      <div className="specials-container">
        <div className="special-item">
          <img src={greekSalad} alt="Greek salad" className="special-image" />
          <div className="special-info">
            <h3>Greek Salad</h3>
            <p>$12.99</p>
          </div>
          <p className="special-description">
            Fresh Mediterranean salad with olives, feta cheese, tomatoes, and
            olive oil dressing
          </p>
          <div className="delivery">
            <button className="delivery-button" onClick={handleOrderOnline}>
              Order a delivery
            </button>
            <img
              src={deliveryIcon}
              alt="Delivery icon"
              className="delivery-icon"
              onClick={handleOrderOnline}
            />
          </div>
        </div>

        <div className="special-item">
          <img src={bruchetta} alt="Bruschetta" className="special-image" />
          <div className="special-info">
            <h3>Bruschetta</h3>
            <p>$8.99</p>
          </div>
          <p className="special-description">
            Grilled bread rubbed with garlic, topped with diced tomatoes, herbs,
            and olive oil
          </p>
          <div className="delivery">
            <button className="delivery-button" onClick={handleOrderOnline}>
              Order a delivery
            </button>
            <img
              src={deliveryIcon}
              alt="Delivery icon"
              className="delivery-icon"
              onClick={handleOrderOnline}
            />
          </div>
        </div>

        <div className="special-item">
          <img
            src={lemonDessert}
            alt="Lemon dessert"
            className="special-image"
          />
          <div className="special-info">
            <h3>Lemon Dessert</h3>
            <p>$6.99</p>
          </div>
          <p className="special-description">
            Light and refreshing lemon dessert with a buttery crust and
            sweet-tart lemon filling
          </p>
          <div className="delivery">
            <button className="delivery-button" onClick={handleOrderOnline}>
              Order a delivery
            </button>
            <img
              src={deliveryIcon}
              alt="Delivery icon"
              className="delivery-icon"
              onClick={handleOrderOnline}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Specials;
