import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <div id="navbar">
        <Link to="/dashboard">
          <img src="https://static.vecteezy.com/system/resources/thumbnails/006/626/965/small/beach-island-landscape-logo-beach-logo-design-beach-logo-outdoor-summer-travel-sun-stock-free-vector.jpg" />
        </Link>
        <Link to="/">Home</Link>
        <ul>
          <li>
            <Link to="/login">Login</Link>
          </li>
          <li>
            <Link to="/signup">SignUp</Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Navbar;
