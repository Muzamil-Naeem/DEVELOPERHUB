import React from "react";
import "../styles/blog.css";

function Blog() {
  return (
    <div className="blog-page">

      {/* HERO */}
      <section className="blog-hero">
        <h1>Insights & Knowledge Hub</h1>
        <p>
          Explore expert insights on AI, software development, automation, and
          digital transformation. Our blog is designed to help businesses
          understand modern technology and grow in the digital era.
        </p>
      </section>

      {/* ABOUT BLOG PURPOSE */}
      <section className="blog-intro">
        <h2>Why This Blog Exists</h2>
        <p>
          This blog is part of our digital agency platform where we share real
          industry knowledge, technical insights, and business growth strategies.
          Our goal is to educate startups, entrepreneurs, and companies on how
          modern technology can improve efficiency, scalability, and innovation.
        </p>
      </section>

      {/* FEATURED ARTICLE */}
      <section className="featured">
        <h2>Featured Article</h2>

        <div className="featured-card">
          <span className="tag">AI & Business</span>
          <h3>How AI is Transforming Modern Businesses</h3>
          <p>
            Artificial Intelligence is reshaping industries by automating tasks,
            improving decision-making, and enabling smarter workflows. Businesses
            using AI gain a strong competitive advantage through efficiency,
            personalization, and predictive capabilities.
          </p>
          <p>
            From chatbots to data analytics and automation systems, AI is now
            essential for companies aiming to scale and innovate in today’s fast
            digital economy.
          </p>
          <button>Read Full Article</button>
        </div>
      </section>

      {/* BLOG GRID */}
      <section className="blogs">
        <h2>Latest Insights</h2>
        <p className="subtitle">
          Explore topics that shape modern digital businesses and technology trends.
        </p>

        <div className="blog-grid">

          <div className="blog-card">
            <span className="tag">Web Development</span>
            <h3>Modern Web Development Trends</h3>
            <p>
              Learn how frameworks like React and modern architectures are
              building fast, scalable, and secure applications.
            </p>
          </div>

          <div className="blog-card">
            <span className="tag">UI/UX Design</span>
            <h3>Why User Experience Drives Business Growth</h3>
            <p>
              A well-designed interface improves engagement, trust, and customer
              satisfaction, directly impacting business success.
            </p>
          </div>

          <div className="blog-card">
            <span className="tag">Business Growth</span>
            <h3>How Digital Agencies Scale Startups</h3>
            <p>
              Digital transformation helps startups grow faster using automation,
              branding, and scalable technology solutions.
            </p>
          </div>

          <div className="blog-card">
            <span className="tag">AI Tools</span>
            <h3>Top AI Tools for Productivity</h3>
            <p>
              AI tools are improving workflows by automating repetitive tasks
              and increasing efficiency across industries.
            </p>
          </div>

        </div>
      </section>

      {/* PURPOSE / VALUE SECTION */}
      <section className="value-section">
        <h2>What You Learn From Our Platform</h2>

        <div className="value-grid">
          <div>
            <h3>🚀 Technology Awareness</h3>
            <p>
              Understand modern tools, frameworks, and technologies used in real
              industry applications.
            </p>
          </div>

          <div>
            <h3>📊 Business Strategy</h3>
            <p>
              Learn how technology improves business performance and customer
              engagement.
            </p>
          </div>

          <div>
            <h3>🤖 AI Knowledge</h3>
            <p>
              Explore how AI is reshaping automation, analytics, and decision-making.
            </p>
          </div>
        </div>
      </section>

      {/* IMPACT */}
      <section className="impact">
        <h2>How This Project Helps Businesses</h2>

        <div className="impact-grid">
          <div>
            <h3>⚡ Faster Growth</h3>
            <p>Businesses adopt modern tools to scale quickly and efficiently.</p>
          </div>

          <div>
            <h3>📈 Better Decisions</h3>
            <p>Data-driven insights help improve strategy and performance.</p>
          </div>

          <div>
            <h3>🌍 Digital Transformation</h3>
            <p>Companies move from traditional systems to modern digital platforms.</p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="blog-cta">
        <h2>Want to Build Something Like This?</h2>
        <p>
          Let’s collaborate and create powerful digital solutions for your business.
        </p>
        <button>Contact Us</button>
      </section>

    </div>
  );
}

export default Blog;