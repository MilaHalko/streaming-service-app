import React from 'react'
import MovieItems from "../MovieItems";
import {FaPlay} from "react-icons/fa";
import {Link} from "react-router-dom";
import MovieImage from "../MovieImage";
import MovieLikeButton from "../Buttons/MovieLikeButton";

function MovieInfo({movie}) {
    return (
        <div className='w-full xl:h-screen relative text-white'>
            <MovieImage movie={movie} styles={'hidden xl:inline-block'}/>

            <div className='xl:bg-main bg-dry flex-colo xl:bg-opacity-90 xl:absolute top-0 left-0 bottom-0 right-0'>
                <div className='container px-3 mx-auto 2xl:px-32 xl:grid grid-cols-3 flex-colo py-10 lg:py-20 gap-8'>

                    <div
                        className='xl:col-span-1 w-full xl:order-none order-last h-header bg-dry border border-gray-800 rounded-lg overflow-hidden'>
                        <MovieImage movie={movie}/>
                    </div>

                    <div className='col-span-2 items-center'>
                        <div className='flex flex-col gap-8'>
                            {/* Title */}
                            <h1 className='xl:text-4xl capitalize font-sans text-2xl font-bold'>
                                {movie?.title}
                            </h1>

                            {/* Stats */}
                            <div className='ml-6 sm:flex items-center gap-4 font-medium text-dryGray'>
                                <div className='flex flex-colo bg-subMain text-xs px-2 py-1 my-1 max-w-fit mb'>
                                    HD 4K
                                </div>
                                <MovieItems movie={movie}/>
                            </div>

                            {/* Description */}
                            <p className='text-text ml-6 text-sm leading-7'>
                                {movie?.overview}
                            </p>

                            <div className='grid grid-cols-7 gap-4 p-6 bg-main border border-gray-800 rounded-lg'>
                                {/* Language */}
                                <div className='col-span-2 flex justify-start items-center font-medium text-sm'>
                                    <p className={'mr-2'}>Language: <span>{movie?.original_language}</span></p>
                                </div>

                                {/* Watch Button */}
                                <div className='col-span-4 flex justify-between font-medium text-sm'>
                                    <Link to={`/watch/${movie?.title}`}
                                          className='bg-dry py-4 hover:bg-subMain transitions border-2 border-subMain rounded-full flex-rows gap-4 w-full sm:py-3'>
                                        <FaPlay className='w-3 h-3'/> Watch Now
                                    </Link>
                                </div>

                                <div className='col-span-1 flex items-center justify-end'>
                                    <MovieLikeButton movie={movie}/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MovieInfo
