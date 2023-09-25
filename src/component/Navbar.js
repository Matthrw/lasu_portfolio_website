import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGem } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  return (
    <nav className="header-container">
      <div className="nav-container">
        {/* <FontAwesomeIcon icon={faGem} style={{ color: "#ff1900" }} /> */}
        <div className="logo1"></div>
        <div className="logo2"></div>
        <h1>Portfolio</h1>
      </div>
      <div className="nav-links">
        <a href="">Home</a>
        <a href="">About</a>
        <a href="">Services</a>
        <a href="">Portfolio</a>
        <a href="">Page</a>
        <a href="">Contact</a>
        <button className="primary-button">Get Free Consultant </button>
      </div>
    </nav>
  );
};

export default Navbar;
