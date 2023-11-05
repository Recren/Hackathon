import React, {useState} from 'react';

async function getUniName(){
    fetch('world_universities_and_domains.json')
    .then(response => {
        const data = response.data.items.filter((item) => item.country == 'United States');
        let dataElements = [["", ""], ["", ""], ["", ""], ["", ""], ["", ""]];
        data.forEach((item, index) => {
            dataElements[index] = String(item.name);
        });
  
        return dataElements;
    })
}

function start(){

}