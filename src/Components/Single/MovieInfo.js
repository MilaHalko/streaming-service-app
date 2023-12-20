import React from 'react'
import FlexMovieItems from "../FlexMovieItems";
import {FaPlay} from "react-icons/fa";
import {Link} from "react-router-dom";

function MovieInfo({movie}) {
    return (
        <div className='w-full xl:h-screen relative text-white'>
            <img src={`/images/movies/${movie?.image}`} alt={movie.name} className='w-full h-full hidden xl:inline-block object-cover'/>
            <div className='xl:bg-main bg-dry flex-colo xl:bg-opacity-90 xl:absolute top-0 left-0 bottom-0 right-0'>
                <div className='container px-3 mx-auto 2xl:px-32 xl:grid grid-cols-3 flex-colo py-10 lg:py-20 gap-8'>
                    <div className='xl:col-span-1 w-full xl:order-none order-last h-header bg-dry border border-gray-800 rounded-lg overflow-hidden'>
                        <img src={`/images/movies/${movie?.image}`} alt={movie?.name} className='w-full h-full object-cover'/>
                    </div>
                    <div className='col-span-2 items-center'>
                        {/* Movie Info */}
                        <div className='flex flex-col gap-10'>
                            {/* Title */}
                            <h1 className='xl:text-4xl capitalize font-sans text-2xl font-bold'>{movie?.name}</h1>
                            {/* Stats */}
                            <div className='sm:flex items-center gap-4 font-medium text-dryGray'>
                                <div className='flex flex-colo bg-subMain text-xs px-2 py-1 my-1 max-w-fit mb'>
                                    HD 4K
                                </div>
                                <FlexMovieItems movie={movie && movie}/>
                            </div>
                            {/* Description */}
                            <p className='text-text text-sm leading-7'>{movie?.description}</p>
                            <div className='grid grid-cols-3 gap-4 p-6 bg-main border border-gray-800 rounded-lg'>
                                {/* Language */}
                                <div className='col-span-1 flex-colo font-medium text-sm'>
                                    <p>Language: <span className='ml-2 truncate'>{movie?.language}</span></p>
                                </div>
                                {/* Watch Button */}
                                <div className='sm:col-span-2 col-span-3 flex justify-end font-medium text-sm'>
                                    <Link to={`/watch/${movie?.name}`} className='bg-dry py-4 hover:bg-subMain transitions border-2 border-subMain rounded-full flex-rows gap-4 w-full sm:py-3'>
                                        <FaPlay className='w-3 h-3'/> Watch Now
                                    </Link>
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
