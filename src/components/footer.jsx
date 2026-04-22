import "../styles/footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">

        <div className="footer-brand">
          <h2>Developers Hub</h2>
          <p>
            We build modern digital solutions, scalable software, and AI-powered systems
            that help businesses grow in the digital era.
          </p>
        </div>

        <div className="footer-links">
          <h3>Quick Links</h3>
          <a href="/">Home</a>
          <a href="/about">About</a>
          <a href="/services">Services</a>
          <a href="/contact">Contact</a>
        </div>

        <div className="footer-links">
          <h3>Services</h3>
          <a href="/services">Web Development</a>
          <a href="/services">AI Solutions</a>
          <a href="/services">UI/UX Design</a>
          <a href="/services">Cloud Services</a>
        </div>

        <div className="footer-contact">
          <h3>Contact</h3>
          <p>Email: info@developershub.com</p>
          <p>Phone: +92 300 0000000</p>
          <p>Location: Pakistan</p>
        </div>

      </div>

      <div className="footer-bottom">
        <p>© 2026 Developers Hub. All rights reserved.</p>
      </div>
    </footer>
  );
}