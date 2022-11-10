import React from "react";
import { Navigate } from "react-router-dom";

// App.js
// when user -> redirect to Home
// when no user -> redirect to login
const ProtectedRoute = (props) => {
  if (localStorage.getItem("token")) {
    return props.children;
  } else {
    return <Navigate to="/login" />;
  }
};

export default ProtectedRoute;
