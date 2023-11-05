//Header File

import React from 'react';
import './Header.css'; 
import logo from './utdlogo.jpeg';

function Header() {
  return (
    <div className="header">
      <div style={{ display: 'flex', justifyContent: 'left' }}>
        <img
          src={logo}
          alt="Image Description"
          style={{ maxWidth: '100%', height: '100px' }}
        />
      </div>
      <div className="header-right">
        <i className="fa fa-user"></i>
        <span>My Profile</span>
      </div>
    </div>
  );
}

export default Header;