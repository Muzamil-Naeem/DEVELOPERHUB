import React from "react";
import "../styles/home.css";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Swal from 'sweetalert2'

function Home() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [errors,setErrors] = useState({});
const [formData, setFormData] = useState({
  name: "",
  email: "",
  message: ""
});
const handleInputChange = (e) => {
  const { name, value } = e.target;
  setFormData((prevData) => ({
    ...prevData,
    [name]: value
  }));
  setErrors((prev)=>({
    ...prev,
    [name]: ""
  }))
};
function handleSubmit(e) {
  e.preventDefault();
  let newErrors = {};
  if(!formData.name) newErrors.name = "Name is required.";
  if(!formData.email) newErrors.email = "Email is required.";
  if(!formData.message) newErrors.message = "Message is required.";

    if(Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;    }
    setErrors({});
    setLoading(true);
     emailjs.send("service_xrdejbr", "template_nyojk0h", formData, "lTrtafyF2GFkSu_vm")
     .then((res)=>{
      console.log("SUCCESS!", res.status, res.text);
      Swal.fire({
  title: "Success!",
  text: "Your message has been sent successfully!",
  icon: "success"
});
      setFormData({
        name: "",
        email: "",
        message: ""
      });
     },(err)=>{
      console.log("FAILED...", err);
      toast.error("Failed to send message. Please try again later.");
     })
     .finally(()=>{
      setLoading(false);
     }
    )

}
return (
  <div className="home">

      {/* HERO */}
      <section className="hero">
        <div className="hero-content">
          <h1>Building Digital Experiences That Drive Growth</h1>
          <p>
            We deliver powerful software solutions, AI automation, and digital
            products that help businesses grow faster, smarter, and more efficiently.
          </p>
          <div className="hero-buttons">
            <button className="primary-btn">Get Started</button>
            <button className="secondary-btn">View Portfolio</button>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="stats">
        <div className="stats-grid">
          <div>
            <h2>50+</h2>
            <p>Projects Completed</p>
          </div>
          <div>
            <h2>30+</h2>
            <p>Happy Clients</p>
          </div>
          <div>
            <h2>5+</h2>
            <p>Years Experience</p>
          </div>
          <div>
            <h2>10+</h2>
            <p>Technologies Used</p>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="services">
        <h2>Our Core Services</h2>
        <p className="section-subtitle">
          End-to-end solutions tailored for modern businesses.
        </p>

        <div className="service-grid">
          <div className="card">
            <h3>Software Development</h3>
            <p>Scalable web & mobile applications.</p>
          </div>

          <div className="card">
            <h3>AI Automation</h3>
            <p>Automate business workflows using AI.</p>
          </div>

          <div className="card">
            <h3>Digital Marketing</h3>
            <p>SEO, ads, and growth strategies.</p>
          </div>

          <div className="card">
            <h3>UI/UX Design</h3>
            <p>Modern and user-friendly interfaces.</p>
          </div>

          <div className="card">
            <h3>Cloud Solutions</h3>
            <p>Deploy and scale apps on cloud.</p>
          </div>

          <div className="card">
            <h3>Consulting</h3>
            <p>Technical guidance for startups.</p>
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="process">
        <h2>How We Work</h2>
        <div className="process-grid">
          <div className="step">
            <h3>1. Planning</h3>
            <p>We understand your goals and create a roadmap.</p>
          </div>
          <div className="step">
            <h3>2. Design</h3>
            <p>We design intuitive and engaging interfaces.</p>
          </div>
          <div className="step">
            <h3>3. Development</h3>
            <p>We build scalable and high-performance solutions.</p>
          </div>
          <div className="step">
            <h3>4. Launch</h3>
            <p>We deploy and optimize your product.</p>
          </div>
        </div>
      </section>

      {/* PORTFOLIO */}
      <section className="portfolio">
        <h2>Our Work</h2>
        <div className="portfolio-grid">
          <div className="project">SaaS Dashboard Platform</div>
          <div className="project">E-Commerce App</div>
          <div className="project">AI Chatbot</div>
          <div className="project">Fitness Mobile App</div>
          <div className="project">Booking System</div>
          <div className="project">Portfolio Website</div>
        </div>
      </section>

      {/* TECHNOLOGIES */}
      <section className="tech">
        <h2>Technologies We Use</h2>
        <div className="tech-list">
          <span>React</span>
          <span>Node.js</span>
          <span>MongoDB</span>
          <span>Python</span>
          <span>AI Tools</span>
          <span>Firebase</span>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="testimonials">
        <h2>What Clients Say</h2>
        <div className="testimonial-grid">
          <div className="testimonial">
            <p>"Amazing work! Highly professional team."</p>
            <h4>- Client A</h4>
          </div>
          <div className="testimonial">
            <p>"They transformed our business digitally."</p>
            <h4>- Client B</h4>
          </div>
          <div className="testimonial">
            <p>"Top-notch service and support."</p>
            <h4>- Client C</h4>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="faq">
        <h2>Frequently Asked Questions</h2>

        <div className="faq-item">
          <h4>How long does a project take?</h4>
          <p>It depends on complexity, usually 2–6 weeks.</p>
        </div>

        <div className="faq-item">
          <h4>Do you offer support?</h4>
          <p>Yes, we provide ongoing maintenance and support.</p>
        </div>

        <div className="faq-item">
          <h4>What technologies do you use?</h4>
          <p>We use modern stacks like React, Node, and AI tools.</p>
        </div>
      </section>

      {/* CTA */}
      <section className="cta">
        <h2>Let’s Build Something Amazing</h2>
        <p>Ready to grow your business? Let’s collaborate.</p>
        <button
          className="primary-btn"
          onClick={() => {
            window.scrollTo({ top: 0, behavior: "smooth" });
            navigate("/booking");
          }}
        >
          Book a Meeting
        </button>
      </section>

      {/* CONTACT */}
      <section className="contact">
        <h2>Contact Us</h2>
        <form onSubmit={handleSubmit} className="contact-form">
          <input type="text" name="name" value={formData.name} onChange={handleInputChange} placeholder="Your Name"/>
          {errors.name && <p className="error-text" style={{ color: "red" }}>{errors.name}</p>}
          <input type="email" name="email" value={formData.email} onChange={handleInputChange} placeholder="Your Email"  />
          {errors.email && <p className="error-text" style={{ color: "red" }}>{errors.email}</p>}
          <textarea name="message" value={formData.message} onChange={handleInputChange} placeholder="Your Message"></textarea>
          {errors.message && <p className="error-text" style={{ color: "red" }}>{errors.message}</p>}
          
          <button className="primary-btn" disabled={loading}>
  {loading ? (
    <span className="loader"></span>
  ) : (
    "Send Message"
  )}
</button>
        </form>
      </section>

    </div>
  );
}

export default Home;