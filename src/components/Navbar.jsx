import React, { useEffect, useState } from "react";
import iconHome from "../img/home_icon.png";
import iconFavourite from "../img/add_favourite.png";
import { Link } from "react-router-dom";
import "./style/Navbar.css"

function Navbar() {

  return (
    <div className="AllNavbar">
      <Link to="/">
        <img src={iconHome} className="NavbarIconHome" alt="iconHome"/>
      </Link>
      <Link to="/favoritePage">
        <img src={iconFavourite} className="NavbarIconFavourite" alt="iconFavorite"/>
      </Link>
    </div>    
  )
}

export default Navbar;