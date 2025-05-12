import React from "react";
import "./NavBar.css";
import { FaTruck } from "react-icons/fa";
import { Link } from "react-router";

const NavBar = () => {
  return (
    <nav className="navbar-container">
      <div className="nav-logo-container">
        <Link to={"/"} className="logo">
          MAA
          <br></br>DELIVERY
        </Link>
      </div>
      <div style={{ display: "flex", alignItems: "center" }}>
        <ul className="nav-services-container">
          <li>
            <Link to={"/services"} className="nav-anchor-element">
              Services
            </Link>
          </li>
          <li>
            <Link to={"/"} className="nav-anchor-element">
              Franchise
            </Link>
          </li>
          <li>
            <Link to="/" className="nav-anchor-element">
              Parterns
            </Link>
          </li>
          <li>
            <Link to={"/contact"} className="nav-anchor-element">
              Contact us
            </Link>
          </li>
          <li>
            <Link to={"/about"} className="nav-anchor-element">
              About us
            </Link>
          </li>
          <li>
            <Link to={"/profile"} className="nav-anchor-element">
              Profile
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
