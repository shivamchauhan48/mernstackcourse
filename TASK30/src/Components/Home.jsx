import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  let [user, setuser] = useState("");
  const navigate = useNavigate();
  let clickHandler = () => {
    let username = document.getElementById("username");
    console.log(username.value);
    navigate(`/user/${username.value}`);
  };
  return (
    <>
      <div id="home">
        <div style={{ gridArea: "cardA" }}>
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYoAD6_LEhO3DJyzxJvwE8-uLPm9IgbscKACj1TSH15xRV-GozdQAkW8Q&s=10"
            alt="London Bridge"
          />

          <h1>Discover London</h1>

          <p>
            Explore one of the world's most iconic cities. Walk across the
            famous London Bridge, visit historic landmarks, enjoy delicious
            food, and experience unforgettable adventures.
          </p>

          <button>Explore Now</button>
        </div>

        <div style={{ gridArea: "cardB" }}>
          <h2>Top Destinations</h2>

          <ul>
            <li>🏰 London Bridge</li>
            <li>🎡 London Eye</li>
            <li>👑 Buckingham Palace</li>
            <li>🌳 Hyde Park</li>
          </ul>
        </div>

        <div style={{ gridArea: "cardC" }}>
          <h2>Travel Tip</h2>

          <p>
            Book your tickets online in advance and use the Underground to
            travel quickly across the city.
          </p>
        </div>
      </div>
    </>
  );
};

export default Home;
