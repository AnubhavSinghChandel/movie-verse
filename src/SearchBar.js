import React from "react"
import { GoSearch } from 'react-icons/go';
import { useState } from "react";

const SearchBar = () => {
    const [search, setSearch] = useState('');
    keyPress = (e) => {
        if (e.key === 'Enter') {
            setSearch(e.target.value);
        }
    }
    return (
        <div className="search">
            <input type="text"
                placeholder="Search for a Movie"
                value={search}
                onChange={(e) => {
                    setSearch(e.target.value);
                }}
                onKeyDown={keyPress}
            />
            <GoSearch onClick={() => { search }} />
        </div>
    );
}

export default SearchBar;