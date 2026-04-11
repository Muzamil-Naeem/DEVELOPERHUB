import React from "react";
import "../styles/booking.css";

function Booking() {
  return (
    <div className="booking-page">

      {/* HERO */}
      <section className="booking-hero">
        <h1>Schedule a Meeting</h1>
        <p>
          Book a consultation with our team to discuss your project ideas,
          requirements, and how we can help you build scalable digital solutions.
        </p>
      </section>

      {/* BOOKING FORM */}
      <section className="booking-section">

        <h2>Meeting Details</h2>

        <form className="booking-form">

          <div className="form-row">
            <input type="text" placeholder="Full Name" required />
            <input type="email" placeholder="Email Address" required />
          </div>

          <div className="form-row">
            <input type="text" placeholder="Phone Number" />
            <select>
              <option>Select Meeting Type</option>
              <option>Project Discussion</option>
              <option>AI Consultation</option>
              <option>Business Strategy</option>
              <option>Technical Support</option>
            </select>
          </div>

          <div className="form-row">
            <input type="date" />
            <input type="time" />
          </div>

          <textarea placeholder="Tell us about your project..."></textarea>

          <button type="submit">Confirm Booking</button>

        </form>
      </section>

      {/* INFO SECTION */}
      <section className="booking-info">
        <h2>What Happens Next?</h2>

        <div className="info-grid">

          <div className="info-card">
            <h3>📩 Confirmation</h3>
            <p>You will receive a confirmation email after booking.</p>
          </div>

          <div className="info-card">
            <h3>📞 Consultation</h3>
            <p>Our team will connect with you at the scheduled time.</p>
          </div>

          <div className="info-card">
            <h3>🚀 Execution Plan</h3>
            <p>We discuss your goals and create a clear roadmap.</p>
          </div>

        </div>
      </section>

    </div>
  );
}

export default Booking;