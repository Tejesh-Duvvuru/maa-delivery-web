import React from "react";
import "./NavBar.css";
import { FaTruck } from "react-icons/fa";

const NavBar = () => {
  return (
    <nav className="navbar-container">
      <div className="nav-logo-container">
        <a href="#" className="logo">
          MAA
          <br></br>DELIVERY
        </a>
      </div>
      <div className="nav-services-container">
        <a href="#" className="nav-anchor-element">
          Services
        </a>
        <a href="#" className="nav-anchor-element">
          Franchise
        </a>
        <a href="#" className="nav-anchor-element">
          Parterns
        </a>
        <a href="#" className="nav-anchor-element">
          Contact_Us
        </a>
        <a href="#" className="nav-anchor-element">
          Profile
        </a>
      </div>
    </nav>
  );
};

export default NavBar;
