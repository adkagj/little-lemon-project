import "./BookingConfirm.css";

function BookingConfirm({ formData }) {
  if (!formData) {
    return (
      <div className="booking-confirm" id="booking-confirm">
        <h2>Booking Confirmed</h2>
        <p style={{ color: "red" }}>❌ No booking data found.</p>
      </div>
    );
  }

  return (
    <div className="confirm" id="confirm">
      <div className="message">
        <h2>Your Booking</h2>
        <p>
          Here are the details of your booking. Please review the information
          below.
        </p>{" "}
      </div>
      <div className="reservation-details">
        <h3>Reservation Details:</h3>
        <p>Date: {formData.date}</p>
        <p>Time: {formData.time}</p>
        <p>Guests: {formData.guests}</p>
        <p>Occasion: {formData.occasion}</p>
      </div>
      <div className="contact-info">
        <h3>Contact Information:</h3>
        <div className="name-info">
          <label htmlFor="name">Full Name:*</label>
          <input type="text" id="name" required />
        </div>
        <div className="email-info">
          <label htmlFor="email">Email:*</label>
          <input type="email" id="email" required />
        </div>
      </div>
      <button
        onClick={() => {
          const nameInput = document.getElementById("name");
          const emailInput = document.getElementById("email");

          if (!nameInput.value || !emailInput.value) {
            alert("Please fill in both name and email fields");
            return;
          }

          const alertDiv = document.createElement("div");
          alertDiv.className = "custom-alert";
          alertDiv.style.cssText = `
            position: fixed;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            background: rgba(255, 255, 255, 0.95);
            padding: 2rem;
            border-radius: 12px;
            box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
            z-index: 1000;
            animation: fadeIn 0.3s ease-in-out;
          `;
          alertDiv.innerHTML = `
            <div class="alert-content" style="
              text-align: center;
              font-family: system-ui, -apple-system, sans-serif;
            ">
              <p style="
                margin: 0 0 1.5rem;
                font-size: 1.1rem;
                color: #2c3e50;
                line-height: 1.5;
              ">Your booking confirmation has been sent to your email address. We look forward to seeing you!</p>
              <button style="
                background: #495E57;
                color: white;
                border: none;
                padding: 0.8rem 2rem;
                border-radius: 6px;
                font-size: 1rem;
                cursor: pointer;
                transition: background 0.2s;
              " onmouseover="this.style.background='#374842'" 
                onmouseout="this.style.background='#495E57'"
                onclick="window.location.href='/'">OK</button>
            </div>
            <style>
              @keyframes fadeIn {
                from { opacity: 0; transform: translate(-50%, -60%); }
                to { opacity: 1; transform: translate(-50%, -50%); }
              }
            </style>
          `;
          document.body.appendChild(alertDiv);
        }}
        className="button"
      >
        Send Confirmation Email
      </button>
    </div>
  );
}

export default BookingConfirm;
