import React from "react";
import "../styles/contact.css";

function Contact() {
  return (
    <div className="contact-page">

      {/* HERO */}
      <section className="contact-hero">
        <h1>Get In Touch</h1>
        <p>
          Have a project in mind?
           Let’s collaborate and build something amazing
          together. 
          We’re here to help you turn your ideas into reality.
        </p>
      </section>

      {/* CONTACT INFO */}
      <section className="contact-info">
        <h2>Contact Information</h2>

        <div className="info-grid">
          <div className="info-card">
            <h3>📍 Location</h3>
            <p>Remote / Global Services</p>
          </div>

          <div className="info-card">
            <h3>📧 Email</h3>
            <p>support@youragency.com</p>
          </div>

          <div className="info-card">
            <h3>📞 Phone</h3>
            <p>+92 300 0000000</p>
          </div>
        </div>
      </section>

      {/* CONTACT FORM */}
      <section className="contact-form-section">
        <h2>Send Us a Message</h2>

        <form className="contact-form">
          <input type="text" placeholder="Your Name" required />
          <input type="email" placeholder="Your Email" required />
          <input type="text" placeholder="Subject" />
          <textarea placeholder="Your Message"></textarea>

          <button type="submit">Send Message</button>
        </form>
      </section>

    </div>
  );
}

export default Contact;