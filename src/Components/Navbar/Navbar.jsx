import React, { useState } from "react";
import "./Navbar.css";
import logo from "./tslogo.svg";

// Imported Icons
import { AiFillCloseCircle } from "react-icons/ai";
import { PiDotsNineBold } from "react-icons/pi";

const Navbar = () => {

// State to track and update navbar
  const [navBar, setNavBar] = useState('menu');

// Function to show navbar
  const showNavBar = () => {
    setNavBar('menu showNavbar');
  }

// Functio to remove navbar
  const removeNavBar = () => {
    setNavBar('menu');
  }

  return (
    <div className="navBar">
      <div className="logoDiv">
        <img className="h-logo" src={logo} alt="TravelSphere Logo" />
      </div>

      <div className={navBar}>
        <ul>
          <li className="navList">Destinations</li>
          <li className="navList">About Us</li>
          <li className="navList">Testimonial</li>
          <li className="navList">Gallery</li>
        </ul>
        {/* icon to remove navbar */}
        <AiFillCloseCircle className="icon closeIcon" onClick={removeNavBar} />
      </div>

      <button className="signUpBtn btn">Sign Up</button>
      {/* icon to toggle navbar */}
      <PiDotsNineBold className="icon menuIcon" onClick={showNavBar} />
    </div>
  );
};

export default Navbar;
