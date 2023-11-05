import {React, useState} from 'react';
import './ProfilePage.css'; 
import '@fortawesome/fontawesome-free/css/all.min.css';
import Header from './Header';

function ProfilePage() {
  
  return (
    <div className="profile">
      <Header/>
      <div className="heading">
        <h2> Hello, "UserName"! </h2>
  
        <nav className="profilenav">
          <ul>
            <li><a href="/profile/listings"><i className="fa-solid fa-store"></i> My Listings </a></li>
            <li><a href="/profile/notifications"><i className="fa-solid fa-bell"></i> Notifications </a></li>
            <li><a href="/profile/completedtransactions"><i className="fa-solid fa-check"></i> Completed Transactions </a></li>
            <li><a href="/profile/pending"><i className="fa-solid fa-hourglass-half"></i> Pending Transactions </a></li>
          </ul>
        </nav>
        <div className='verticalline'></div>
      </div>
    </div>
  );
}

export default ProfilePage;