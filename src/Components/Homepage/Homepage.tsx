import React from "react";
import Tile from "../Tile/Tile";
import "./Homepage.css"; // Import the CSS file for styling
import Trackorder from "../Trackorder/Trackorder";
import OnGoing from "../OnGoing/OnGoing";

let imageUrl =
  "https://firekylinpackaging.com/wp-content/uploads/2024/01/Kraft-Cube-Carry-Bags.jpg";
let foodImageUrl =
  "https://res.cloudinary.com/dswhqorti/image/upload/v1747051319/Maa-Delivery/Maa_Food_dzpgif.png";
let expressParcelImageUrl =
  "https://res.cloudinary.com/dswhqorti/image/upload/v1747051318/Maa-Delivery/maa_parcel.png";
let businessLogisticsImageUrl =
  "https://res.cloudinary.com/dswhqorti/image/upload/v1747051318/Maa-Delivery/b2b_h9gmr0.png";
let truckBookingImageUrl =
  "https://res.cloudinary.com/dswhqorti/image/upload/v1747051318/Maa-Delivery/truck_wv2xmf.png";

const Homepage = () => {
  return (
    <div className="homepage-container">
      <div className="tile-header-conatiner">
        <div className="tile-inside-container">
          <Tile
            imageUrl={foodImageUrl}
            description="Deliver fresh home-cooked meals, tiffins, or groceries anywhere. Safe and quick delivery from kitchen to doorstep."
            descriptionHeading="Food Delivery"
          />
          <Tile
            imageUrl={expressParcelImageUrl}
            description="Send your personal parcels, gifts, or important items fast and safely – door-to-door within cities or across India."
            descriptionHeading="Express Parcel (Personal Courier)"
          />
        </div>
        <div className="tile-inside-container second-tile-container">
          <Tile
            imageUrl={businessLogisticsImageUrl}
            description="We support businesses with reliable transport for goods, raw materials, or bulk deliveries. Seamless and on time."
            descriptionHeading="Business Logistics (B2B)"
          />
          <Tile
            imageUrl={truckBookingImageUrl}
            description="Need a full truck or just some space? Book what you need — for shifting homes, big orders, or commercial use."
            descriptionHeading="Truck or Cargo Booking"
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
