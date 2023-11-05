//Header File

import React from 'react';
import './Header.css'; 
import '@fortawesome/fontawesome-free/css/all.min.css';

function Header() {
  return (
    <div className="header">
      <div className="title">
        <i className="fa-solid fa-meteor fa-3x"></i>
        <h1> Website Name </h1>
      </div>

      <div className="header-right">
        <nav>
          <ul>
            <li><a href="/"><i className="fa-solid fa-house"></i> Home</a></li>
            <li><a href="/about"><i className="fa-solid fa-question"></i> About</a></li>
            <li><a href="/users"><i className="fa-solid fa-users"></i> Users</a></li>
            <li><a href ="/myprofile"><i className="fa-solid fa-circle-user"></i> My Profile</a></li>
          </ul>
       </nav>
      </div>
      </div>
  );
}

export default Header;