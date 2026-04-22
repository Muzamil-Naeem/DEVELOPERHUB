import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/blog.css";

function Blog() {
  const navigate = useNavigate();

  const blogs = [
    {
      id: "ai-business",
      title: "How AI is Transforming Modern Businesses",
      category: "AI",
      read: "5 min read",
      desc: "AI is reshaping industries through automation and smart systems."
    },
    {
      id: "web-trends",
      title: "Modern Web Development Trends",
      category: "Web",
      read: "4 min read",
      desc: "React, APIs, and modern architectures are changing web development."
    },
    {
      id: "ux-growth",
      title: "Why UX Drives Business Growth",
      category: "Business",
      read: "6 min read",
      desc: "Better UI leads to higher engagement and conversions."
    },
    {
      id: "ai-tools",
      title: "AI Tools That Boost Productivity",
      category: "AI",
      read: "3 min read",
      desc: "AI tools automate tasks and improve efficiency."
    }
  ];

  return (
    <div className="blog-page">

      {/* HERO */}
      <section className="blog-hero">
        <h1>Insights & Knowledge Hub</h1>
        <p>Learn modern tech, AI, and development practices.</p>
      </section>

      {/* BLOG GRID */}
      <section className="blogs">
        <h2>Latest Articles</h2>

        <div className="blog-grid">

          {blogs.map((blog) => (
            <div
              key={blog.id}
              className="blog-card"
              onClick={() => navigate(`/blog/${blog.id}`)}
            >
              <span className="tag">{blog.category}</span>
              <h3>{blog.title}</h3>
              <p>{blog.desc}</p>

              <div className="meta">
                <span>{blog.read}</span>
              </div>

              <button className="read-btn">
                Read More →
              </button>
            </div>
          ))}

        </div>
      </section>

    </div>
  );
}

export default Blog;