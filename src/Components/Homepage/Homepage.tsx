import React from "react";
import Tile from "../Tile/Tile";
import "./Homepage.css"; // Import the CSS file for styling

const Homepage = () => {
  return (
    <div className="tile-store">
      <div className="tile-inside-container">
        <Tile />
        <Tile />
      </div>
      <div className="tile-inside-container">
        <Tile />
        <Tile />
      </div>
    </div>
  );
};

export default Homepage;
