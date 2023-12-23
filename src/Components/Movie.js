import React from 'react'
import {Link} from "react-router-dom";
import {FaHeart, FaRegHeart} from "react-icons/fa";

function Movie({movie}) {
    const [liked, setLiked] = React.useState(false);
    return (
        <>
            <div className='border border-border p-1 hover:scale-105 transitions relative rounded overflow-hidden'>
                <Link to={`/movie/${movie?.title}`} className='w-full'>
                    {
                        movie?.backdrop_path === null ? (
                            <img src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`} alt={movie?.title}
                                 className='w-full h-64 object-cover'/>
                        ) : (
                            <img src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`} alt={movie?.title}
                                 className='w-full h-64 object-cover'/>
                        )
                    }
                </Link>
                <div
                    className='absolute flex-btn gap-2 bottom-0 right-0 left-0 bg-main bg-opacity-60 text-white px-4 py-2'>
                    <h3 className='font-semibold truncate'>{movie?.title}</h3>
                    <button onClick={() => setLiked(!liked)}
                            className='h-10 w-10 text-2xl  flex-colo transitions hover:bg-transparent text-white hover:text-subMain'>
                        {
                            liked ? <FaHeart className='text-red-600'/> : <FaRegHeart/>
                        }
                    </button>
                </div>
            </div>
        </>
    )
}

export default Movie
