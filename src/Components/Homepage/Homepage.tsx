import React from "react";
import Tile from "../Tile/Tile";
import "./Homepage.css"; // Import the CSS file for styling
import Trackorder from "../Trackorder/Trackorder";
import OnGoing from "../OnGoing/OnGoing";

const Homepage = () => {
  return (
    <div className="homepage-container">
      <div className="tile-header-conatiner">
        <div className="tile-inside-container">
          <Tile />
          <Tile />
        </div>
        <div className="tile-inside-container">
          <Tile />
          <Tile />
        </div>
      </div>
      <div style={{ background: "red" }}>
        <OnGoing />
      </div>
      <div>
        <Trackorder />
      </div>
    </div>
  );
};

export default Homepage;
