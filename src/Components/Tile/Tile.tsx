import React from "react";
import "./Tile.css";
let imageUrl =
  "https://firekylinpackaging.com/wp-content/uploads/2024/01/Kraft-Cube-Carry-Bags.jpg"; // Replace with your image URL

const Tile = () => {
  return (
    <div className="tile-container">
      <div style={{ textAlign: "center" }}>
        <img src={imageUrl} alt="Company Logo" className="tile-food-image" />
      </div>
      <div>
        <h3 className="tile-text">Food Parcel</h3>
        <p>Description of the food parcel.</p>
      </div>
    </div>
  );
};

export default Tile;
