import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import './Start.css';

function Start(props){
    const [items, setItems] = useState([]);
    const [query, setQuery] = useState('');
    const [searchResults, setSearchResults] = useState([]);
    const [selectedItem, setSelectedItem] = useState(null);

    async function getUniList(){
        return fetch('https://raw.githubusercontent.com/Recren/Hackathon/main/frontend/src/start/world_universities_and_domains.json')
        .then((response) => response.json())
        .then((items) => {
          items = items.filter((item) => item.country === 'United States');
          items.forEach((item, index) => {
            items[index] = String(item.name);
          });
          setItems(items);
        })
        .catch((error) => {
          console.error('Error fetching data:', error);
        });
    }

    getUniList();

     //handle search bar input change
    const handleInputChange = (e) => {
        const inputValue = e.target.value;
        setQuery(inputValue);
        handleSearch(inputValue); // Call the provided callback with the query
    };
    
    //cursor 
    const cursorStyle = { cursor: 'pointer'};
    
    let dataset = [];
    // Define a callback function to handle search
    const handleSearch = async (query) => {
        try{
            if(query === ""){
                dataset = [];
            } else {
                let filteredItems = items.filter((item) =>
                    item.toLowerCase().includes(query.toLowerCase())
                );
                let i = 0;
                while (filteredItems[i] !== undefined && i < 6){
                    dataset[i] = filteredItems[i];
                    i++;
                }
                setSearchResults(dataset);
            }
            
        }catch(error){
            throw error;
        }
    }
    // Define functions to handle input changes
    const handleItemClick = (item) => {
        setSelectedItem(item);
        setQuery(item);
        setSearchResults([]);
    };

    return(
        <div>
            <div style={cursorStyle}>
                <div className="search-container">
                    <input
                        type="text"
                        placeholder="Search..."
                        value={query}
                        onChange={handleInputChange}
                        onFocus={() => {
                            setQuery(''); // Clear the search bar input
                            // Clear the search results when focusing on the search bar
                            setSearchResults([]);
                        }}          
                    />
                </div>

                {/* Display search results */}
                {searchResults.length > 0 && (
                    <div className='search-results'>
                        <ul>
                            {searchResults.map((result, index) => (
                            <li
                                key={index}
                                onClick={() => handleItemClick(result)}
                                className={selectedItem === result ? 'selected' : ''}
                            >
                                {result}
                            </li>
                            ))}
                        </ul>
                        
                    </div>
                )} 

                {selectedItem !== null && 
                    <Link to = "/home">
                        <div className='navigate'>
                            <button onClick={props.onButtonClick}>Find my school</button>
                        </div>
                    </Link>
                }
            </div>
        </div> 
    );
}

export default Start;