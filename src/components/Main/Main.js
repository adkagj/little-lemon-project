import React, { useEffect } from "react";
import Hero from "./Hero";
import Specials from "./Specials";
import Testimonials from "./Testimonials";
import About from "./About";
import { useLocation } from "react-router-dom";

const Main = () => {
  const location = useLocation();

  // when you move with hash to #about or #specials, scroll to the section
  useEffect(() => {
    if (location.hash === ("#about" || "#specials")) {
      const someHomeSection = document.getElementById(
        location.hash.replace("#", "")
      );
      if (someHomeSection) {
        someHomeSection.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      // otherwise scroll up to the top of the page
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, [location]);

  return (
    <div className="main">
      <Hero />
      <Specials />
      <Testimonials />
      <About />
    </div>
  );
};

export default Main;
