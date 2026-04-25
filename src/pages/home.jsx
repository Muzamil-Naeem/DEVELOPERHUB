import React, { useState, useEffect, useRef } from "react";
import "../styles/home.css";
import { useNavigate } from "react-router-dom";
import emailjs from "@emailjs/browser";
import Swal from "sweetalert2";
import {
  homeHero,
  sectionTitle,
  cardsStagger,
  parallax,
  ctaBlock,
  contactForm,
  formFields
} from "../animations/gsapanimations";

function Home() {
  const heroTitleRef = useRef();
const heroTextRef = useRef();
const heroBtnRef = useRef();

const valueRef = useRef();
const statsRef = useRef();
const servicesRef = useRef();
const processRef = useRef();
const portfolioRef = useRef();

const ctaRef = useRef();

const contactSectionRef = useRef();
const formRef = useRef();
useEffect(() => {
  homeHero(heroTitleRef.current, heroTextRef.current, heroBtnRef.current);
  sectionTitle(valueRef.current);
  cardsStagger(servicesRef.current);
  cardsStagger(statsRef.current);
  cardsStagger(processRef.current);
  cardsStagger(portfolioRef.current);

  ctaBlock(ctaRef.current);

  contactForm(contactSectionRef.current);
  formFields(formRef.current);
}, []);
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));

    setErrors((prev) => ({
      ...prev,
      [name]: ""
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    let newErrors = {};
    if (!formData.name) newErrors.name = "Name is required.";
    if (!formData.email) newErrors.email = "Email is required.";
    if (!formData.message) newErrors.message = "Message is required.";

    if (Object.keys(newErrors).length) {
      setErrors(newErrors);
      return;
    }

    setLoading(true);

    emailjs
      .send("service_xrdejbr", "template_nyojk0h", formData, "lTrtafyF2GFkSu_vm")
      .then(() => {
        Swal.fire("Success!", "Message sent successfully!", "success");
        setFormData({ name: "", email: "", message: "" });
      })
      .catch(() => {
        Swal.fire("Error!", "Something went wrong.", "error");
      })
      .finally(() => setLoading(false));
  };

  return (
    <div className="home">

      {/* HERO */}
      <section className="hero">
        <div className="hero-content">

          <h1 ref={heroTitleRef}>
            We Build High-Performance Digital Products That Scale Your Business
          </h1>

          <p ref={heroTextRef}>
            Developers Hub is a full-service software studio helping startups
            and businesses build scalable web apps, AI systems, SaaS platforms,
            and modern digital experiences that drive real revenue growth.
          </p>

          <div className="hero-buttons" ref={heroBtnRef}>
            <button className="primary-btn" onClick={() => navigate("/booking")}>
              Start Your Project
            </button>

            <a
              href="https://github.com/Muzamil-Naeem"
              className="secondary-link-btn"
              target="_blank"
              rel="noopener noreferrer"
            >
              Explore Case Studies
            </a>
          </div>

        </div>
      </section>

      {/* VALUE SECTION */}
      <section className="value " ref={valueRef}>
        <h2>Why Businesses Choose Us</h2>
        <p className="section-subtitle">
          We don’t just build websites — we build systems that generate growth.
        </p>

        <div className="service-grid">

          <div className="card">
            <h3>Scalable Architecture</h3>
            <p>
              Every system is designed to handle growth, traffic spikes, and long-term scaling.
            </p>
          </div>

          <div className="card">
            <h3>Performance First</h3>
            <p>
              Lightning-fast applications optimized for SEO, speed, and user experience.
            </p>
          </div>

          <div className="card">
            <h3>Business Focused</h3>
            <p>
              We align technology with your business goals, not just coding requirements.
            </p>
          </div>

        </div>
      </section>

      {/* STATS */}
      <section className="stats">
        <h2>Proven Results</h2>

        <div className="stats-grid" ref={statsRef}>
          <div><h2>50+</h2><p>Projects Delivered</p></div>
          <div><h2>30+</h2><p>Happy Clients</p></div>
          <div><h2>5+</h2><p>Years Experience</p></div>
          <div><h2>99%</h2><p>Client Satisfaction</p></div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="services" >
        <h2>Our Expertise</h2>
        <p className="section-subtitle">
          End-to-end digital engineering for modern businesses.
        </p>

        <div className="service-grid" ref={servicesRef}>

          <div className="card">
            <h3>Custom Software Development</h3>
            <p>
              Full-stack web applications built with React, Node.js, MongoDB, and scalable architecture.
            </p>
          </div>

          <div className="card">
            <h3>AI & Automation Systems</h3>
            <p>
              Intelligent automation tools, chatbots, and AI-powered workflows that save time and cost.
            </p>
          </div>

          <div className="card">
            <h3>SaaS Product Development</h3>
            <p>
              Multi-user SaaS platforms with authentication, billing systems, dashboards, and APIs.
            </p>
          </div>

          <div className="card">
            <h3>UI/UX Design Systems</h3>
            <p>
              Conversion-focused design systems that improve engagement and user retention.
            </p>
          </div>

          <div className="card">
            <h3>Cloud & DevOps</h3>
            <p>
              Deployment on AWS, Vercel, Firebase with CI/CD pipelines and Docker automation.
            </p>
          </div>

          <div className="card">
            <h3>Startup Consulting</h3>
            <p>
              Technical strategy, product planning, and architecture guidance for startups.
            </p>
          </div>

        </div>
      </section>

      {/* PROCESS */}
      <section className="process">
        <h2>How We Build Products</h2>

        <div className="process-grid" ref={processRef}>

          <div className="step">
            <h3>Discovery & Strategy</h3>
            <p>
              We analyze your business model, users, and technical requirements.
            </p>
          </div>

          <div className="step">
            <h3>UI/UX Architecture</h3>
            <p>
              Wireframes and design systems focused on user behavior and conversion.
            </p>
          </div>

          <div className="step">
            <h3>Development</h3>
            <p>
              Clean, scalable code using modern frameworks and best practices.
            </p>
          </div>

          <div className="step">
            <h3>Launch & Growth</h3>
            <p>
              Deployment, optimization, and continuous improvement after launch.
            </p>
          </div>

        </div>
      </section>

      {/* PORTFOLIO */}
      <section className="portfolio">
        <h2>Real Projects We’ve Built</h2>

        <div className="portfolio-grid" ref={portfolioRef}>
          <div className="project">AI SaaS Dashboard</div>
          <div className="project">E-Commerce Marketplace</div>
          <div className="project">Smart Booking System</div>
          <div className="project">Fitness Tracking App</div>
          <div className="project">Portfolio Generator</div>
          <div className="project">CRM Automation Tool</div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta" ref={ctaRef}>
        <h2>Have an Idea? Let’s Turn It Into Reality</h2>
        <p>
          Book a free consultation and we’ll help you design your product roadmap.
        </p>

        <button className="primary-btn" onClick={() => navigate("/booking")}>
          Book Free Consultation
        </button>
      </section>

      {/* CONTACT */}
      <section className="contact" ref={contactSectionRef}>
        <h2>Let’s Talk</h2>

        <form onSubmit={handleSubmit} className="contact-form" ref={formRef}>

          <input name="name" placeholder="Your Name"
            value={formData.name} onChange={handleInputChange} />
          {errors.name && <p className="error-text">{errors.name}</p>}

          <input name="email" placeholder="Your Email"
            value={formData.email} onChange={handleInputChange} />
          {errors.email && <p className="error-text">{errors.email}</p>}

          <textarea name="message" placeholder="Describe your project..."
            value={formData.message} onChange={handleInputChange} />
          {errors.message && <p className="error-text">{errors.message}</p>}

          <button className="primary-btn" disabled={loading}>
            {loading ? "Sending..." : "Send Message"}
          </button>

        </form>
      </section>

    </div>
  );
}

export default Home;