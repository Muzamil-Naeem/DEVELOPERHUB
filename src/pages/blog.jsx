import React, { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/blog.css";
import {
  animateBlogHero,
  animateBlogCards,
  animateBlogTitle
} from "../animations/bloganimations";

function Blog() {
  const navigate = useNavigate();

  const heroRef = useRef(null);
  const titleRef = useRef(null);
  const cardsRef = useRef([]);

  useEffect(() => {
    cardsRef.current = cardsRef.current.slice(0);
    animateBlogHero(heroRef.current);
    animateBlogTitle(titleRef.current);
    animateBlogCards(cardsRef.current);
  }, []);

  const blogs = [
    { id: "ai-business", title: "How AI is Transforming Modern Businesses", category: "AI", read: "5 min read", desc: "AI is reshaping industries through automation and smart systems." },
    { id: "web-trends", title: "Modern Web Development Trends", category: "Web", read: "4 min read", desc: "React, APIs, and modern architectures are changing web development." },
    { id: "ux-growth", title: "Why UX Drives Business Growth", category: "Business", read: "6 min read", desc: "Better UI leads to higher engagement and conversions." },
    { id: "ai-tools", title: "AI Tools That Boost Productivity", category: "AI", read: "3 min read", desc: "AI tools automate tasks and improve efficiency." }
  ];

  return (
    <div className="blog-page">

      <section className="blog-hero" ref={heroRef}>
        <h1>Insights & Knowledge Hub</h1>
        <p>Learn modern tech, AI, and development practices.</p>
      </section>
      
      <section className="blogs">
        <h2 ref={titleRef}>Latest Articles</h2>

        <div className="blog-grid">
          {blogs.map((blog, index) => (
            <article
              key={blog.id}
              className="blog-card"
              ref={(el) => (cardsRef.current[index] = el)} 
              onClick={() => navigate(`/blog/${blog.id}`)}
            >
              <span className="tag">{blog.category}</span>

              <h3>{blog.title}</h3>
              <p>{blog.desc}</p>

              <div className="meta">
                <span>{blog.read}</span>
              </div>

              <button
                className="read-btn"
                onClick={(e) => {
                  e.stopPropagation();
                  navigate(`/blog/${blog.id}`);
                }}
              >
                Read More →
              </button>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Blog;