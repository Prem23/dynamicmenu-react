import React from 'react';
import './Searchbar.scss';
import search from './search.png';

function SearchBar() {
    return (
        <div className="search-bar">
            <img className="search-icon" alt="search" src={search} />
            <input
                type="text"
                placeholder="Search something"
                className="search-input"
            />
        </div>
    );
}

export default SearchBar;