import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

function MovieDetail() {
    const { id } = useParams(); 
    const [movieDetail, setMovieDetail] = useState(null);
    const [trailerKey, setTrailerKey] = useState('');

    const getMovieDetail = () => {
        fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=323e3fe5a8237f5319c4b400fb4bd2d9`)
            .then(res => res.json())
            .then(json => setMovieDetail(json));
    };

    const getMovieTrailer = () => {
        fetch(`https://api.themoviedb.org/3/movie/${id}/videos?api_key=323e3fe5a8237f5319c4b400fb4bd2d9`)
            .then(res => res.json())
            .then(json => {
                const trailer = json.results.find(video => video.type === 'Trailer' && video.site === 'YouTube');
                if (trailer) {
                    setTrailerKey(trailer.key);
                }
            });
    };

    useEffect(() => {
        getMovieDetail();
        getMovieTrailer();
    }, [id]);

    if (!movieDetail) {
        return <div>Loading...</div>;
    }

    return (
        <div 
            className="movie-detail" 
            style={{
                backgroundImage: `url(https://image.tmdb.org/t/p/w1280${movieDetail.backdrop_path})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                height: '100vh',
                color: 'white',
                padding: '20px',
            }}>
            <div className="movie-info">
                <h1>{movieDetail.title}</h1>
                <p>{movieDetail.overview}</p>
                <p><strong>Release Date:</strong> {movieDetail.release_date}</p>
                <p><strong>Rating:</strong> {movieDetail.vote_average}/10</p>

                {trailerKey && (
                    <a href={`https://www.youtube.com/watch?v=${trailerKey}`}>
                        <button className="trailer-button">Watch Trailer</button>
                    </a>
                )}
            </div>
        </div>
    );
}

export default MovieDetail;
