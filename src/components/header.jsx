import { Link } from "react-router-dom";
import "../styles/header.css";
import { useState, useEffect, useRef } from "react";

export default function Header() {
  const [servicesOpen, setServicesOpen] = useState(false);
  const [moreOpen, setMoreOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const navRef = useRef(null);

  // lock body scroll when menu open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "auto";
  }, [menuOpen]);

  // close on outside click
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (navRef.current && !navRef.current.contains(e.target)) {
        setMenuOpen(false);
        setServicesOpen(false);
        setMoreOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const closeMenu = () => {
    setMenuOpen(false);
    setServicesOpen(false);
    setMoreOpen(false);
  };

  const toggleServices = () => {
    setServicesOpen((prev) => !prev);
    setMoreOpen(false);
  };

  const toggleMore = () => {
    setMoreOpen((prev) => !prev);
    setServicesOpen(false);
  };

  return (
    <header className="header" ref={navRef}>

      {/* LOGO */}
      <h1>Developers Hub</h1>

      {/* OVERLAY (mobile background click close) */}
      <div
        className={`menu-overlay ${menuOpen ? "active" : ""}`}
        onClick={closeMenu}
      />

      {/* HAMBURGER */}
      <div
        className="menu-icon"
        onClick={() => setMenuOpen((prev) => !prev)}
      >
        ☰
      </div>

      {/* NAV LINKS */}
      <nav className={`nav-links ${menuOpen ? "active" : ""}`}>

        <Link to="/" onClick={closeMenu}>Home</Link>
        <Link to="/about" onClick={closeMenu}>About Us</Link>

        {/* SERVICES */}
        <div className="dropdown">
          <span className="dropdown-title" onClick={toggleServices}>
            Services ▾
          </span>

          <div className={`dropdown-menu ${servicesOpen ? "show" : ""}`}>
            <Link to="/services" onClick={closeMenu}>Our Services</Link>
            <Link to="/booking" onClick={closeMenu}>Booking</Link>
          </div>
        </div>

        {/* MORE */}
        <div className="dropdown">
          <span className="dropdown-title" onClick={toggleMore}>
            More ▾
          </span>

          <div className={`dropdown-menu ${moreOpen ? "show" : ""}`}>
            <Link to="/portfolio" onClick={closeMenu}>Portfolio</Link>
            <Link to="/blog" onClick={closeMenu}>Blog</Link>
            <Link to="/contact" onClick={closeMenu}>Contact</Link>
          </div>
        </div>

        {/* LOGIN */}
        <Link to="/login" className="login-btn" onClick={closeMenu}>
          Login
        </Link>

      </nav>
    </header>
  );
}