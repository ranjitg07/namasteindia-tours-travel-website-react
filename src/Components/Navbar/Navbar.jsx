import React, { useState } from "react";
import "./Navbar.css";
import logo from "../../assets/NamasteT1.svg";

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
        <a href="#"><img className="h-logo" src={logo} alt="TravelSphere Logo" /></a>
      </div>

      <div className={navBar}>
        <ul>
          <a href="#destination"><li className="navList">Destinations</li></a> 
          <a href="#aboutUs"><li className="navList">About Us</li></a> 
          <a href="#testimonial"><li className="navList">Testimonial</li></a> 
          <a href="#faq"><li className="navList">FAQ</li></a> 
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
