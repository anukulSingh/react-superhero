import React from 'react'

function SearchResultItem(props) {
    const {data} = props;
    return (
        <div>
            <div className="search-result">
            <div className="left">
                <img src={data.image.url} alt={data.name}/>
            </div>
            <div className="right">
                <h1>{data.name}</h1>
                <span style={{color: 'coral'}}>{data.biography['full-name']}</span><hr/>
                <div className="stats">
                    <div>Strength: {data.powerstats.strength}</div>
                    <div>Speed: {data.powerstats.speed}</div>
                     <div>Power: {data.powerstats.power}</div>
                </div>
            </div>
        </div><br/>
        </div>
    )
}

export default SearchResultItem
