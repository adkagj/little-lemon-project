import { useState } from "react";
import BookingForm from "./BookingForm";
import BookingConfirm from "./BookingConfirm";
import "./Booking.css";

const Booking = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState(null);

  const handleFormSubmit = (data) => {
    setFormData(data);
    setStep(2); // Move to the confirmation step
    console.log("Moving to step:", 2);
  };

  const handleStepClick = (stepNumber) => {
    // Only allow moving to step 2 if form data exists
    if (stepNumber === 2 && !formData) {
      console.log("Please fill out the form first");
      return;
    }
    setStep(stepNumber);
    console.log("Moving to step:", stepNumber);
  };

  // Log active step whenever it changes
  console.log("Current active step:", step);

  return (
    <div className="booking">
      <h1>Book Your Stay</h1>
      <div className="booking-steps">
        <div
          className={`step-item ${step === 1 ? "active" : ""}`}
          onClick={() => handleStepClick(1)}
          style={{ cursor: "pointer" }}
        >
          1
        </div>
        <div
          className={`step-item ${step === 2 ? "active" : ""}`}
          onClick={() => handleStepClick(2)}
          style={{ cursor: formData ? "pointer" : "not-allowed" }}
        >
          2
        </div>
      </div>
      {step === 1 && <BookingForm onSubmit={handleFormSubmit} />}
      {step === 2 && formData && <BookingConfirm formData={formData} />}
    </div>
  );
};

export default Booking;
