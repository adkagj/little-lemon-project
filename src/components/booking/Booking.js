// Main booking page component
import React from "react";
import BookingForm from "./BookingForm";
import "./Booking.css";

const BookingPage = () => {
  return (
    <div className="booking" id="booking">
      <div className="booking-page">
        <h1>Book Your Stay</h1>

        <BookingForm />
      </div>
    </div>
  );
};

export default BookingPage;
