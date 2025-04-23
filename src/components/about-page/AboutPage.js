// About.js
import React from "react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

import "./AboutPage.css";
import restaurantImg from "../../assets/images/restaurant.jpg";
import aboutImage from "../../assets/images/about-image-b.jpg";

const About = () => {
  const mapStyles = {
    height: "400px",
    width: "100%",
  };

  const defaultCenter = {
    lat: 41.8756, // Chicago coordinates
    lng: -87.6244,
  };

  return (
    <div className="about-container" id="about-us">
      <h1>About Little Lemon</h1>

      <section className="restaurant-info">
        <h2>Our Story</h2>
        <p>
          Little Lemon is a charming Mediterranean restaurant located in the
          heart of Chicago. We pride ourselves on serving authentic family
          recipes with a modern twist. Founded in 2010 by the Levanti family,
          our restaurant brings together three generations of culinary
          expertise. Every dish we serve carries the warmth of Mediterranean
          hospitality and the passion for fresh, high-quality ingredients. Our
          commitment to authenticity means we import select spices and olive
          oils directly from the Mediterranean region, while sourcing fresh
          produce from local Chicago farmers.
        </p>
      </section>

      <section className="chefs">
        <h2>Our Chefs</h2>
        <div className="chefs-container">
          <div className="chef-profiles">
            <div className="chef">
              <h3>Mario</h3>
              <p>
                With over 20 years of experience in Mediterranean cuisine, Chef
                Mario brings authentic flavors and traditional techniques to
                every dish he creates.
              </p>
            </div>
            <div className="chef">
              <h3>Adrian</h3>
              <p>
                Chef Adrian specializes in modern interpretations of classic
                Mediterranean dishes, combining innovation with tradition.
              </p>
            </div>
          </div>

          <div className="chef-img">
            <img src={aboutImage} alt="Little Lemon chefs" />
          </div>
        </div>
      </section>

      <section className="atmosphere">
        <div className="text">
          <h2>Our Atmosphere</h2>
          <p>
            Located in a beautifully restored historic building, Little Lemon
            offers a warm and inviting atmosphere that combines Mediterranean
            charm with modern comfort. Our dining room features exposed brick
            walls, warm lighting, and comfortable seating, creating the perfect
            setting for both intimate dinners and family gatherings. The open
            kitchen concept allows guests to experience the excitement of
            Mediterranean cooking while enjoying their meals.
          </p>
        </div>
        {/* <div className="image">
          <img scr={restaurantImg} alt="Little Lemon restaurant interior" />
        </div> */}
      </section>

      <section className="hours">
        <h2>Opening Hours</h2>
        <p>Our restaurant is open every day:</p>
        <ul>
          <li>Monday - Thursday: 11:00 AM - 9:00 PM</li>
          <li>Friday - Saturday: 11:00 AM - 10:00 PM</li>
          <li>Sunday: 12:00 PM - 8:00 PM</li>
        </ul>
      </section>

      <section className="location">
        <h2>Find Us</h2>
        <address>
          123 Main Street
          <br />
          Chicago, Illinois 60601
          <br />
          Tel: (312) 555-0123
        </address>

        <LoadScript
          googleMapsApiKey={process.env.REACT_APP_GOOGLE_MAPS_API_KEY}
        >
          <GoogleMap
            mapContainerStyle={mapStyles}
            zoom={15}
            center={defaultCenter}
          >
            <Marker position={defaultCenter} />
          </GoogleMap>
        </LoadScript>
      </section>
    </div>
  );
};

export default About;
