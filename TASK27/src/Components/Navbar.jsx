import React from "react";
import "../App.css";

const Navbar = () => {
  return (
    <>
      <div id="navbar">
        <div id="logo">
          <img
            src="https://static.vecteezy.com/system/resources/previews/034/637/950/non_2x/deer-head-logo-free-png.png"
            alt=""
          />
        </div>
        <nav>
          <ul>
            <li>
              <a href="">Home</a>
            </li>
            <li>
              <a href="">Categories</a>
            </li>
            <li>
              <a href="">About Us</a>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
};

export default Navbar;
