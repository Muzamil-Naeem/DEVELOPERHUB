import React from "react";
import "../styles/portfolio.css";

function Portfolio() {
  return (
    <div className="portfolio-page">

      {/* HERO */}
      <section className="portfolio-hero">
        <h1>Our Portfolio</h1>
        <p>
          Our work reflects a blend of innovation, technology, and strategy.
          We build scalable digital solutions that help businesses grow,
          automate processes, and deliver exceptional user experiences.
        </p>
      </section>

      {/* PROJECTS */}
      <section className="projects">
        <h2>Featured Work</h2>
        <p className="subtitle">
          A selection of impactful solutions we’ve delivered across industries.
        </p>

        <div className="project-grid">

          <div className="project-card">
            <h3>AI Chatbot Platform</h3>
            <p>Automated customer support system with intelligent responses.</p>
            <span className="tag">AI Solution</span>
          </div>

          <div className="project-card">
            <h3>SaaS Analytics Dashboard</h3>
            <p>Real-time data visualization and business insights platform.</p>
            <span className="tag">Web App</span>
          </div>

          <div className="project-card">
            <h3>E-Commerce System</h3>
            <p>Complete online store with payments and product management.</p>
            <span className="tag">E-Commerce</span>
          </div>

          <div className="project-card">
            <h3>AI Content Generator</h3>
            <p>Tool to generate blogs, ads, and marketing content instantly.</p>
            <span className="tag">AI Tool</span>
          </div>

        </div>
      </section>

      {/* EXPERTISE */}
      <section className="expertise">
        <h2>Our Expertise</h2>

        <div className="expertise-grid">
          <div className="exp-card">
            <h3>💻 Software Development</h3>
            <p>Scalable web, mobile, and SaaS applications.</p>
          </div>

          <div className="exp-card">
            <h3>🤖 AI & Automation</h3>
            <p>Smart systems to automate workflows and decision-making.</p>
          </div>

          <div className="exp-card">
            <h3>📈 Digital Growth</h3>
            <p>Marketing strategies that increase traffic and conversions.</p>
          </div>

          <div className="exp-card">
            <h3>🎨 UI/UX Design</h3>
            <p>Modern, user-friendly, and engaging digital experiences.</p>
          </div>
        </div>
      </section>

      {/* ACHIEVEMENTS */}
      <section className="achievements">
        <h2>Our Achievements</h2>

        <div className="achieve-grid">
          <div>
            <h3>50+</h3>
            <p>Projects Delivered</p>
          </div>

          <div>
            <h3>30+</h3>
            <p>Happy Clients</p>
          </div>

          <div>
            <h3>10+</h3>
            <p>Industries Served</p>
          </div>

          <div>
            <h3>100%</h3>
            <p>Client Satisfaction</p>
          </div>
        </div>
      </section>

      {/* IMPACT */}
      <section className="impact">
        <h2>How We Help Businesses Grow</h2>

        <div className="impact-grid">
          <div>
            <h3>🚀 Increase Efficiency</h3>
            <p>Automation reduces manual work and saves time.</p>
          </div>

          <div>
            <h3>📊 Better Decisions</h3>
            <p>Data-driven insights improve business strategies.</p>
          </div>

          <div>
            <h3>🌍 Expand Reach</h3>
            <p>Digital platforms help businesses reach global audiences.</p>
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="process">
        <h2>From Idea to Launch</h2>

        <div className="process-grid">
          <div>1. Research & Planning</div>
          <div>2. Design & Prototyping</div>
          <div>3. Development</div>
          <div>4. Testing & Launch</div>
        </div>
      </section>

      {/* CTA */}
      <section className="portfolio-cta">
        <h2>Let’s Build Your Next Project</h2>
        <p>
          Partner with us to create innovative, scalable, and impactful
          digital solutions.
        </p>
        <button className="primary-btn">Start a Project</button>
      </section>

    </div>
  );
}

export default Portfolio;