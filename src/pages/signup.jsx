import React, { useState, useRef, useEffect } from "react";
import "../styles/signup.css";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";
import Swal from "sweetalert2";
import { authPageAnim } from "../animations/signupanimations";

function Signup() {
  useEffect(() => {
  authPageAnim(formRef.current);
}, []);
  const formRef = useRef(null);

  const [formData, setFormData] = useState({
    email: "",
    password: ""
  });

  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSignup = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      await createUserWithEmailAndPassword(
        auth,
        formData.email,
        formData.password
      );

      Swal.fire({
        icon: "success",
        title: "Account Created!",
        text: "You can now login"
      });

      setFormData({ email: "", password: "" });
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Signup Failed",
        text: error.message
      });
    }

    setLoading(false);
  };

  return (
    <div className="auth-page">

      <div className="auth-container" ref={formRef}>
        <h2>Create Account</h2>
        <p>Sign up to access booking system</p>

        <form onSubmit={handleSignup} className="auth-form">

          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={formData.email}
            onChange={handleChange}
            required
          />

          <div className="password-field" style={{ position: "relative" }}>
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
              required
            />

            <span
              onClick={() => setShowPassword(!showPassword)}
              style={{
                position: "absolute",
                right: "10px",
                top: "50%",
                transform: "translateY(-50%)",
                cursor: "pointer",
                fontSize: "12px",
                color: "#555"
              }}
            >
              {showPassword ? "Hide" : "Show"}
            </span>
          </div>

          <button type="submit" disabled={loading}>
            {loading ? "Creating..." : "Sign Up"}
          </button>

        </form>
      </div>

    </div>
  );
}

export default Signup;