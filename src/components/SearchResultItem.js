import React from 'react'

function SearchResultItem(props) {
    return (
        <div>
            <div className="search-result">
            <div className="left">
                <img src="https://www.superherodb.com/pictures2/portraits/10/100/10060.jpg" alt="super pic"/>
            </div>
            <div className="right">
                <h1>A-Bomb</h1>
                <div className="stats">
                    <div>Strength: 26</div>
                    <div>Speed: 60</div>
                    <div>Agility: 90</div>
                </div>
            </div>
        </div><br/>
        </div>
    )
}

export default SearchResultItem
