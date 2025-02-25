import React from "react";
import { BrowserRouter as Router, Routes, Route, Link, Navigate, useLocation, useNavigate } from "react-router-dom";
import SignUp from "./components/SignUp/SignUp";
import Login from "./components/Login/Login";
import Profile from "./components/Profile/Profile"; 
import Dashboard from "./components/DashBoard/Dashboard";
import { AuthProvider, useAuth } from "./context/AuthContext"; 
import UploadResume from "./components/UploadResume/UploadResume";
import SkillsToLearn from "./components/SkillsToLearn/SkillsToLearn";
import QASection from "./components/QASection/QASection"; 
import HackathonList from "./components/Hackathon/HackathonList";
import JobList from "./components/JobListing/JobList";
import './App.css'; 

const Header = () => {
  const { user, logout } = useAuth();
  const location = useLocation();
  const navigate = useNavigate();
  const hideNavButtons = location.pathname === "/login" || location.pathname === "/signup";

  const handleLogout = async () => {
    await logout();
    navigate("/login"); 
  };

  return (
    <header className="App-header">
      <div className="header-spacer"></div>
      <h1>Equipping Graduates</h1>

      {!hideNavButtons && user && (
        <div className="header-buttons">
          <Link to="/dashboard" className="nav-button">Dashboard</Link>
          <Link to="/profile" className="nav-button">Profile</Link>
          <button onClick={handleLogout} className="nav-button">Logout</button>
        </div>
      )}
    </header>
  );
};

function App() {
  return (
    <Router>
      <AuthProvider> 
        <div className="App">
          <Header />
          <Routes>
            <Route path="/" element={<Navigate replace to="/login" />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/login" element={<Login />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/upload-resume" element={<UploadResume />} />
            <Route path="/skills-to-learn" element={<SkillsToLearn />} />
            <Route path="/qa/*" element={<QASection />} />
            <Route path="/hackathon" element={<HackathonList />} />
            <Route path="/jobs" element={<JobList />} />
          </Routes>
        </div>
      </AuthProvider>
    </Router>
  );
}

export default App;
