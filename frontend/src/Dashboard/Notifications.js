import React, { useState, useRef } from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';
import Header from "./Header";
import "./Notifications.css";

function NotificationsPage(){
  return(
    <div>
      <Header />
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
      <div className='notifs-message'>
        <i className="fa-solid fa-check fa-3x"></i>
        <h1>You're all caught up!</h1>
        <h3> You have no new notifications, we will notify you when someone interacts with one of your listings.</h3>
      </div>
    </div>
  );
}

export default NotificationsPage;