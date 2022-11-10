import React from 'react';

const MovieCard = ({movie}) => {
    return(
        <div className="card">
            <img src={movie.Poster==="N/A"? "./assets/poster.png": movie.Poster} alt="poster" className="card-img" />
            <p className="card-details">
            <b>{movie.Title}</b><br />
            Year: {movie.Year} <br />
            </p>
        </div>
    );
}

export default MovieCard;