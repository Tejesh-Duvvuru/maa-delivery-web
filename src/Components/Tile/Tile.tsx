import React from "react";
import "./Tile.css";
// Replace with your image URL

interface TileProps {
  imageUrl: string;
  descriptionHeading: string;
  description: string;
}

const Tile = (props: TileProps) => {
  const { imageUrl, descriptionHeading, description } = props;
  return (
    <div className="tile-container">
      <div style={{ textAlign: "center" }}>
        <img src={imageUrl} alt="Company Logo" className="tile-food-image" />
      </div>
      <div className="tile-text-container">
        <h3 className="tile-text">{descriptionHeading}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default Tile;
