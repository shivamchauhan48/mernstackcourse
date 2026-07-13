import React from "react";
import { Outlet } from "react-router-dom";

const Dash = () => {
  return (
    <>
      <div id="dashboard">
        <div style={{ gridArea: "card1" }}>
          <h2>🌍 Total Destinations</h2>
          <h1>48</h1>
          <p>Countries and cities available for booking.</p>
        </div>

        <div style={{ gridArea: "card2" }}>
          <img
            src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800"
            alt="Beach Destination"
          />

          <h2>Featured Destination</h2>

          <h3>Maldives</h3>

          <p>
            Crystal-clear waters, luxury resorts, and unforgettable sunsets
            await your next vacation.
          </p>

          <button>View Packages</button>
        </div>

        <div style={{ gridArea: "card3" }}>
          <h2>✈️ Active Bookings</h2>
          <h1>126</h1>
          <p>Trips currently scheduled this month.</p>
        </div>

        <div style={{ gridArea: "card4" }}>
          <h2>🔥 Popular Packages</h2>

          <ul>
            <li>🇫🇷 Paris City Tour</li>
            <li>🇯🇵 Japan Cherry Blossom Trip</li>
            <li>🇦🇪 Dubai Luxury Escape</li>
            <li>🇨🇭 Swiss Alps Adventure</li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Dash;
