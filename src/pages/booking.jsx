import React, { useState, useEffect, useRef } from "react";
import "../styles/booking.css";
import Swal from "sweetalert2";
import { auth, db } from "../firebase";
import { onAuthStateChanged } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import {
  collection,
  addDoc,
  getDocs,
  query,
  where,
  deleteDoc,
  doc
} from "firebase/firestore";

import {
  bookingHeroAnim,
  bookingFormAnim,
  bookingFieldsAnim,
  bookingCardsAnim,
  bookingInfoAnim
} from "../animations/bookinganimations";

function Booking() {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);

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

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (!currentUser) {
        navigate("/login");
      } else {
        setUser(currentUser);
      }
    });

    return () => unsubscribe();
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

  const [booking, setBooking] = useState([]);

  useEffect(() => {
    if (!user) return;

    const fetchBookings = async () => {
      const q = query(
        collection(db, "bookings"),
        where("userId", "==", user.uid)
      );

      const snapshot = await getDocs(q);

      const data = snapshot.docs.map((d) => ({
        id: d.id,
        ...d.data()
      }));

      setBooking(data);
    };

    fetchBookings();
  }, [user]);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });

    setErrors((prev) => ({
      ...prev,
      [e.target.name]: ""
    }));

    setSubmitted(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!user) {
      Swal.fire({
        icon: "error",
        title: "Access Denied",
        text: "Please login to book a meeting"
      });
      return;
    }
    setSubmitted(true);
    setLoading(true);

    let newErrors = {};

   
    if (!formData.name) newErrors.name = "Name is required.";
    if (!formData.email) newErrors.email = "Email is required.";
    if (!formData.date) newErrors.date = "Date is required.";
    if (!formData.time) newErrors.time = "Time is required.";
    if (!formData.projectDetails)
      newErrors.projectDetails = "Project details are required.";
    if (!formData.meetingType)
      newErrors.meetingType = "Please select a meeting type.";

  
    if (formData.date && formData.time) {
      const selectedDateTime = new Date(`${formData.date}T${formData.time}`);
      const now = new Date();

      if (selectedDateTime < now) {
        newErrors.time = "Please select a future time slot.";
      }
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      setLoading(false);
      return;
    }


    const q = query(
      collection(db, "bookings"),
      where("date", "==", formData.date),
      where("time", "==", formData.time),
      where("userId", "==", user.uid)
    );

    const snapshot = await getDocs(q);
    if (!snapshot.empty) {
      setErrors({
        time: "This slot is already booked. Please choose another time."
      });
      setLoading(false);
      return;
    }

    setErrors({});

    await addDoc(collection(db, "bookings"), {
      userId: user.uid,
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      meetingType: formData.meetingType,
      date: formData.date,
      time: formData.time,
      projectDetails: formData.projectDetails
    });

    setLoading(false);

    Swal.fire({
      title: "Success!",
      text: "Your meeting has been booked successfully!",
      icon: "success"
    });

    setFormData({
      name: "",
      email: "",
      phone: "",
      meetingType: "",
      date: "",
      time: "",
      projectDetails: ""
    });

    const updated = await getDocs(
      query(collection(db, "bookings"), where("userId", "==", user.uid))
    );

    setBooking(
      updated.docs.map((d) => ({
        id: d.id,
        ...d.data()
      }))
    );
  };

  const handleCancel = async (id) => {
    await deleteDoc(doc(db, "bookings", id));
    setBooking((prev) => prev.filter((b) => b.id !== id));
     Swal.fire({
      title: "Success!",
      text: "Booking has been cancelled successfully!",
      icon: "success"
    });
  };

  return (
    <div className="booking-page">

      <section className="booking-hero" ref={heroRef}>
        <h1>Schedule a Meeting</h1>
        <p>
          Book a consultation with our team to discuss your project ideas,
          requirements, and how we can help you build scalable digital solutions.
        </p>

    
      </section>

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
            {submitted && errors.name && <p className="error">{errors.name}</p>}
          </div>

          <div className="field" ref={(el) => fieldRefs.current[1] = el}>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email Address"
            />
            {submitted && errors.email && <p className="error">{errors.email}</p>}
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
              <p className="error">{errors.meetingType}</p>
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
            {submitted && errors.date && <p className="error">{errors.date}</p>}
          </div>

          <div className="field" ref={(el) => fieldRefs.current[5] = el}>
            <input
              type="time"
              name="time"
              value={formData.time}
              onChange={handleChange}
            />
            {submitted && errors.time && <p className="error">{errors.time}</p>}
          </div>

          <div className="field" ref={(el) => fieldRefs.current[6] = el}>
            <textarea
              name="projectDetails"
              value={formData.projectDetails}
              onChange={handleChange}
              placeholder="Tell us about your project..."
            />
            {submitted && errors.projectDetails && (
              <p className="error">{errors.projectDetails}</p>
            )}
          </div>

          <button type="submit" disabled={loading}>
            {loading ? "Booking..." : "Confirm Booking"}
          </button>
        </form>
        <h3 className="upcoming">Upcoming Bookings</h3>
        {booking.map((b) => (
          <div key={b.id} className="booking-card">
            <p>{b.name} - {b.date} at {b.time}</p>
            <button className="cancel" onClick={() => handleCancel(b.id)}>
              Cancel Booking
            </button>
          </div>
        ))}
      </section>

    </div>
  );
}

export default Booking;