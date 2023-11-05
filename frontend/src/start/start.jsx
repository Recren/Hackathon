import React, {useState} from 'react';

function getUniList(){
    fetch('world_universities_and_domains.json')
    .then(response => {
        const data = response.data.items.filter((item) => item.country == 'United States');
        return data;
    })
}
const uniList = getUniList();

function Start(){
    const [items, setItems] = useState([uniList]);
    const [query, setQuery] = useState('');
    const [searchResults, setSearchResults] = useState([]);
    const [selectedItem, setSelectedItem] = useState([]);

     //handle search bar input change
    const handleInputChange = (e) => {
        const inputValue = e.target.value;
        setQuery(inputValue);
        handleSearch(inputValue); // Call the provided callback with the query
    };
    
    //cursor 
    const cursorStyle = { cursor: 'pointer'};
    
    let dataset = [["", ""], ["", ""], ["", ""], ["", ""], ["", ""]];
    // Define a callback function to handle search
    const handleSearch = async (query) => {
        try{
            if(query === ""){
                dataset = [""];
            } else {
                const filteredItems = items.filter((item) =>
                    item.toLowerCase().includes(searchQuery.toLowerCase())
                );
                setSearchResults(dataset);
            }
            
        }catch(error){
            throw error;
        }
    }

    // Define functions to handle input changes
    const handleItemClick = (item) => {
        setSelectedItem(item);
    };

    return(
        <div>
            <div className="search-container" style={cursorStyle}>
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
                    {selectedItem && <p>School: {selectedItem}</p>}
                </div>
            )} 
        </div> 
    );
}

export default Start;