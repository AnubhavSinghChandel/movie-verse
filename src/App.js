import './App.css';
import { useState, useEffect } from 'react';
import { GoSearch } from 'react-icons/go';
import MovieCard from './MovieCard';
// import SearchIcon from './search-icon.svg';

// cb7e2fb4 is the API key from OMDB

const API_URL = 'http://www.omdbapi.com/?apikey=cb7e2fb4';

function App() {

    const [search, setSearch] = useState('');
    const [movies, setMovies] = useState([])

    const searchMovies = async (title) => {
        const response = await fetch(`${API_URL}&s=${title}`);
        const data = await response.json();

        setMovies(data.Search);
    }

    useEffect(() => {
        searchMovies('Batman');
    }, [])

    const keyPress = (e) => {
        if (e.key === 'Enter') {
            searchMovies(search);
        }
        // console.log(e.keyCode)
    }

    return (
        <div className="app">
            <h1>MovieVerse</h1>
            <div className="search">
                <input type="text"
                    placeholder="Search for a Movie"
                    value={search}
                    onChange={(e) => {
                        setSearch(e.target.value);
                    }}
                    onKeyDown={keyPress}
                />
                <GoSearch onClick={() => { searchMovies(search) }} />
            </div>
            {
                movies.length > 0 ?
                    <div className="container">
                        {movies.map((movies) => {
                            return (<MovieCard movie={movies} />)
                        })}
                    </div>
                    : <div className="empty">
                        <h2>No Movies found</h2>
                    </div>
            }

        </div>
    );
}

export default App;
