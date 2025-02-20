import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SignUp from "./SignUp";
import Login from "./Login";
import Profile from "./components/Profile/Profile"; // Update path based on your structure
import Dashboard from "./components/Dashboard"; // Import the Dashboard component
import { AuthProvider } from "./context/AuthContext"; // Import AuthProvider
import UploadResume from "./components/UploadResume/UploadResume"
import './App.css'; // Keep your global CSS file

function App() {
  return (
    <AuthProvider>  {/* Wrap the app in AuthProvider to provide authentication state */}
      <Router>
        <div className="App">
          <header className="App-header">
            <h1>Equipping Graduates</h1>
          </header>

          {/* Define Routes for SignUp, Login, Profile, and Dashboard components */}
          <Routes>
            <Route path="/signup" element={<SignUp />} />
            <Route path="/login" element={<Login />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/dashboard" element={<Dashboard />} /> {/* Add route for Dashboard */}
            <Route path="/upload-resume" element={<UploadResume />} />
            
          </Routes>
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;
