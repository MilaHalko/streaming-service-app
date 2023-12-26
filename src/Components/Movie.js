import React from 'react'
import {Link} from "react-router-dom";
import MovieImage from "./MovieImage";
import MovieLikeButton from "./Buttons/MovieLikeButton";

function Movie({movie}) {
    return (
        <>
            <div className='border border-border p-1 hover:scale-105 transitions relative rounded overflow-hidden'>
                <Link to={`/movie/${movie.id}/${movie?.title}`} className='w-full'>
                    <MovieImage movie={movie} h={'64'}/>
                </Link>
                <div
                    className='absolute flex-btn gap-2 bottom-0 right-0 left-0 bg-main bg-opacity-60 text-white px-4 py-2'>
                    <h3 className='font-semibold truncate'>{movie?.title}</h3>
                    <MovieLikeButton movie={movie}/>
                </div>
            </div>
        </>
    )
}

export default Movie
