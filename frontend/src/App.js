import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SignUp from "./SignUp";
import Login from "./Login";
import Profile from "./components/Profile/Profile"; // Update path based on your structure
import { AuthProvider } from "./context/AuthContext"; // Import AuthProvider
import './App.css'; // Keep your global CSS file

function App() {
  return (
    <AuthProvider>  {/* Wrap the app in AuthProvider to provide authentication state */}
      <Router>
        <div className="App">
          <header className="App-header">
            <h1>Equipping Graduates</h1>
          </header>

          {/* Define Routes for SignUp, Login, and Profile components */}
          <Routes>
            <Route path="/signup" element={<SignUp />} />
            <Route path="/login" element={<Login />} />
            <Route path="/profile" element={<Profile />} />
          </Routes>
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;
