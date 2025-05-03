import React from "react";
import { Link, useNavigate } from "react-router-dom";

import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin } from "react-icons/fa";
import "./Footer.css";
import whiteLogo from "../assets/images/white-logo.png";

const Footer = () => {
  const navigate = useNavigate();

  const handleHomeClick = () => {
    navigate("/");
  };

  const handleAboutClick = () => {
    navigate("/", { state: { scrollTo: "about" } });
  };

  const handleSpecialsClick = () => {
    navigate("/", { state: { scrollTo: "specials" } });
  };

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-logo">
          <img src={whiteLogo} alt="logo" />
        </div>

        <div className="footer-nav">
          <h4>Navigation</h4>
          <ul>
            <li>
              <Link to="/" onClick={handleHomeClick}>
                Home
              </Link>
            </li>
            <li>
              <Link to="/#about" onClick={handleAboutClick}>
                About
              </Link>
            </li>
            <li>
              <Link to="/#specials" onClick={handleSpecialsClick}>
                Menu
              </Link>
            </li>
            <li>
              <Link to="/Booking">Reservation</Link>
            </li>
            <li>
              <Link to="/">Order Online</Link>
            </li>
            <li>
              <Link to="/">Login</Link>
            </li>
          </ul>
        </div>

        <div className="contact">
          <h4>Contact</h4>
          <ul>
            <li>123 Restaurant Street</li>
            <li>Chicago, IL 60601</li> <li>Phone: (555) 123-4567</li>
            <li>Email: info@restaurant.com</li>
          </ul>
        </div>

        <div className="social">
          <h4>Social Media</h4>
          <ul>
            <li>
              <a href="#">
                <FaFacebook /> Facebook
              </a>
            </li>
            <li>
              <a href="#">
                <FaInstagram /> Instagram
              </a>
            </li>
            <li>
              <a href="#">
                <FaTwitter /> Twitter
              </a>
            </li>
            <li>
              <a href="#">
                <FaLinkedin /> LinkedIn
              </a>
            </li>{" "}
          </ul>
        </div>
      </div>

      <div className="copyright">
        <p>© 2025 All rights reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
