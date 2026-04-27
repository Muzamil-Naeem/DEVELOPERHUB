import { Link } from "react-router-dom";
import "../styles/header.css";
import { useState, useEffect, useRef } from "react";
import { signOut, onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebase";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

export default function Header() {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);

  const [servicesOpen, setServicesOpen] = useState(false);
  const [moreOpen, setMoreOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const navRef = useRef(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });

    return () => unsubscribe();
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "auto";
  }, [menuOpen]);

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

  // 🔥 LOGOUT
  const handleLogout = async () => {
    await signOut(auth);

    setUser(null);

    navigate("/login");

    Swal.fire({
      icon: "success",
      title: "Logged Out",
      text: "You have been logged out successfully"
    });
  };

  return (
    <header className="header" ref={navRef}>

      <h1>Developers Hub</h1>

      {/* overlay */}
      <div
        className={`menu-overlay ${menuOpen ? "active" : ""}`}
        onClick={closeMenu}
      />

      {/* hamburger */}
      <div
        className="menu-icon"
        onClick={() => setMenuOpen((prev) => !prev)}
      >
        ☰
      </div>

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
        {user ? (
          <button className="login-btn" onClick={handleLogout}>
            Logout
          </button>
        ) : (
          <>
            <Link to="/login" className="login-btn" onClick={closeMenu}>
              Login
            </Link>

            <Link to="/signup" className="signup-btn" onClick={closeMenu}>
              Sign Up
            </Link>
          </>
        )}

      </nav>
    </header>
  );
}