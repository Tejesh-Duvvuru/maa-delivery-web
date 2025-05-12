import React from "react";
import Tile from "../Tile/Tile";
import "./Homepage.css"; // Import the CSS file for styling
import Trackorder from "../Trackorder/Trackorder";
import OnGoing from "../OnGoing/OnGoing";

let imageUrl =
  "https://firekylinpackaging.com/wp-content/uploads/2024/01/Kraft-Cube-Carry-Bags.jpg";

const Homepage = () => {
  return (
    <div className="homepage-container">
      <div className="tile-header-conatiner">
        <div className="tile-inside-container">
          <Tile
            imageUrl={imageUrl}
            description="Description of the food parcel."
            descriptionHeading="Food parcel"
          />
          <Tile
            imageUrl={imageUrl}
            description="Description of the food parcel."
            descriptionHeading="Food parcel"
          />
        </div>
        <div className="tile-inside-container second-tile-container">
          <Tile
            imageUrl={imageUrl}
            description="Description of the food parcel."
            descriptionHeading="Food parcel"
          />
          <Tile
            imageUrl={imageUrl}
            description="Description of the food parcel."
            descriptionHeading="Food parcel"
          />
        </div>
      </div>
      {/* <div style={{ background: "" }}>
        <OnGoing />
      </div> */}
      {/* <div style={{ background: "red" }} className="trackorder-container"> */}
      <Trackorder />
      {/* </div> */}
      {/* <Tile /> */}
    </div>
  );
};

export default Homepage;
