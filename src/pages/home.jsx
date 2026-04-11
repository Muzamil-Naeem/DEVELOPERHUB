import React from "react";
import "../styles/home.css";

function Home() {
  return (
    <div className="home">

      {/* HERO SECTION */}
      <section className="hero">
        <div className="hero-content">
          <h1>
            Building Digital Experiences That Drive Growth
          </h1>
          <p>
            We are a full-service technology agency delivering cutting-edge
            software solutions, AI automation, and digital experiences that help
            businesses scale faster and smarter.
          </p>
          <div className="hero-buttons">
            <button className="primary-btn">Get Started</button>
            <button className="secondary-btn">View Portfolio</button>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="services">
        <h2>Our Core Services</h2>
        <p className="section-subtitle">
          End-to-end digital solutions tailored for startups, enterprises, and
          growing brands.
        </p>

        <div className="service-grid">
          <div className="card">
            <h3>Software Development</h3>
            <p>
              Custom web, mobile, and SaaS applications designed with scalability
              and performance in mind.
            </p>
          </div>

          <div className="card">
            <h3>AI Solutions & Automation</h3>
            <p>
              Automate workflows and unlock insights using advanced AI-powered
              systems and machine learning tools.
            </p>
          </div>

          <div className="card">
            <h3>AI Content Generation</h3>
            <p>
              Create high-quality content at scale using AI tools for blogs,
              marketing, and branding.
            </p>
          </div>

          <div className="card">
            <h3>Digital Marketing</h3>
            <p>
              Boost visibility, traffic, and conversions through SEO, ads, and
              strategic marketing campaigns.
            </p>
          </div>

          <div className="card">
            <h3>Post Production</h3>
            <p>
              Professional video editing, motion graphics, and content production
              for modern digital brands.
            </p>
          </div>

          <div className="card">
            <h3>Meeting Scheduler</h3>
            <p>
              Seamless booking system integration for managing client meetings
              and consultations.
            </p>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section className="about">
        <div className="about-content">
          <h2>Who We Are</h2>
          <p>
            We are a team of passionate developers, designers, and strategists
            committed to building impactful digital solutions. Our mission is to
            help businesses transform ideas into scalable products through
            innovation, creativity, and technology.
          </p>
          <p>
            With expertise across industries, we bring a results-driven approach
            to every project — ensuring performance, usability, and growth.
          </p>
        </div>
      </section>

      {/* PORTFOLIO */}
      <section className="portfolio">
        <h2>Our Work</h2>
        <p className="section-subtitle">
          A glimpse of projects we've successfully delivered.
        </p>

        <div className="portfolio-grid">
          <div className="project">SaaS Dashboard Platform</div>
          <div className="project">E-Commerce Web App</div>
          <div className="project">AI Chatbot System</div>
          <div className="project">Mobile Fitness App</div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta">
        <h2>Let’s Build Something Amazing</h2>
        <p>
          Ready to take your business to the next level? Let's collaborate and
          create impactful digital solutions.
        </p>
        <button className="primary-btn">Book a Meeting</button>
      </section>

      {/* CONTACT */}
      <section className="contact">
        <h2>Contact Us</h2>
        <p className="section-subtitle">
          Have a project in mind? Let’s talk.
        </p>

        <form className="contact-form">
          <input type="text" placeholder="Your Name" required />
          <input type="email" placeholder="Your Email" required />
          <textarea placeholder="Your Message"></textarea>
          <button type="submit" className="primary-btn">
            Send Message
          </button>
        </form>
      </section>

    </div>
  );
}

export default Home;