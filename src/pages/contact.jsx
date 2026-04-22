import React, { useState } from "react";
import "../styles/contact.css";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Swal from "sweetalert2";

function Contact() {
  const [loading, setLoading] = useState(false);
  const [cooldown, setCooldown] = useState(false);
  const [errors, setErrors] = useState({});

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  function handleChange(e) {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });

    setErrors((prev) => ({
      ...prev,
      [e.target.name]: ""
    }));
  }

  function validate() {
    let newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required.";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required.";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Enter a valid email address.";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required.";
    } else if (formData.message.length < 10) {
      newErrors.message = "Message must be at least 10 characters.";
    }

    return newErrors;
  }

  function handleSubmit(e) {
    e.preventDefault();

    if (cooldown) {
      toast.error("Please wait before sending another message.");
      return;
    }

    const newErrors = validate();

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      const firstError = Object.keys(newErrors)[0];
      const el = document.querySelector(`[name="${firstError}"]`);
      if (el) el.focus();
      return;
    }

    setErrors({});
    setLoading(true);

    emailjs
      .send(
        "service_xrdejbr",
        "template_nyojk0h",
        formData,
        "lTrtafyF2GFkSu_vm"
      )
      .then(() => {
        Swal.fire({
          title: "Message Sent 🚀",
          text: "We usually reply within 24 hours.",
          icon: "success"
        });

        setFormData({
          name: "",
          email: "",
          subject: "",
          message: ""
        });

        setCooldown(true);
        setTimeout(() => setCooldown(false), 5000);
      })
      .catch(() => {
        toast.error("Something went wrong. Try again later.");
      })
      .finally(() => {
        setLoading(false);
      });
  }

  return (
    <div className="contact-page">
      <ToastContainer />

      {/* ================= HERO ================= */}
      <section className="contact-hero">
        <h1>Let’s Build Something Great Together</h1>

        <p>
          Whether you have a project idea, a collaboration request, or just want
          to say hello — we’re here to listen and respond quickly.
        </p>

        <div className="hero-tags">
          <span>⚡ Fast Response</span>
          <span>🤝 Collaboration Friendly</span>
          <span>🚀 Startup Ready Solutions</span>
        </div>
      </section>

      {/* ================= TRUST / INFO ================= */}
      <section className="contact-info">
        <h2>Why Contact Us?</h2>

        <div className="info-grid">
          <div className="info-card">
            <h3>🚀 Project Support</h3>
            <p>We help turn your ideas into real working products.</p>
          </div>

          <div className="info-card">
            <h3>💡 Technical Guidance</h3>
            <p>Get help with frontend, backend, or full-stack issues.</p>
          </div>

          <div className="info-card">
            <h3>🤝 Collaboration</h3>
            <p>We love working with developers & startups worldwide.</p>
          </div>
        </div>
      </section>

      {/* ================= FORM ================= */}
      <section className="contact-form-section">
        <h2>Send Us a Message</h2>

        <form className="contact-form" onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Your Name"
            className={errors.name ? "error-input" : ""}
          />
          {errors.name && <p className="error-text">{errors.name}</p>}

          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Your Email"
            className={errors.email ? "error-input" : ""}
          />
          {errors.email && <p className="error-text">{errors.email}</p>}

          <input
            type="text"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            placeholder="Subject (optional)"
          />

          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Tell us about your project..."
            maxLength={500}
            className={errors.message ? "error-input" : ""}
          />

          <p style={{ fontSize: "12px", textAlign: "right" }}>
            {formData.message.length}/500
          </p>

          {errors.message && <p className="error-text">{errors.message}</p>}

          <button
            className="primary-btn"
            disabled={loading || cooldown}
          >
            {loading ? <span className="loader"></span> : "Send Message"}
          </button>
        </form>
      </section>

      {/* ================= FAQ (VERY IMPORTANT FOR PROFESSIONAL LOOK) ================= */}
      <section className="contact-faq">
        <h2>Frequently Asked Questions</h2>

        <div className="faq-item">
          <h4>How fast do you respond?</h4>
          <p>Usually within 24 hours or less.</p>
        </div>

        <div className="faq-item">
          <h4>Do you accept freelance work?</h4>
          <p>Yes, we are open to collaboration and freelance projects.</p>
        </div>

        <div className="faq-item">
          <h4>Can I discuss ideas before starting?</h4>
          <p>Of course — we encourage idea discussions first.</p>
        </div>
      </section>
    </div>
  );
}

export default Contact;