import React from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom

const Dashboard = () => {
  return (
    <div>
      <h1>Welcome to the Dashboard!</h1>

      {/* Profile Button */}
      <Link to="/profile">
        <button>Profile</button>
      </Link>

      {/* Resume Reviewer Button */}
      <Link to="/upload-resume">
        <button>Resume Reviewer</button>
      </Link>
    </div>
  );
};

export default Dashboard;
