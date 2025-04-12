// Main booking page component
import React from "react";
import BookingForm from "./BookingForm";
import "./Booking.css";

import { useState } from "react";

const BookingPage = () => {
  const [availableTimes, setAvailableTimes] = useState([
    "17:00",
    "18:00",
    "19:00",
    "20:00",
    "21:00",
    "22:00",
  ]);

  return (
    <div className="booking" id="booking">
      <div className="booking-page">
        <h1>Book Your Stay</h1>

        <BookingForm
          availableTimes={availableTimes}
          setAvailableTimes={setAvailableTimes}
        />
      </div>
    </div>
  );
};

export default BookingPage;
