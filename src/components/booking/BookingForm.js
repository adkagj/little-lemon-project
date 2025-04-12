// Modern reservation form component
import React, { useState } from "react";
import "./BookingForm.css";

const BookingForm = () => {
  const [formData, setFormData] = useState({
    date: "",
    time: "17:00",
    guests: 1,
    occasion: "birthday",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form submitted:", formData);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const guestError =
    formData.guests > 10
      ? "For groups larger than 10, please contact us directly"
      : formData.guests < 1
      ? "Number of guests must be at least 1"
      : "";

  return (
    <form onSubmit={handleSubmit} className="reservation-form">
      <div className="form-group">
        <label htmlFor="date">Date</label>
        <input
          type="date"
          id="date"
          name="date"
          value={formData.date}
          onChange={handleChange}
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
          <option value="17:00">17:00</option>
          <option value="18:00">18:00</option>
          <option value="19:00">19:00</option>
          <option value="20:00">20:00</option>
          <option value="21:00">21:00</option>
          <option value="22:00">22:00</option>
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
          <option value="birthday">Birthday</option>
          <option value="anniversary">Anniversary</option>
        </select>
      </div>

      <button type="submit" className="button" disabled={guestError}>
        Make Your Reservation
      </button>
    </form>
  );
};

// Modern reservation form component
import React, { useState } from "react";
import "./BookingForm.css";

const BookingForm = () => {
  const [formData, setFormData] = useState({
    date: "",
    time: "17:00",
    guests: 1,
    occasion: "birthday",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form submitted:", formData);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const guestError =
    formData.guests > 10
      ? "For groups larger than 10, please contact us directly"
      : formData.guests < 1
      ? "Number of guests must be at least 1"
      : "";

  return (
    <form onSubmit={handleSubmit} className="reservation-form">
      <div className="form-group">
        <label htmlFor="date">Date</label>
        <input
          type="date"
          id="date"
          name="date"
          value={formData.date}
          onChange={handleChange}
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
          <option value="17:00">17:00</option>
          <option value="18:00">18:00</option>
          <option value="19:00">19:00</option>
          <option value="20:00">20:00</option>
          <option value="21:00">21:00</option>
          <option value="22:00">22:00</option>
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
          <option value="birthday">Birthday</option>
          <option value="anniversary">Anniversary</option>
        </select>
      </div>

      <button type="submit" className="button" disabled={guestError}>
        Make Your Reservation
      </button>
    </form>
  );
};

export default BookingForm;
