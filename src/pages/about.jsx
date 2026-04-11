import React from "react";
import "../styles/about.css";

function About() {
  return (
    <div className="about-page">

      {/* HERO */}
      <section className="about-hero">
        <h1>About Our Company</h1>
        <p>
          We are a modern technology agency focused on delivering innovative
          digital solutions that help businesses grow, scale, and succeed in a
          fast-changing world.
        </p>
      </section>

      {/* STORY */}
      <section className="about-story">
        <div className="container">
          <h2>Our Story</h2>
          <p>
            Founded with a vision to bridge the gap between technology and
            business, we specialize in building high-quality software solutions,
            AI-driven systems, and digital products.
          </p>
          <p>
            Our journey started with a small team of passionate developers and
            has grown into a full-service agency delivering solutions across
            industries worldwide.
          </p>
        </div>
      </section>

      {/* MISSION & VISION */}
      <section className="mission-vision">
        <div className="mv-grid">
          <div className="mv-card">
            <h3>🎯 Our Mission</h3>
            <p>
              To empower businesses with cutting-edge technology solutions that
              drive efficiency, innovation, and growth.
            </p>
          </div>

          <div className="mv-card">
            <h3>🌍 Our Vision</h3>
            <p>
              To become a global leader in digital transformation by delivering
              impactful and scalable solutions.
            </p>
          </div>
        </div>
      </section>

      {/* VALUES */}
      <section className="values">
        <h2>Our Core Values</h2>

        <div className="values-grid">
          <div className="value-card">
            <h3>Innovation</h3>
            <p>We embrace new technologies and creative thinking.</p>
          </div>

          <div className="value-card">
            <h3>Quality</h3>
            <p>We deliver high-performance and reliable solutions.</p>
          </div>

          <div className="value-card">
            <h3>Integrity</h3>
            <p>We believe in transparency and honest collaboration.</p>
          </div>

          <div className="value-card">
            <h3>Customer Success</h3>
            <p>Your success is our top priority.</p>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="why-us">
        <h2>Why Choose Us</h2>

        <div className="why-grid">
          <div>
            <h3>🚀 Expertise</h3>
            <p>Skilled team in web, mobile, AI, and digital marketing.</p>
          </div>

          <div>
            <h3>⚡ Fast Execution</h3>
            <p>Quick turnaround without compromising quality.</p>
          </div>

          <div>
            <h3>📊 Results Driven</h3>
            <p>We focus on measurable growth and performance.</p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="about-cta">
        <h2>Let’s Work Together</h2>
        <p>
          Have an idea or project? Let’s turn it into reality with the power of
          technology.
        </p>
        <button className="primary-btn">Contact Us</button>
      </section>

    </div>
  );
}

export default About;