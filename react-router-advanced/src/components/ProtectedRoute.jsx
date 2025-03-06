import React from "react";
import { Navigate } from "react-router-dom";

import { useAuth } from '../context/AuthContext'; // Adjust path

const ProtectedRoute = ({ children }) => {
  const isAuthenticated = localStorage.getItem("isAuthenticated"); // Simulate authentication check
  return isAuthenticated ? children : <Navigate to="/login" />;
};

export default ProtectedRoute;
