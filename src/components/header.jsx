import { Link } from "react-router-dom";
import "../styles/header.css";
import { useState } from "react";

export default function Header() {
  const [servicesOpen, setServicesOpen] = useState(false);
  const [moreOpen, setMoreOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleServices = () => {
    setServicesOpen(!servicesOpen);
    setMoreOpen(false);
  };

  const toggleMore = () => {
    setMoreOpen(!moreOpen);
    setServicesOpen(false);
  };

  return (
    <header className="header">
      <h1>Developers Hub</h1>

      <div className="menu-icon" onClick={() => setMenuOpen(!menuOpen)}>
        ☰
      </div>

      <nav className={`nav-links ${menuOpen ? "active" : ""}`}>
        
        <Link to="/" onClick={() => setMenuOpen(false)}>Home</Link>
        <Link to="/about" onClick={() => setMenuOpen(false)}>About Us</Link>

        {/* Services */}
        <div className="dropdown">
          <span className="dropdown-title" onClick={toggleServices}>
            Services ▾
          </span>

          <div className={`dropdown-menu ${servicesOpen ? "show" : ""}`}>
            <Link 
              to="/services" 
              onClick={() => {
                setServicesOpen(false);
                setMenuOpen(false);
              }}
            >
              Our Services
            </Link>

            <Link 
              to="/booking" 
              onClick={() => {
                setServicesOpen(false);
                setMenuOpen(false);
              }}
            >
              Booking
            </Link>
          </div>
        </div>

        {/* More */}
        <div className="dropdown">
          <span className="dropdown-title" onClick={toggleMore}>
            More ▾
          </span>

          <div className={`dropdown-menu ${moreOpen ? "show" : ""}`}>
            <Link 
              to="/portfolio" 
              onClick={() => {
                setMoreOpen(false);
                setMenuOpen(false);
              }}
            >
              Portfolio
            </Link>

            <Link 
              to="/blog" 
              onClick={() => {
                setMoreOpen(false);
                setMenuOpen(false);
              }}
            >
              Blog
            </Link>

            <Link 
              to="/contact" 
              onClick={() => {
                setMoreOpen(false);
                setMenuOpen(false);
              }}
            >
              Contact
            </Link>
          </div>
        </div>

        {/* Login */}
        <Link 
          to="/login" 
          className="login-btn"
          onClick={() => setMenuOpen(false)}
        >
          Login
        </Link>

      </nav>
    </header>
  );
}