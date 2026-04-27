import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import "../styles/blogdetails.css";

function BlogDetail() {
  const { id } = useParams();
  const navigate = useNavigate();

  const blogs = {
    "ai-business": {
      title: "How AI is Transforming Modern Businesses",
      category: "AI",
      read: "5 min read",
      content: `
Artificial Intelligence is no longer just a trend — it is becoming the foundation of modern business systems.

Companies are using AI to:
- Automate repetitive tasks
- Improve decision-making
- Predict customer behavior
- Increase operational efficiency

From chatbots to recommendation engines, AI is helping businesses scale faster while reducing costs.
      `
      },

    "web-trends": {
      title: "Modern Web Development Trends",
      category: "Web",
      read: "4 min read",
      content: `
Modern web development is focused on performance, scalability, and user experience.

Key trends include:
- Component-based architecture (React)
- API-first development
- Server-side rendering
- Cloud deployment systems

These technologies help developers build faster and more scalable applications.
      `
    },

    "ux-growth": {
      title: "Why UX Drives Business Growth",
      category: "Business",
      read: "6 min read",
      content: `
User experience is now a core business strategy.

A good UI/UX:
- Increases user engagement
- Builds trust
- Improves conversion rates

Even small improvements in design can significantly impact business revenue.
      `
    },

    "ai-tools": {
      title: "AI Tools That Boost Productivity",
      category: "AI",
      read: "3 min read",
      content: `
AI tools are transforming the way developers and businesses work.

They help in:
- Writing code faster
- Automating workflows
- Generating content
- Reducing manual effort

This leads to higher productivity and better efficiency.
      `
    }
  };

  const blog = blogs[id];

  if (!blog) {
    return (
      <div className="blog-page">
        <div className="not-found">
          <h2>404 - Blog Not Found</h2>
          <p>The article you are looking for does not exist.</p>

          <button onClick={() => navigate("/blog")}>
            ← Back to Blogs
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="blog-page">

      {/* HEADER */}
      <section className="blog-hero">
        <div className="blog-top-bar">
          <button
            className="back-btn"
            onClick={() => navigate("/blog")}
          >
            ← Back
          </button>

          <span className="tag">{blog.category}</span>
        </div>

        <h1>{blog.title}</h1>

        <div className="meta">
          <span>📅 2026</span>
          <span>⏱ {blog.read}</span>
        </div>
      </section>

      {/* CONTENT */}
      <section className="blog-content">
        <pre className="text">{blog.content}</pre>
      </section>

    </div>
  );
}

export default BlogDetail;