import React from "react";
import "../styles/services.css";

function Services() {
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
              using React and latest frontend technologies. Our websites are
              optimized for speed, scalability, and user experience.
            </p>
          </div>

          <div className="service-card">
            <h3>📱 Mobile App Development</h3>
            <p>
              We develop cross-platform mobile applications that run smoothly on
              both Android and iOS with clean UI and strong backend integration.
            </p>
          </div>

          <div className="service-card">
            <h3>🤖 AI & Automation Solutions</h3>
            <p>
              We create intelligent systems like AI chatbots, automation tools,
              and smart workflows to reduce manual work and improve business
              efficiency.
            </p>
          </div>

          <div className="service-card">
            <h3>📈 Digital Marketing</h3>
            <p>
              We help businesses grow online through SEO, social media marketing,
              paid ads, and conversion-focused strategies that increase reach and
              engagement.
            </p>
          </div>

          <div className="service-card">
            <h3>🎨 UI/UX Design</h3>
            <p>
              We design modern, user-friendly interfaces that improve usability,
              engagement, and customer satisfaction through clean and intuitive
              design systems.
            </p>
          </div>

          <div className="service-card">
            <h3>⚙️ Backend & API Development</h3>
            <p>
              We build secure and scalable backend systems, REST APIs, and
              database architectures that power modern web and mobile
              applications.
            </p>
          </div>

        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="why-section">
        <h2>Why Choose Us</h2>

        <div className="why-grid">

          <div>
            <h3>🚀 Fast Delivery</h3>
            <p>We deliver projects on time with high-quality standards.</p>
          </div>

          <div>
            <h3>💡 Modern Technology</h3>
            <p>We use latest tools and frameworks for scalable solutions.</p>
          </div>

          <div>
            <h3>📊 Business Focused</h3>
            <p>Every solution is designed to improve business growth.</p>
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
        <button>Contact Us</button>
      </section>

    </div>
  );
}

export default Services;