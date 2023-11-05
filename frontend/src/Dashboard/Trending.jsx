import React, {useState} from 'react';
import Header from './Header';

function Trending(){
    const [items, setItems] = useState([]);

    async function getInventory(){
        return fetch('http://localhost:4000/api/listings')
        .then((response) => response.json())
        .then((items) => {
          console.log(items)
          setItems(items);
        })
        .catch((error) => {
          console.error('Error fetching data:', error);
        });
    }

    getInventory();
    return(
        <Header />
    );
} 

export default Trending;