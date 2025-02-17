import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom

const Dashboard = () => {
  return (
    <div>
      <h1>Welcome to the Dashboard!</h1>
      <Link to="/profile">
        <button >Profile</button>
      </Link>
    </div>
  );
};

export default Dashboard;
