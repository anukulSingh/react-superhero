import React, { useState } from 'react';


export default function SearchBar(props) {

    const { handleChange, searchText } = props;

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
