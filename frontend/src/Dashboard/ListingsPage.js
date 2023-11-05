import {React, useState} from 'react';
import './ListingsPage.css';
import AddListingPopUp from '../Dashboard/AddListingPopUp';
import Header from './Header';

function ListingsPage() {
  //state variables
  const [showListingPopUp, setListingPopUp] = useState(false); 
  const ListingTxt = '';

  const openAddListingPopup = () => {
    setListingPopUp(!showListingPopUp);
  };


  return (
    <div>
      <Header/>
      <div className="listings">
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
        <div className="listings-content">
          <h1> Your Listings </h1>
        </div>
        <div className="add-listing">
          <button className="addlist" onClick={openAddListingPopup}>Add Listing</button>
        </div>
        {showListingPopUp && <AddListingPopUp content={ListingTxt} onClose={openAddListingPopup} />}
    </div>
  </div>
);
}

export default ListingsPage;