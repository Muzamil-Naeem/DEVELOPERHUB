import React, { useEffect } from "react";
import "../styles/services.css";
import { useNavigate } from "react-router-dom";

function Services() {
  const navigate = useNavigate();

  useEffect(() => {
    console.log("Services page loaded");
  }, []);

  const handleContact = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    navigate("/contact");
  };

  return (
    <div className="services-page">

      {/* HERO */}
      <section className="services-hero">
        <h1>Our Services</h1>
        <p>
          We provide end-to-end digital solutions that help businesses grow,
          automate operations, and build scalable modern products using
          cutting-edge technologies like AI, web development, and cloud systems.
        </p>
      </section>

      {/* SERVICES GRID */}
      <section className="services-grid-section">
        <h2>What We Offer</h2>

        <div className="services-grid">

          <div className="service-card">
            <h3>💻 Web Development</h3>
            <p>
              We build modern, responsive, and high-performance web applications
              using React and latest frontend technologies. Optimized for speed,
              scalability, and user experience.
            </p>
          </div>

          <div className="service-card">
            <h3>📱 Mobile App Development</h3>
            <p>
              Cross-platform mobile applications for Android and iOS with clean UI,
              smooth performance, and strong backend integration.
            </p>
          </div>

          <div className="service-card">
            <h3>🤖 AI & Automation Solutions</h3>
            <p>
              Intelligent systems like AI chatbots, automation tools, and smart workflows
              that reduce manual work and improve efficiency.
            </p>
          </div>

          <div className="service-card">
            <h3>📈 Digital Marketing</h3>
            <p>
              SEO, social media marketing, paid ads, and conversion strategies designed
              to grow your online presence and engagement.
            </p>
          </div>

          <div className="service-card">
            <h3>🎨 UI/UX Design</h3>
            <p>
              Modern, user-friendly interfaces focused on usability, engagement,
              and clean design systems for better user experience.
            </p>
          </div>

          <div className="service-card">
            <h3>⚙️ Backend & API Development</h3>
            <p>
              Secure and scalable backend systems, REST APIs, and database architecture
              powering modern applications.
            </p>
          </div>

        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="why-section">
        <h2>Why Choose Us</h2>

        <div className="why-grid">

          <div className="why-card">
            <h3>🚀 Fast Delivery</h3>
            <p>We deliver high-quality projects within deadlines.</p>
          </div>

          <div className="why-card">
            <h3>💡 Modern Technology</h3>
            <p>We use latest frameworks and tools for scalable solutions.</p>
          </div>

          <div className="why-card">
            <h3>📊 Business Focused</h3>
            <p>Every solution is designed to maximize business growth.</p>
          </div>

        </div>
      </section>

      {/* PROCESS */}
      <section className="process">
        <h2>How We Work</h2>

        <div className="process-grid">
          <div>1. Requirement Analysis</div>
          <div>2. Design & Planning</div>
          <div>3. Development</div>
          <div>4. Testing & Deployment</div>
        </div>
      </section>

      {/* CTA */}
      <section className="services-cta">
        <h2>Let’s Build Something Powerful</h2>
        <p>
          Partner with us to turn your ideas into scalable digital solutions
          that grow your business.
        </p>

        <button onClick={handleContact}>
          Contact Us
        </button>
      </section>

    </div>
  );
}

export default Services;