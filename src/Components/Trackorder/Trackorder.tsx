import React from "react";
import "./Trackorder.css"; // Import the CSS file for styling

const Trackorder = () => {
  return (
    <div className="trackorder-container">
      <h1>Track Your Order</h1>
      <p>Enter your order ID to track your order status.</p>
      <input type="text" placeholder="Order ID" />
      <button>Track Order</button>
    </div>
  );
};

export default Trackorder;
