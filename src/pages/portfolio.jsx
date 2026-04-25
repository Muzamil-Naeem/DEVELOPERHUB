import React,{ useState, useEffect, useRef } from "react";
import "../styles/portfolio.css";
import { useNavigate } from "react-router-dom";

import {
  animatePortfolioHero,
  animateProjectCards,
  animateFilterBar,
  animateExpertise,
  animateImpact,
  animateProcess,
  animatePortfolioCTA
} from "../animations/portfolioanimations";

function Portfolio() {
   const navigate = useNavigate();

  const heroRef = useRef(null);
  const filterRef = useRef(null);
  const cardsRef = useRef([]);
  const expertiseRef = useRef(null);
  const impactRef = useRef(null);
  const processRef = useRef(null);
  const ctaRef = useRef(null);

  const [filter, setFilter] = useState("All");
  const [activeProject, setActiveProject] = useState(null);


  // =========================
  // MORE REALISTIC PROJECTS
  // =========================
  const projects = [
    {
      title: "AI Chatbot Platform",
      desc: "Automated support system with intelligent responses.",
      tag: "AI",
      type: "AI"
    },
    {
  title: "Freelance Management System",
  desc: "Platform to manage clients, invoices, and project tracking in one dashboard.",
  tag: "SaaS Tool",
  type: "Web"
},
    {
      title: "SaaS Analytics Dashboard",
      desc: "Real-time business insights and analytics platform.",
      tag: "Web App",
      type: "Web"
    },
    {
      title: "E-Commerce System",
      desc: "Full-stack online store with payments integration.",
      tag: "E-Commerce",
      type: "Ecommerce"
    },
    {
      title: "AI Content Generator",
      desc: "Generates blogs, ads, and marketing content instantly.",
      tag: "AI Tool",
      type: "AI"
    },
    {
      title: "Portfolio Builder App",
      desc: "Drag-and-drop portfolio creation system.",
      tag: "Web App",
      type: "Web"
    },
    {
      title: "Food Delivery App UI",
      desc: "Modern UI for food ordering and delivery system.",
      tag: "UI/UX",
      type: "Web"
    },
    {
      title: "Crypto Tracking Dashboard",
      desc: "Live crypto prices with charts and analytics.",
      tag: "Finance",
      type: "Web"
    },
    {
      title: "Job Portal System",
      desc: "Job posting and candidate application platform.",
      tag: "Web App",
      type: "Web"
    }
  ];

  // =========================
  // FILTER LOGIC
  // =========================
  const filteredProjects =
    filter === "All"
      ? projects
      : projects.filter((p) => p.type === filter);
        useEffect(() => {
    animatePortfolioHero(heroRef.current);
    animateFilterBar(filterRef.current);
    animateProjectCards(cardsRef.current);
    animateExpertise(expertiseRef.current?.children);
    animateImpact(impactRef.current?.children);
    animateProcess(processRef.current?.children);
    animatePortfolioCTA(ctaRef.current);
  }, [filter]); // 🔥 important: re-animate on filter change

  return (
    <div className="portfolio-page">

      {/* HERO */}
      <section className="portfolio-hero" ref={heroRef}>
        <h1>Our Portfolio</h1>
        <p>
          We design and develop scalable digital products, AI systems, and
          modern web applications for real-world impact.
        </p>
      </section>

      {/* FILTER BAR */}
      <section className="filter-section" ref={filterRef}>
        <div className="filter-bar">
          <button onClick={() => setFilter("All")} className={filter === "All" ? "active" : ""}>All</button>
          <button onClick={() => setFilter("AI")} className={filter === "AI" ? "active" : ""}>AI</button>
          <button onClick={() => setFilter("Web")} className={filter === "Web" ? "active" : ""}>Web</button>
          <button onClick={() => setFilter("Ecommerce")} className={filter === "Ecommerce" ? "active" : ""}>E-Commerce</button>
        </div>
      </section>

      {/* PROJECTS */}
      <section className="projects" ref={cardsRef}>
        <h2>Featured Case Studies</h2>
        <p className="subtitle">
          Real-world projects built with scalable architecture.
        </p>

        <div className="project-grid">

          {filteredProjects.map((project, index) => (
            <div
              key={index}
              className="project-card"
              ref={(el) => (cardsRef.current[index] = el)}
              onClick={() => setActiveProject(project)}
            >
              <h3>{project.title}</h3>
              <p>{project.desc}</p>

              <span className="tag">{project.tag}</span>

              <div className="card-footer">
                <button className="demo-btn">
                  View Case Study
                </button>
              </div>
            </div>
          ))}

        </div>
      </section>

      {/* MODAL */}
      {activeProject && (
        <div
          className="modal-overlay"
          onClick={() => setActiveProject(null)}
        >
          <div className="modal" onClick={(e) => e.stopPropagation()}>
            <h2>{activeProject.title}</h2>
            <p>{activeProject.desc}</p>

            <p className="tech">
              Tech Stack: React, Node.js, MongoDB, AI APIs
            </p>

            <button onClick={() => setActiveProject(null)}>
              Close
            </button>
          </div>
        </div>
      )}

      {/* EXPERTISE */}
      <section className="expertise" ref={expertiseRef}>
        <h2>Our Expertise</h2>

        <div className="expertise-grid">
          <div className="exp-card">
            <h3>💻 Web Development</h3>
            <p>Modern scalable applications.</p>
          </div>

          <div className="exp-card">
            <h3>🤖 AI Systems</h3>
            <p>Automation and intelligent tools.</p>
          </div>

          <div className="exp-card">
            <h3>📊 Data Solutions</h3>
            <p>Analytics and business intelligence.</p>
          </div>

          <div className="exp-card">
            <h3>🎨 UI/UX Design</h3>
            <p>Clean and modern interfaces.</p>
          </div>
        </div>
      </section>

      {/* IMPACT */}
      <section className="impact" ref={impactRef}>
        <h2>Business Impact</h2>

        <div className="impact-grid">
          <div>
            <h3>🚀 Efficiency</h3>
            <p>Automation reduces manual work.</p>
          </div>

          <div>
            <h3>📊 Decisions</h3>
            <p>Data-driven insights improve growth.</p>
          </div>

          <div>
            <h3>🌍 Scale</h3>
            <p>Built for global reach.</p>
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="process" ref={processRef}>
        <h2>From Idea to Product</h2>

        <div className="process-grid">
          <div>1. Research</div>
          <div>2. Design</div>
          <div>3. Development</div>
          <div>4. Launch</div>
        </div>
      </section>

      {/* CTA */}
      <section className="portfolio-cta" ref={ctaRef}>
        <h2>Let’s Build Something Powerful</h2>
        <p>Turn your idea into a real-world digital product.</p>

        <button
          onClick={() => {
            window.scrollTo({ top: 0, behavior: "smooth" });
            navigate("/contact");
          }}
        >
          Start a Project
        </button>
      </section>

    </div>
  );
}

export default Portfolio;