import React from "react";

import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin } from "react-icons/fa";

import "./Footer.css";

import whiteLogo from "../assets/images/white-logo.png";

const Footer = () => {
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
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/about">About</a>
            </li>
            <li>
              <a href="/menu">Menu</a>
            </li>
            <li>
              <a href="/order">Order Online</a>
            </li>
            <li>
              <a href="/reservation">Reservation</a>
            </li>
            <li>
              <a href="/login">Login</a>
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
