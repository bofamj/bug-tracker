import React from "react";
import { Link, useNavigate } from "react-router-dom";

import logo from "../assets/logo.png";

const NavBar = () => {
  return (
    <div className="nav">
      <div className="nav__logo">
        <img src={logo} alt="logo" className="nav__img" />
      </div>
      <nav className="nav__continer">
        <div className="nav__link">
          <Link to="/" className="nav__items">
            dashboard
          </Link>
          <Link to="/" className="nav__items">
            your ticket
          </Link>
          <Link to="/" className="nav__items">
            creat a ticket
          </Link>
          <Link to="/" className="nav__items">
            log out
          </Link>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
