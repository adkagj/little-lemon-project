import React from "react";
import logo from "../assets/images/Logo.svg";
import mobileMenu from "../assets/images/icon-hamburger-menu.svg";
import "./Nav.css";

const Nav = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div className="nav">
      <a href="/">
        <img src={logo} alt="Logo" className="nav-logo" />
      </a>
      {/* mobile-menu */}
      <div className="mobile-nav">
        <img src={logo} alt="Logo" className="nav-logo" />
        <button className="hamburger-menu" onClick={toggleMobileMenu}>
          <img src={mobileMenu} alt="hamburger menu"></img>
        </button>
      </div>
      {isMobileMenuOpen && (
        <ul className="mobile-menu">
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/">About</a>
          </li>
          <li>
            <a href="/">Services</a>
          </li>
          <li>
            <a href="/">Menu</a>
          </li>
          <li>
            <a href="/">Reservation</a>
          </li>
          <li>
            <a href="/">Order Online</a>
          </li>
          <li>
            <a href="/">Login</a>
          </li>
        </ul>
      )}
      <ul className="desktop-menu">
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/">About</a>
        </li>
        <li>
          <a href="/">Menu</a>
        </li>
        <li>
          <a href="/">Reservation</a>
        </li>
        <li>
          <a href="/">Order Online</a>
        </li>
        <li>
          <a href="/">Login</a>
        </li>
      </ul>
    </div>
  );
};

export default Nav;
