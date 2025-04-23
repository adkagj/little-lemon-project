// Main booking page component

import BookingForm from "./BookingForm";
import React, { useReducer } from "react";
import "./Booking.css";

export const availableTimesReducer = (state, action) => {
  switch (action.type) {
    case "SET_TIMES":
      return action.payload;
    case "ADD_TIME":
      return [...state, action.payload];
    case "REMOVE_TIME":
      return state.filter((time) => time !== action.payload);
    default:
      return state;
  }
};

const BookingPage = () => {
  const [initialTimes, dispatch] = useReducer(availableTimesReducer, [
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

        <BookingForm initialTimes={initialTimes} dispatch={dispatch} />
      </div>
    </div>
  );
};

export default BookingPage;
