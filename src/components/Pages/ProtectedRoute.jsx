import React from "react";
import { Navigate } from "react-router";
import { toast } from "react-toastify";
const ProtectedRoute = ({ children }) => {
  const token = localStorage.getItem("user");

  if (!token) {
    toast.error("login terlebih dahulu");

    return <Navigate to="/login" />;
  }

  return children;
};

export default ProtectedRoute;
