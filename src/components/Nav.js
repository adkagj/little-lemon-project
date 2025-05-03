import React from "react";

import { Link, useNavigate } from "react-router-dom";

import logo from "../assets/images/logo.svg";

import mobileMenu from "../assets/images/icon-hamburger-menu.svg";
import "./Nav.css";

const Nav = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);
  const navigate = useNavigate();

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleNavClick = () => {
    setIsMobileMenuOpen(false);
  };

  const handleHomeClick = () => {
    navigate("/");
    handleNavClick();
  };

  const handleAboutClick = () => {
    navigate("/", { state: { scrollTo: "about" } });
    handleNavClick();
  };

  return (
    <div className="nav" id="nav">

      <div className="nav-container">
        <Link to="/" onClick={handleHomeClick}>
          <img src={logo} alt="Logo" className="nav-logo" />
        </Link>

        {/* MOBILE-MENU BUTTON */}
        <div className="mobile-nav">
          <button className="hamburger-menu" onClick={toggleMobileMenu}>
            <img src={mobileMenu} alt="hamburger menu"></img>
          </button>
        </div>

        {/* MOBILE MENU LIST */}
        <ul className={`mobile-menu ${isMobileMenuOpen ? "active" : ""}`}>
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
            <Link to="/#specials" onClick={handleNavClick}>
              Menu
            </Link>
          </li>
          <li>
            <Link to="/Booking" onClick={handleNavClick}>
              Reservations
            </Link>
          </li>
          <li>
            <Link to="/under-construction" onClick={handleNavClick}>
              Order Online
            </Link>
          </li>
          <li>
            <Link to="/under-construction" onClick={handleNavClick}>
              Login
            </Link>
          </li>
        </ul>

        {/* DESKTOP-MENU */}
        <ul className="desktop-menu">
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
            <Link to="/#specials">Menu</Link>
          </li>
          <li>
            <Link to="/Booking">Reservations</Link>
          </li>
          <li>
            <Link to="/under-construction">Order Online</Link>
          </li>
          <li>
            <Link to="/under-construction">Login</Link>
          </li>
        </ul>
      </div>

    </div>
  );
};

export default Nav;
