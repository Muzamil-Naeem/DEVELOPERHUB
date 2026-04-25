import React, { useEffect, useRef } from "react";
import "../styles/services.css";
import { useNavigate } from "react-router-dom";

import {
  animateServicesHero,
  animateServiceCards,
  animateWhyCards,
  animateProcess,
  animateCTA,
} from "../animations/servicesanimations";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function Services() {
  const navigate = useNavigate();

  /* =========================
     REFS (CLEAN + STABLE)
  ========================= */
  const heroRef = useRef(null);
  const servicesRef = useRef(null);
  const whyRef = useRef(null);
  const processRef = useRef(null);
  const ctaRef = useRef(null);

  /* =========================
     GSAP INIT (FIXED)
  ========================= */
  useEffect(() => {
    // HERO
    animateServicesHero(heroRef.current);

    // SECTIONS
    animateServiceCards(servicesRef.current);
    animateWhyCards(whyRef.current);
    animateProcess(processRef.current);
    animateCTA(ctaRef.current);

    // FORCE REFRESH (IMPORTANT)
    const timer = setTimeout(() => {
      ScrollTrigger.refresh();
    }, 300);

    // CLEANUP (VERY IMPORTANT)
    return () => {
      clearTimeout(timer);
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  const handleContact = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    navigate("/contact");
  };

  return (
    <div className="services-page">

      {/* =========================
          HERO
      ========================= */}
      <section className="services-hero" ref={heroRef}>
        <h1>Our Services</h1>
        <p>
          We provide end-to-end digital solutions that help businesses grow,
          automate operations, and build scalable modern products.
        </p>
      </section>

      {/* =========================
          SERVICES
      ========================= */}
      <section className="services-grid-section">
        <h2>What We Offer</h2>

        <div className="services-grid" ref={servicesRef}>
          <div className="service-card">
            <h3>💻 Web Development</h3>
            <p>Modern responsive web apps using React.</p>
          </div>

          <div className="service-card">
            <h3>📱 Mobile App Development</h3>
            <p>Cross-platform mobile apps.</p>
          </div>

          <div className="service-card">
            <h3>🤖 AI & Automation</h3>
            <p>Smart AI systems and workflows.</p>
          </div>

          <div className="service-card">
            <h3>📈 Digital Marketing</h3>
            <p>SEO and growth strategies.</p>
          </div>

          <div className="service-card">
            <h3>🎨 UI/UX Design</h3>
            <p>Clean modern interfaces.</p>
          </div>

          <div className="service-card">
            <h3>⚙️ Backend Development</h3>
            <p>Scalable APIs and systems.</p>
          </div>
        </div>
      </section>

      {/* =========================
          WHY CHOOSE US
      ========================= */}
      <section className="why-section">
        <h2>Why Choose Us</h2>

        <div className="why-grid" ref={whyRef}>
          <div className="why-card">
            <h3>🚀 Fast Delivery</h3>
            <p>We deliver on time with quality.</p>
          </div>

          <div className="why-card">
            <h3>💡 Modern Tech</h3>
            <p>Latest tools and frameworks.</p>
          </div>

          <div className="why-card">
            <h3>📊 Business Focus</h3>
            <p>We build for real growth.</p>
          </div>
        </div>
      </section>

      {/* =========================
          PROCESS
      ========================= */}
      <section className="process" ref={processRef}>
        <h2>How We Work</h2>

        <div className="process-grid">
          <div>1. Requirement Analysis</div>
          <div>2. Design & Planning</div>
          <div>3. Development</div>
          <div>4. Testing & Deployment</div>
        </div>
      </section>

      {/* =========================
          CTA
      ========================= */}
      <section className="services-cta" ref={ctaRef}>
        <h2>Let’s Build Something Powerful</h2>
        <p>Turn your ideas into scalable digital solutions.</p>

        <button onClick={handleContact}>
          Contact Us
        </button>
      </section>

    </div>
  );
}

export default Services;