import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/images/Logo.svg";
import mobileMenu from "../assets/images/icon-hamburger-menu.svg";
import "./Nav.css";

const Nav = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleNavClick = () => {
    setIsMobileMenuOpen(false);
  };

  const handleHomeClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    handleNavClick();
  };

  return (
    <div className="nav">
      <Link to="/">
        <img src={logo} alt="Logo" className="nav-logo" />
      </Link>
      {/* mobile-menu */}
      <div className="mobile-nav">
        <img src={logo} alt="Logo" className="nav-logo" />
        <button className="hamburger-menu" onClick={toggleMobileMenu}>
          <img src={mobileMenu} alt="hamburger menu"></img>
        </button>
      </div>

      <ul className={`mobile-menu ${isMobileMenuOpen ? "active" : ""}`}>
        <li>
          <Link to="/" onClick={handleHomeClick}>
            Home
          </Link>
        </li>
        <li>
          <Link
            to="#about"
            onClick={(e) => {
              e.preventDefault();
              document
                .getElementById("about")
                .scrollIntoView({ behavior: "smooth" });
              handleNavClick();
            }}
          >
            About
          </Link>
        </li>
        <li>
          <Link to="/" onClick={handleNavClick}>
            Services
          </Link>
        </li>
        <li>
          <Link to="/" onClick={handleNavClick}>
            Menu
          </Link>
        </li>
        <li>
          <Link to="/Booking" onClick={handleNavClick}>
            Reservation
          </Link>
        </li>
        <li>
          <Link to="/" onClick={handleNavClick}>
            Order Online
          </Link>
        </li>
        <li>
          <Link to="/" onClick={handleNavClick}>
            Login
          </Link>
        </li>
      </ul>

      <ul className="desktop-menu">
        <li>
          <Link
            to="/"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            to="#about"
            onClick={(e) => {
              e.preventDefault();
              document
                .getElementById("about")
                .scrollIntoView({ behavior: "smooth" });
            }}
          >
            About
          </Link>
        </li>
        <li>
          <Link to="/">Menu</Link>
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
  );
};

export default Nav;
