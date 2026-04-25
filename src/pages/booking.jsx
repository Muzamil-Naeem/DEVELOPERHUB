import React, { useState } from "react";
import "../styles/booking.css";
import Swal from "sweetalert2";
import { useEffect, useRef } from "react";
import {
  bookingHeroAnim,
  bookingFormAnim,
  bookingFieldsAnim,
  bookingCardsAnim,
  bookingInfoAnim
} from "../animations/bookingAnimations";

function Booking() {
  const heroRef = useRef(null);
const formRef = useRef(null);
const fieldRefs = useRef([]);
const infoRef = useRef(null);
useEffect(() => {
  bookingHeroAnim(heroRef.current);
  bookingFormAnim(formRef.current);
  bookingFieldsAnim(fieldRefs.current);
  bookingCardsAnim(document.querySelectorAll(".booking-card"));
  bookingInfoAnim(infoRef.current);
}, []);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    meetingType: "",
    date: "",
    time: "",
    projectDetails: ""
  });

  const [booking, setBooking] = useState(() => {
  const saved = localStorage.getItem("bookings");
  return saved ? JSON.parse(saved) : [];
});
useEffect(() => {
  localStorage.setItem("bookings", JSON.stringify(booking));
}, [booking]);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });

    // clear field error while typing
    setErrors((prev) => ({
      ...prev,
      [e.target.name]: ""
    }));

    setSubmitted(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setSubmitted(true);
    setLoading(true);

    let newErrors = {};

    // ---------------- VALIDATION ----------------
    if (!formData.name) newErrors.name = "Name is required.";
    if (!formData.email) newErrors.email = "Email is required.";
    if (!formData.date) newErrors.date = "Date is required.";
    if (!formData.time) newErrors.time = "Time is required.";
    if (!formData.projectDetails)
      newErrors.projectDetails = "Project details are required.";
    if (!formData.meetingType)
      newErrors.meetingType = "Please select a meeting type.";

    // ---------------- DATE/TIME CHECK ----------------
    if (formData.date && formData.time) {
      const selectedDateTime = new Date(
        `${formData.date}T${formData.time}`
      );
      const now = new Date();

      if (selectedDateTime < now) {
        const today = new Date();

        if (
          new Date(formData.date).toDateString() ===
          today.toDateString()
        ) {
          newErrors.time = "Please select a future time slot.";
        } else {
          newErrors.date = "Please select a future date.";
        }
      }
    }

    // ❌ STOP IF ERRORS EXIST
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      setLoading(false);
      return;
    }

    // ---------------- DUPLICATE CHECK ----------------
    const exist = booking.find(
      (b) => b.date === formData.date && b.time === formData.time
    );

    if (exist) {
      setErrors({
        time: "This slot is already booked. Please choose another time."
      });
      setLoading(false);
      return;
    }

    // ---------------- SUCCESS ----------------
    setErrors({});

    const newBooking = {
      id: Date.now(),
      ...formData
    };

    setBooking([...booking, newBooking]);

    setTimeout(() => {
      Swal.fire({
        title: "Success!",
        text: "Your meeting has been booked successfully!",
        icon: "success"
      });

      setLoading(false);

      setFormData({
        name: "",
        email: "",
        phone: "",
        meetingType: "",
        date: "",
        time: "",
        projectDetails: ""
      });
    }, 600);
  };

  const handleCancel = (id) => {
    const newBooking = booking.filter((b) => b.id !== id);
    setBooking(newBooking);
  };

  return (
    <div className="booking-page">

      {/* HERO */}
      <section className="booking-hero" ref={heroRef}>
        <h1>Schedule a Meeting</h1>
        <p>
          Book a consultation with our team to discuss your project ideas,
          requirements, and how we can help you build scalable digital solutions.
        </p>
      </section>

      {/* FORM */}
      <section className="booking-section">
        <h2>Meeting Details</h2>

        <form className="booking-form" onSubmit={handleSubmit} ref={formRef}>

          <div className="field" ref={(el) => fieldRefs.current[0] = el}>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Full Name"
            />
            {submitted && errors.name && (
              <p className="error error-animate">{errors.name}</p>
            )}
          </div>

          <div className="field" ref={(el) => fieldRefs.current[1] = el}>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email Address"
            />
            {submitted && errors.email && (
              <p className="error error-animate">{errors.email}</p>
            )}
          </div>

          <div className="field" ref={(el) => fieldRefs.current[2] = el}>
            <input
              type="text"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Phone Number"
            />
          </div>

          <div className="field" ref={(el) => fieldRefs.current[3] = el}>
            <select
              name="meetingType"
              value={formData.meetingType}
              onChange={handleChange}
            >
              <option value="">Select Meeting Type</option>
              <option value="Project Discussion">Project Discussion</option>
              <option value="AI Consultation">AI Consultation</option>
              <option value="Business Strategy">Business Strategy</option>
              <option value="Technical Support">Technical Support</option>
            </select>

            {submitted && errors.meetingType && (
              <p className="error error-animate">
                {errors.meetingType}
              </p>
            )}
          </div>

          <div className="field" ref={(el) => fieldRefs.current[4] = el}>
            <input
              type="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
              min={new Date().toISOString().split("T")[0]}
            />
            {submitted && errors.date && (
              <p className="error error-animate">{errors.date}</p>
            )}
          </div>

          <div className="field" ref={(el) => fieldRefs.current[5] = el}>
            <input
              type="time"
              name="time"
              value={formData.time}
              onChange={handleChange}
            />
            {submitted && errors.time && (
              <p className="error error-animate">{errors.time}</p>
            )}
          </div>

          <div className="field" ref={(el) => fieldRefs.current[6] = el}>
            <textarea
              name="projectDetails"
              value={formData.projectDetails}
              onChange={handleChange}
              placeholder="Tell us about your project..."
            />
            {submitted && errors.projectDetails && (
              <p className="error error-animate">
                {errors.projectDetails}
              </p>
            )}
          </div>

          <button type="submit" disabled={loading}>
            {loading ? "Booking..." : "Confirm Booking"}
          </button>
        </form>

        {/* BOOKINGS */}
        <h3 className="upcoming">Upcoming Bookings</h3>

        {booking.map((b) => (
          <div key={b.id} className="booking-card">
            <p>
              {b.name} - {b.date} at {b.time}
            </p>
            <button
              className="cancel"
              onClick={() => handleCancel(b.id)}
            >
              Cancel Booking
            </button>
          </div>
        ))}
      </section>

      {/* INFO */}
      <section className="booking-info" ref={infoRef}>
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