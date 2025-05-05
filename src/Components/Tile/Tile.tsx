import React from "react";
import "./Tile.css";
let imageUrl =
  "https://firekylinpackaging.com/wp-content/uploads/2024/01/Kraft-Cube-Carry-Bags.jpg"; // Replace with your image URL

const Tile = () => {
  return (
    <div className="tile-container">
      <img src={imageUrl} alt="Company Logo" className="tile-food-image" />
      <div>
        <h3 className="tile-text">Food Parcel</h3>
        <p className="tile-description">Description of the food parcel.</p>
      </div>
    </div>
  );
};

export default Tile;
