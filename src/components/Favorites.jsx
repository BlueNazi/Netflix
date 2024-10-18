import React from 'react';
import BasicCard from './BasicCard';
import "../App.css"

function Favorites({ favorites }) {
    return (
        <div className='favorites-container'>
            {favorites.map((movie) => (
                <BasicCard key={movie.id} movie={movie} />
            ))}
        </div>
    );
}

export default Favorites;
