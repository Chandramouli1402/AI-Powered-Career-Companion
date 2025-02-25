import React from "react";
import { Link } from "react-router-dom";
import "./Dashboard.css"; 


const Dashboard = () => {
  return (
    <div className="dashboard-container">
      <h2>Welcome to Career Companion</h2>
      <p>Select a section to explore:</p>

      <div className="dashboard-buttons">
        <Link to="/upload-resume" className="btn blue">📂 Resume Reviewer</Link>
        <Link to="/skills-to-learn" className="btn green">🎯 Skills to Learn</Link>
        <Link to="/qa" className="btn purple">💬 Q/A Forum</Link>
        <Link to="/hackathon" className="btn red">🚀 Hackathon </Link>
        <Link to="/jobs" className="btn black"> 💼 Job Listings</Link>

      </div>
    </div>
  );
};

export default Dashboard;
