import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import SignUp from "./SignUp";
import Login from "./Login";
import './App.css'; // Keep your global CSS file

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <h1>Equipping Graduates</h1> {/* Your app title */}
        </header>

        {/* Define Routes for SignUp and Login components */}
        <Routes>
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
