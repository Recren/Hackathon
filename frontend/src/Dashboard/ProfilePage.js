import {React, useState} from 'react';
import './ProfilePage.css'; 
import '@fortawesome/fontawesome-free/css/all.min.css';
import Header from './Header';

function ProfilePage() {
  //state variables
  const [showListings, setShowListings] = useState(false);
  const [showNotifications, setShowNotifications] = useState(false);
  const [showCompletedTransactions, setShowCompletedTransactions] = useState(false);
  const [showPendingTransactions, setShowPendingTransactions] = useState(false);
  
  return (
    
    <div className="profile">
      <Header />
      <div className="heading">
        <h2> Hello, "UserName"! </h2>
  
        <nav className="profilenav">
          <ul>
            <li onClick={() => setShowListings(!showListings)}><i className="fa-solid fa-store"></i> My Listings </li>
            {showListings && (
              <div className="listing-content">
                <h2> Hi </h2>
              </div>
            )}
            <li onClick={() => setShowNotifications(!showNotifications)}><i className="fa-solid fa-bell"></i> Notifications </li>
            {showNotifications && (
              <div className="notifications-content">
                {/* Content for Notifications */}
              </div>
            )}
            <li  onClick={() => setShowCompletedTransactions(!showCompletedTransactions)}><i className="fa-solid fa-check"></i> Completed Transactions</li>
            {showCompletedTransactions && (
              <div className="completed-content">
                {/* Content for Completed Transactions */}
              </div>
            )}  
            <li  onClick={() => setShowPendingTransactions(!showPendingTransactions)}><i className="fa-solid fa-hourglass-half"></i> Pending Transactions</li>
            {showPendingTransactions && (
              <div className="pending-content">
                {/* Content for Pending Transactions */}
              </div>
            )}
          </ul>
        </nav>
        <div className='verticalline'></div>
      </div>
    </div>
  );
}

export default ProfilePage;