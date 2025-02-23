// src/SignUp.js
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword } from "firebase/auth"; // Keep this import
import { auth } from './firebase-config';  // Use auth imported from firebase-config
import "./SignUp.css"; // Import the SignUp CSS file

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleSignUp = async (e) => {
    e.preventDefault();
    try {
      await createUserWithEmailAndPassword(auth, email, password); // Use the updated method
      navigate("/login");
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div className="signup-container">
      <h2>Sign Up</h2>
      <form onSubmit={handleSignUp}>
        <input
          type="email"
          placeholder="Enter email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <br />
        <input
          type="password"
          placeholder="Enter password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <br />
        {error && <p className="error">{error}</p>}
        <button type="submit" className="signup-button">Sign Up</button>
      </form>

      {/* Already have an account section */}
      <p className="signin-text">Already have an account?</p>
      <button className="signin-button" onClick={() => navigate("/login")}>
        Login
      </button>
    </div>
  );
};

export default SignUp;
