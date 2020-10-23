import React, { useState } from 'react';
import Navbar from './components/Navbar'
import SearchBar from './components/SearchBar';
import SearchResults from './components/SearchResults';



function App() {

  const [searchText, setSearchText] = useState('');
  const [superheroData, setSuperheroData] = useState([]);

    async function getSuperHero() {
        const response = await fetch(`https://www.superheroapi.com/api.php/1243927912648905/search/${searchText}`)
        const data = await response.json();
        console.log(data);
        setSuperheroData(data.results)
    }

    function handleChange(e) {
        const searchTerm = e.target.value;

        setSearchText(searchTerm)
        if(searchTerm.length > 3) {
            getSuperHero();
        }
        else {
          setSuperheroData([])
        }
    }
  return (
    <div className="App">
     <Navbar />
     <div className="main">
     <SearchBar searchText={searchText} handleChange={handleChange} />
     <SearchResults superheroData={superheroData} />
    </div>
    </div>
  );
}

export default App;
