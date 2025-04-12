import React from "react";

import { FaStar } from "react-icons/fa";
import { FaUserCircle } from "react-icons/fa";

import "./Testimonials.css";

const Testimonials = () => {
  return (
    <div className="testimonials">
      <h1>Our customers love us!</h1>
      <div className="testimonials-container">
        <div className="testimonial-item">
          <div className="stars">
            {[...Array(5)].map((star, index) => {
              return (
                <FaStar
                  key={index}
                  className="star-icon"
                  style={{
                    color: index < 4 ? "#ffc107" : "#e4e5e9",
                  }}
                />
              );
            })}
          </div>
          <h2>Fresh and Flavorful</h2>
          <p>
            "The food was absolutely amazing! The flavors were so fresh and
            vibrant."
          </p>
          <div className="reviewer-info">
            <FaUserCircle size={40} className="user-icon" />
            <div className="further-info">
              <h3>- Sarah J.</h3>
              <small>January 15, 2024</small>
            </div>
          </div>
        </div>
        <div className="testimonial-item">
          <div className="stars">
            {[...Array(5)].map((star, index) => {
              return (
                <FaStar
                  key={index}
                  className="star-icon"
                  style={{
                    color: index < 5 ? "#ffc107" : "#e4e5e9",
                  }}
                />
              );
            })}
          </div>
          <h2>Cozy Hidden Gem</h2>
          <p>
            "A hidden gem! The ambiance is cozy and the service is top-notch."
          </p>
          <div className="reviewer-info">
            <FaUserCircle size={40} className="user-icon" />
            <div className="further-info">
              <h3>- Mark T.</h3>
              <small>January 12, 2024</small>
            </div>
          </div>
        </div>
        <div className="testimonial-item">
          <div className="stars">
            {[...Array(5)].map((star, index) => {
              return (
                <FaStar
                  key={index}
                  className="star-icon"
                  style={{
                    color: index < 5 ? "#ffc107" : "#e4e5e9",
                  }}
                />
              );
            })}
          </div>
          <h2>Best Mediterranean Food</h2>
          <p>
            "Best Mediterranean food I've ever had! Highly recommend the Greek
            salad."
          </p>
          <div className="reviewer-info">
            <FaUserCircle size={40} className="user-icon" />
            <div className="further-info">
              <h3>- Emily R.</h3>
              <small>January 10, 2024</small>
            </div>
          </div>
        </div>
        <div className="testimonial-item">
          <div className="stars">
            {[...Array(5)].map((star, index) => {
              return (
                <FaStar
                  key={index}
                  className="star-icon"
                  style={{
                    color: index < 5 ? "#ffc107" : "#e4e5e9",
                  }}
                />
              );
            })}
          </div>
          <h2>Exceptional Quality</h2>
          <p>
            "Exceptional dining experience! The menu variety and quality of
            ingredients are outstanding."
          </p>
          <div className="reviewer-info">
            <FaUserCircle size={40} className="user-icon" />
            <div className="further-info">
              <h3>- Michael P.</h3>
              <small>January 8, 2024</small>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
