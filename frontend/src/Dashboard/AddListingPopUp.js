import {React, useState} from 'react';
import "./AddListingPopUp.css";

const AddListingPopUp = ({ content, onClose, onSubmit }) => {
  const [title, setTitle] = useState(''); 
  const [price, setPrice] = useState(''); 
  const [category, setCategory] = useState('Technology'); // Default category
  const [condition, setCondition] = useState('Good'); 
  const [description, setDescription] = useState(''); 

  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  };
  
  const handlePriceChange = (event) => {
    setPrice(event.target.value);
  };

  const handleCategoryChange = (event) => {
    setCategory(event.target.value);
  };

  const handleConditionChange = (event) => {
    setCondition(event.target.value);
  };

  const handleDescriptionChange = (event) => {
    setDescription(event.target.value);
  };

  const handleSubmit = () => {
    onSubmit({ title, price, category, condition, description});

    let data = {
      itemName: title,
      description: description,
      category: category,
      price: price,
      condition: condition,
    };

    fetch('http://localhost:4000/api/listings', {
      method: 'POST',
      body: JSON.stringify(data),
    })
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json(); // Parse the JSON response from the server
      })
      .then(data => {
        console.log(data); // Handle the response data
      })
      .catch(error => {
        console.error('Error:', error);
      });
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
          <p>Select Condition:
            <select
              value={condition}
              onChange={handleConditionChange}
            >
              <option value="New">New</option>
              <option value="Like New">Like New</option>
              <option value="Excellent">Excellent</option>
              <option value="Used">Used</option>
              <option value="Very Used">Very Used</option>
            </select>
          </p>
          <p>Enter Description: 
            <textarea
              value={description}
              onChange={handleDescriptionChange}
            />
          </p>
        </div>
        <button className="submit-button" onClick={handleSubmit}>Submit</button>
      </div>
    </div>

  );
}

export default AddListingPopUp;