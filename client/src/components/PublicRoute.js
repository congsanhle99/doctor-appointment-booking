import React from "react";
import { Navigate } from "react-router-dom";

// App.js
// when user -> redirect to Home
// when no user -> redirect to login/register
const PublicRoute = (props) => {
  if (localStorage.getItem("token")) {
    return <Navigate to="/" />;
  } else {
    return props.children;
  }
};

export default PublicRoute;
