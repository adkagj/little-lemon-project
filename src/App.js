import React from "react";
// import Header from "./components/Header";
import Nav from "./components/Nav";
import Main from "./components/Main/Main";
import Footer from "./components/Footer";
import { Route } from "react-router-dom";
import { Routes } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import Booking from "./components/booking/Booking";
import "./App.css";

import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const App = () => {
  return (
    <div className="App">
      {/* <Header />
      <Nav />
      <Main />
      <Footer /> */}

      <BrowserRouter>
        <Nav />
        <ScrollToHash />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/booking" element={<Booking />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default App;

const ScrollToHash = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const el = document.getElementById(location.hash.replace("#", ""));
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location]);

  return null;
};
