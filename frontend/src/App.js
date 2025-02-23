import React from "react";
import { BrowserRouter as Router, Routes, Route, Link, Navigate } from "react-router-dom";
import SignUp from "./SignUp";
import Login from "./Login";
import Profile from "./components/Profile/Profile"; 
import Dashboard from "./components/Dashboard";
import { AuthProvider } from "./context/AuthContext"; 
import UploadResume from "./components/UploadResume/UploadResume";
import SkillsToLearn from "./components/SkillsToLearn/SkillsToLearn";
import QASection from "./components/QASection/QASection"; 
import HackathonList from "./components/Hackathon/HackathonList"; // Import HackathonFinder
import JobList from "./components/JobListing/JobList";
import './App.css'; 

function App() {
  return (
    <AuthProvider>
      <Router>
        <div className="App">
          <header className="App-header">
            <div className="header-spacer"></div> {/* Spacer for balance */}
            <h1>Equipping Graduates</h1>
            <div className="header-buttons">
              <Link to="/dashboard" className="nav-button">Dashboard</Link>
              <Link to="/profile" className="nav-button">Profile</Link>
            </div>
          </header>

          <Routes>
            {/* Redirect root ("/") to Login */}
            <Route path="/" element={<Navigate replace to="/login" />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/login" element={<Login />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/upload-resume" element={<UploadResume />} />
            <Route path="/skills-to-learn" element={<SkillsToLearn />} />
            <Route path="/qa/*" element={<QASection />} />
            <Route path="/hackathon" element={<HackathonList />} /> {/* Use HackathonFinder component */}
            <Route path="/jobs" element={<JobList />} />

          </Routes>
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;