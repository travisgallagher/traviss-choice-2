import React from "react";
import { Link } from "react-router-dom";
import "./index.css";

export const NavBar = () => {
  return (
    <div className="nav-bar">
      <Link to="/">Home</Link>
      <Link to="/auth">Sign In</Link>
      <Link to="/auth">Sign Up</Link>
      <Link to="/contact">Contact</Link>
    </div>
  );
};
