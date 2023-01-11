import React from "react"
import SearchIcon from './search-icon.svg';

const SearchBar = () => {
    return (
        <div className="search">
            <input type="text"
                placeholder="Search for a Movie"
                value='Wall-E'
                onChange={() => { }}
            />
            <img src={SearchIcon} alt="search" />
        </div>
    );
}

export default SearchBar;