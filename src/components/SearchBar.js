import React, { useState } from 'react';


export default function SearchBar(props) {

    const [searchText, setSearchText] = useState('');

    async function getSuperHero() {
        const response = await fetch(`https://www.superheroapi.com/api.php/1243927912648905/search/${searchText}`)
        const data = await response.json();
        console.log(data);
    }

    function handleChange(e) {
        const searchTerm = e.target.value;

        setSearchText(searchTerm)
        if(searchTerm.length > 3) {
            getSuperHero();
        }
    }

    return (
        <div>
          <input id="searchbar"
           type="search"
            placeholder="Hunt superheroes here..."
            onChange={handleChange}
            value={searchText}
             />
        </div>
    )
}
