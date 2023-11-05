import React, { useState } from "react";
import Header from "./Header";
import "./Trending.css";
function ItemCard({ name, description, price, condition }) {
  return (
    <div className="item-card">
      <h3>{name}</h3>
      <p>{description}</p>
      <p>Price: ${price}</p>
      <p>Condition: {condition}</p>
    </div>
  );
}

function Trending() {
  const [products, setProducts] = useState([]);
  const [query, setQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  async function getInventory() {
    return fetch("http://localhost:4000/api/listings")
      .then((response) => response.json())
      .then((items) => {
        setProducts(items);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }

  getInventory();

  //handle search bar input change
  const handleInputChange = (e) => {
    const inputValue = e.target.value;
    setQuery(inputValue);
    handleSearch(inputValue); // Call the provided callback with the query
  };

  //cursor
  const cursorStyle = { cursor: "pointer" };

  let dataset = [];
  // Define a callback function to handle search
  const handleSearch = async (query) => {
    try {
      if (query === "") {
        dataset = [];
      } else {
        let filteredItems = products.filter((item) =>
          item.itemName.toLowerCase().includes(query.toLowerCase())
        );
        console.log(filteredItems);
        setProducts(filteredItems);
      }
    } catch (error) {
      throw error;
    }
  };

  return (
    <div>
      <Header />
      <div style={cursorStyle}>
        <div className="search-container">
          <input
            type="text"
            placeholder="Search..."
            value={query}
            onChange={handleInputChange}
            onFocus={() => {
              setQuery(""); // Clear the search bar input
              // Clear the search results when focusing on the search bar
              setSearchResults([]);
            }}
          />
        </div>

        <div className="array-container">
          {products.map((item, index) => (
            <ItemCard
              key={index}
              name={item.itemName}
              description={item.description}
              price={item.price}
              condition={item.condition}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Trending;
