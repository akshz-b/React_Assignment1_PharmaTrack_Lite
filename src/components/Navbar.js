import React from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <div className="navbar">
      <h1>PharmaTrack Lite</h1>
      <div className="nav-links">
        <NavLink to="/">Dashboard</NavLink>
        <NavLink to="/add">Add Medicine</NavLink>
      </div>
    </div>
  );
}

export default Navbar;
