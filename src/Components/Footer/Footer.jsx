import React from "react";
import "./Footer.css";
import footerLogo from "../../assets/tslogo.svg";
import { FaLinkedinIn } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footer">
      <div className="secContainer container grid">
        <div className="logoDiv">
          <div className="footerLogo">
            <img src={footerLogo} alt="logo" className="" />
          </div>
          <div className="socials flex">
            <FaLinkedinIn className="icon" />
            <FaTwitter className="icon" />
          </div>
        </div>

          <div className="footerLinks">
            <span className="linkTitle">Information</span>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">Explore</a>
            </li>
            <li>
              <a href="#">Travel</a>
            </li>
            <li>
              <a href="#">Blog</a>
            </li>
          </div>

          <div className="footerLinks">
            <span className="linkTitle">Helpful Links</span>
            <li>
              <a href="#">Destinations</a>
            </li>
            <li>
              <a href="#">Support</a>
            </li>
            <li>
              <a href="#">Travel & Condition</a>
            </li>
            <li>
              <a href="#">Privacy</a>
            </li>
          </div>

          <div className="footerLinks">
            <span className="linkTitle">Contact Details</span>
            <span className="phone">+91 1234567890</span>
            <span className="email">ranjitgupta2002@gmail.com</span>
          </div>
      </div>
    </div>
  );
};

export default Footer;
