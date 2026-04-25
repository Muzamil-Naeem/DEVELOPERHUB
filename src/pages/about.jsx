import React,{useEffect, useRef} from "react";
import "../styles/about.css";
import { useNavigate } from "react-router-dom";
import {
  aboutHero,
  aboutStory,
  missionVision,
  valuesGrid,
  whyUs,
  timelineAnimation,
  aboutCTA,
} from "../animations/aboutanimation";

function About() {
  const heroTitleRef = useRef(null);
const heroTextRef = useRef(null);

const storyRef = useRef(null);
const mvRef = useRef([]);
const valuesRef = useRef([]);
const whyRef = useRef([]);
const timelineRef = useRef([]);
const ctaRef = useRef(null);
  useEffect(() => {
  aboutHero(heroTitleRef.current, heroTextRef.current);
  aboutStory(storyRef.current);
  missionVision(mvRef.current);
  valuesGrid(valuesRef.current);
  whyUs(whyRef.current);
  timelineAnimation(timelineRef.current);
  aboutCTA(ctaRef.current);
}, []);

  const navigate = useNavigate();

  return (
    <div className="about-page">

      {/* HERO */}
      <section className="about-hero">
        <h1 ref={heroTitleRef}>About Our Company</h1>
        <p ref={heroTextRef}>
          We are a modern technology agency focused on delivering innovative
          digital solutions that help businesses grow, scale, and succeed in a
          fast-changing world.
        </p>
      </section>

      {/* STORY */}
      <section className="about-story" ref={storyRef}>
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
          <div className="mv-card" ref={(el) => (mvRef.current[0] = el)}>
            <h3>🎯 Our Mission</h3>
            <p>
              To empower businesses with cutting-edge technology solutions that
              drive efficiency, innovation, and growth.
            </p>
          </div>

          <div className="mv-card" ref={(el) => (mvRef.current[1] = el)}>
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
          <div className="value-card" ref={(el) => (valuesRef.current[0] = el)}>
            <h3>Innovation</h3>
            <p>We embrace new technologies and creative thinking.</p>
          </div>

          <div className="value-card" ref={(el) => (valuesRef.current[1] = el)}>
            <h3>Quality</h3>
            <p>We deliver high-performance and reliable solutions.</p>
          </div>

          <div className="value-card" ref={(el) => (valuesRef.current[2] = el)}>
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

        <div className="why-grid" ref={(el) => (whyRef.current[0] = el)}>
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

      {/* ⭐ NEW: OUR JOURNEY TIMELINE */}
      <section className="timeline">
        <h2>Our Journey</h2>

        <div className="timeline-grid">

          <div className="timeline-item" ref={(el) => (timelineRef.current[0] = el)}>
            <h3>2023</h3>
            <p>Started as a small development team with big dreams.</p>
          </div>

          <div className="timeline-item" ref={(el) => (timelineRef.current[1] = el)}>
            <h3>2024</h3>
            <p>Delivered first 20+ successful client projects globally.</p>
          </div>

          <div className="timeline-item" ref={(el) => (timelineRef.current[2] = el)}>
            <h3>2025</h3>
            <p>Expanded into AI, automation, and cloud solutions.</p>
          </div>

          <div className="timeline-item" ref={(el) => (timelineRef.current[3] = el)}>
            <h3>2026</h3>
            <p>Now building scalable digital products for global clients.</p>
          </div>

        </div>
      </section>

      {/* CTA */}
      <section className="about-cta" ref={ctaRef}>
        <h2>Let’s Work Together</h2>
        <p>
          Have an idea or project? Let’s turn it into reality with the power of
          technology.
        </p>

        <button
          className="primary-btn"
          onClick={() => {
            window.scrollTo({ top: 0, behavior: "smooth" });
            navigate("/contact");
          }}
        >
          Contact Us
        </button>
      </section>

    </div>
  );
}

export default About;