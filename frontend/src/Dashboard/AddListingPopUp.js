import {React, useState} from 'react';
import "./AddListingPopUp.css";

const AddListingPopUp = ({ content, onClose, onSubmit }) => {
  const [title, setTitle] = useState(''); // State for the rating (1-5 stars)
  const [price, setPrice] = useState(''); // State for the review text
  const [category, setCategory] = useState('Technology'); // Default category

  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  };
  
  const handlePriceChange = (event) => {
    setPrice(event.target.value);
  };

  const handleCategoryChange = (event) => {
    setCategory(event.target.value);
  };

  const handleSubmit = () => {
    onSubmit({ title, price, category });
    onClose(); // Close the popup
  };

  return (
  <div className="popup">
    <div className="popup-content">
      <span className="close-button" onClick={onClose}>
        &times;
      </span>
      <div className="input-container">
          <p>Enter Title: 
            <textarea
              value={title}
              onChange={handleTitleChange}
            />
          </p>
          <p>Enter Price: 
            <textarea
              value={price}
              onChange={handlePriceChange}
            />
          </p>
          <p>Select Category:
            <select
              value={category}
              onChange={handleCategoryChange}
            >
              <option value="Technology">Technology</option>
              <option value="Appliances">Appliances</option>
              <option value="Event Tickets">Event Tickets</option>
              <option value="Clothing">Clothing</option>
              <option value="Textbooks">Textbooks</option>
              <option value="Furniture">Furniture</option>
              <option value="Other">Other</option>
            </select>
          </p>
        </div>
        <button className="submit-button" onClick={handleSubmit}>Submit</button>
      </div>
    </div>

  );
}

export default AddListingPopUp;