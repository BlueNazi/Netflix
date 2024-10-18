import React, { useEffect, useState } from 'react';
import netflix from "../images/netflix.png";
import { Link } from 'react-router-dom';
import { MdOutlineWatchLater } from "react-icons/md";
import Trailer from './Trailer';

export default function Navbar({ favorites, setSearchResults }) {
    const [movieList, setMovieList] = useState([]);
    const [searchQuery, setSearchQuery] = useState("");

    const getMovie = () => {
        fetch("https://api.themoviedb.org/3/discover/movie?api_key=323e3fe5a8237f5319c4b400fb4bd2d9")
            .then(res => res.json())
            .then(json => setMovieList(json.results));
    };

    const searchMovies = (query) => {
        if (query) {
            fetch(`https://api.themoviedb.org/3/search/movie?api_key=323e3fe5a8237f5319c4b400fb4bd2d9&query=${query}`)
                .then(res => res.json())
                .then(json => setSearchResults(json.results));
        } else {
            setSearchResults([]);
        }
    };

    useEffect(() => {
        getMovie();
    }, []);

    return (
        <div className='banner' style={{
            backgroundImage: movieList.length > 0
                ? `url(https://image.tmdb.org/t/p/original${movieList[10]?.poster_path})`
                : 'none'
        }}>
            <div className="navbar-header">
                <img src={netflix} alt="Netflix" className='logo' />
                <div className="search-bar">
                    <input
                        type="text"
                        placeholder="Search for movies..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        onKeyPress={(e) => e.key === 'Enter' && searchMovies(searchQuery)}
                    />
                    <button onClick={() => searchMovies(searchQuery)}>Search</button>
                </div>
                <Link to="/signin">
                    <button className="signin-button">Sign In</button>
                </Link>
                <Link to="/favorites">
                    <button className="favorites-button">
                        Watch Later <MdOutlineWatchLater />
                    </button>
                </Link>
            </div>

            {movieList.length > 0 && (
                <div className='movie-info'>
                    <h2>{movieList[10]?.original_title}</h2>
                    <p>{movieList[10]?.overview}</p>
                </div>
            )}
            <Trailer movieId={movieList[10]} />
        </div>
    );
}


