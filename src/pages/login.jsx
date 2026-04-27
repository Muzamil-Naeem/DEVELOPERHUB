import React, { useState, useRef, useEffect } from "react";
import "../styles/login.css";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";

import {
  loginHeroAnim,
  loginFormAnim,
  loginFieldAnim
} from "../animations/loginanimations";

function Login() {
  const navigate = useNavigate();

  const heroRef = useRef(null);
  const formRef = useRef(null);
  const fieldRefs = useRef([]);

  const [formData, setFormData] = useState({
    email: "",
    password: ""
  });

  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  useEffect(() => {
    if (heroRef.current) loginHeroAnim(heroRef.current);
    if (formRef.current) loginFormAnim(formRef.current);
    if (fieldRefs.current) loginFieldAnim(fieldRefs.current);
  }, []);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      await signInWithEmailAndPassword(
        auth,
        formData.email,
        formData.password
      );

      Swal.fire({
        icon: "success",
        title: "Login Successful",
        text: "Welcome back!"
      });

      setFormData({ email: "", password: "" });
      navigate("/");

    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Login Failed",
        text: error.message
      });
    }

    setLoading(false);
  };

  return (
    <div className="auth-page">

      <div className="auth-hero" ref={heroRef}>
        <h1>Welcome Back</h1>
        <p>Login to access your dashboard and bookings</p>
      </div>

      <div className="auth-container" ref={formRef}>
        <h2>Login</h2>

        <form onSubmit={handleLogin} className="auth-form">
          <div
            className="field"
            ref={(el) => (fieldRefs.current[0] = el)}
          >
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div
            className="field password-field"
            ref={(el) => (fieldRefs.current[1] = el)}
          >
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
              required
            />

            <span
              className="show-password"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? "Hide" : "Show"}
            </span>
          </div>
          <button type="submit" disabled={loading}>
            {loading ? "Logging in..." : "Login"}
          </button>

        </form>
      </div>

    </div>
  );
}

export default Login;