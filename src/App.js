// import './App.css';
import { useEffect } from 'react';
import SearchBar from './SearchBar';
// import SearchIcon from './search-icon.svg';

// cb7e2fb4

const API_URL = 'http://www.omdbapi.com/?apikey=cb7e2fb4';

function App() {

    const searchMovies = async (title) => {
        const response = await fetch(`${API_URL}&s=${title}`);
        const data = await response.json();

        console.log(data.Search);
    }

    useEffect(() => {
        searchMovies('Despicable Me');
    }, [])

    return (
        <div className="app">
            <h1>MovieVerse</h1>
            <SearchBar />
        </div>
    );
}

export default App;
