import React from 'react';
import "./AddListingPopUp.css";

const AddListingPopUp = ({ content, onClose }) => (
  <div className="popup">
    <div className="popup-content">
      <span className="close-button" onClick={onClose}>
        &times;
      </span>
      <p> Listing Name: </p>
      <p> Cost: </p>
      <p> Category: </p>
    </div>
  </div>
);

export default AddListingPopUp;