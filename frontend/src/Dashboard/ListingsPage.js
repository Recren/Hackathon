import {React, useState} from 'react';
import './ListingsPage.css';
import AddListingPopUp from '../Dashboard/AddListingPopUp';
import Header from './Header';

function ListingsPage() {
  //state variables
  const [showListingPopUp, setListingPopUp] = useState(false); 
  const [listings, setListings] = useState([]); // Array to store submitted reviews
  const ListingTxt = '';

  const openAddListingPopup = () => {
    setListingPopUp(!showListingPopUp);
  };

  const addListing = (listing) => {
    // Add the submitted review to the array
    setListings([...listings, listing]);
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
          <button className="addlist" onClick={openAddListingPopup}><i className="fa-solid fa-plus fa-2x"></i></button>
        {showListingPopUp && <AddListingPopUp content={ListingTxt} onClose={openAddListingPopup}  onSubmit={addListing} />}
        <div className="listings-list">
        {listings.map((list, index) => (
          <div key={index} className="list">
            <p>Title: {list.title}</p>
            <p>Price: {list.price}</p>
            <p>Category: {list.category}</p>
            <p>Condition: {list.condition}</p>
            <p>Description: {list.description}</p>
          </div>
        ))}
        </div>
      </div>
    </div>
  </div>
);
}

export default ListingsPage;