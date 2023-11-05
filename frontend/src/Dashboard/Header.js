//Header File

import React, { useState, useRef } from "react";
import { Outlet, Link } from "react-router-dom";
import "./Header.css";
import "@fortawesome/fontawesome-free/css/all.min.css";

function Header() {
  return (
    <div className="header">
      <div className="title">
        <i className="fa-solid fa-meteor fa-3x"></i>
        <h1> UTDeals </h1>
      </div>

      <div className="header-right">
        <nav>
          <ul>
            <li>
              <a href="/">
                <i className="fa-solid fa-house"></i> Home
              </a>
            </li>
            <li>
              <a href="/about">
                <i className="fa-solid fa-question"></i> About
              </a>
            </li>
            <li>
              <Link to="/users">
                <i className="fa-solid fa-users"></i> Users
              </Link>
            </li>
            <li>
              <Link to="/profile">
                <i className="fa-solid fa-circle-user"></i> My Profile
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default Header;
