import React from 'react'

function MovieImage({movie}) {
    return movie?.backdrop_path === null ? (
        <img src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`} alt={movie?.title}
             className="w-full h-full object-cover"/>
    ) : (
        <img src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`}
             alt={movie?.title}
             className="w-full h-full object-cover"/>
    )
}

export default MovieImage
