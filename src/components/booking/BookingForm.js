// Modern reservation form component
import React, { useState, useReducer, useNavigate } from "react";
import "./BookingForm.css";

// Add localStorage helper functions
const saveFormData = (data) => {
  localStorage.setItem("bookingFormData", JSON.stringify(data));
};

const availableTimesReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TIME":
      return [...state, action.payload];
    default:
      return state;
  }
};

const BookingForm = ({ onSubmit }) => {
  const [initialTimes, dispatch] = useReducer(availableTimesReducer, [
    "17:00",
    "18:00",
    "19:00",
    "20:00",
    "21:00",
    "22:00",
  ]);

  const [formData, setFormData] = useState({
    date: "",
    time: "17:00",
    guests: 1,
    occasion: "General Celebration",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form submitted:", formData);
    console.log("Date:", formData.date);
    console.log("Time:", formData.time);
    console.log("Number of guests:", formData.guests);
    console.log("Occasion:", formData.occasion);
    saveFormData(formData); // Save form data to localStorage
    onSubmit(formData); // Pass form data to the parent component
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => {
      const newData = {
        ...prevState,
        [name]:
          name === "guests"
            ? Math.min(Math.max(parseInt(value) || 1, 1), 10)
            : value,
      };
      saveFormData(newData); // Save on each change
      return newData;
    });
    console.log(`${name} changed to:`, value);
  };

  const guestError =
    formData.guests === 10 || formData.guests > 10
      ? "For groups larger than 10, please contact us directly"
      : formData.guests === 1 || formData.guest < 1
      ? "Perfect for an intimate dining experience!"
      : // : formData.guests < 1
        // ? "Number of guests must be at least 1"
        // : formData.guests > 10
        // ? "Maximum number of guests is 10"
        "";

  // Get today's date in YYYY-MM-DD format for min attribute
  const today = new Date().toISOString().split("T")[0];

  return (
    <form onSubmit={handleSubmit} className="form">
      <div className="form-group">
        <label htmlFor="date">Date</label>
        <input
          type="date"
          id="date"
          name="date"
          value={formData.date}
          onChange={handleChange}
          min={today}
          required
        />
      </div>

      <div className="form-group">
        <label htmlFor="time">Time</label>
        <select
          id="time"
          name="time"
          value={formData.time}
          onChange={handleChange}
          required
        >
          {initialTimes.map((time) => (
            <option key={time} value={time}>
              {time}
            </option>
          ))}
        </select>
      </div>

      <div className="form-group">
        <label htmlFor="guests">Number of Guests</label>
        {guestError && <span className="error-message">{guestError}</span>}
        <input
          type="number"
          id="guests"
          name="guests"
          min="1"
          max="10"
          value={formData.guests}
          onChange={handleChange}
          required
        />
      </div>

      <div className="form-group">
        <label htmlFor="occasion">Occasion</label>
        <select
          id="occasion"
          name="occasion"
          value={formData.occasion}
          onChange={handleChange}
          required
        >
          <option value="celebration">General Celebration</option>{" "}
          <option value="birthday">Birthday</option>
          <option value="anniversary">Anniversary</option>
          <option value="engagement">Engagement</option>
          <option value="graduation">Graduation</option>
          <option value="business">Business Meeting</option>
          <option value="date">Date Night</option>
        </select>
      </div>

      <button
        type="submit"
        className="button"
        disabled={
          formData.guests === 10 || formData.guests < 1 || formData.guests > 10
        }
        aria-label="On Click"
      >
        Make Your Reservation
      </button>
    </form>
  );
};

export default BookingForm;
