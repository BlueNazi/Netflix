import React from 'react';
import { Link } from 'react-router-dom';

function BasicCard({ movie }) {
  return (
    <Link to={"/MovieDetail"}>
    <div className="card">
      <img className="poster" src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
      <h2 className="movie-title">{movie.title}</h2>
    </div>
    </Link>
  );
}

export default BasicCard;
