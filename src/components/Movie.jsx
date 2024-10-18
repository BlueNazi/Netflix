import React, { useEffect, useState } from 'react';
import BasicCard from './BasicCard';
import { Link } from 'react-router-dom';
import { MdOutlineWatchLater } from "react-icons/md";
import Footer from './Footer';
import Trailer from './Trailer'; // وارد کردن کامپوننت Trailer

function Movie({ setFavorites, favorites, searchResults }) {
    const [movieList, setMovieList] = useState([]);

    const getMovie = () => {
        fetch("https://api.themoviedb.org/3/discover/movie?api_key=323e3fe5a8237f5319c4b400fb4bd2d9")
            .then(res => res.json())
            .then(json => setMovieList(json.results));
    };

    useEffect(() => {
        getMovie();
    }, []);

    const toggleFavorite = (movie) => {
        if (favorites.some(fav => fav.id === movie.id)) {
            setFavorites(favorites.filter(fav => fav.id !== movie.id));
        } else {
            setFavorites([...favorites, movie]);
        }
    };

    const moviesToShow = searchResults.length > 0 ? searchResults : movieList;

    return (
        <>
            <div className='container'>
                {moviesToShow.map((movie) => (
                    <div key={movie.id} className="movie-card">
                        <Link to={`/MovieDetail/${movie.id}`}>
                            <BasicCard movie={movie} />
                        </Link>

                        {/* افزودن کامپوننت Trailer و ارسال movie.id به عنوان props */}
                        <Trailer movieId={movie.id} /> 

                        <button onClick={() => toggleFavorite(movie)} className="favorite-button">
                            <MdOutlineWatchLater className={favorites.some(fav => fav.id === movie.id) ? 'star-filled' : 'star-empty'} />
                        </button>
                    </div>
                ))}
            </div>
            <Footer/>
        </>
    );
}

export default Movie;
