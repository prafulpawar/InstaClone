import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Register from "../views/register/Register";
import Login from "../views/login/Login";
import Profile from "../views/profile/Profile";
import ProtectedRoute from "./ProtectedRout"; // Import the ProtectedRoute component

function AppRoutes() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<div>Home</div>} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        {/* Protect the Profile route */}


        <Route
          path="/profile"
          element={
            <ProtectedRoute>
              <Profile />
            </ProtectedRoute>
          }
        />

        
      </Routes>
    </Router>
  );
}

export default AppRoutes;
