import React from 'react'

function MovieImage({movie, h = 'full', styles = ''}) {
    if (movie?.backdrop_path === null && movie?.poster_path === null) {
        console.log(movie)
        console.log('No Image Found')
    }

    return movie?.backdrop_path === null ? (
        <img src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
             alt={movie?.title}
             className={`${styles} w-full object-cover h-${h}`}/>
    ) : (
        <img src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`}
             alt={movie?.title}
             className={`${styles} w-full object-cover h-${h}`}/>
    )
}

export default MovieImage
