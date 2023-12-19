import React, {useState} from 'react'
import Layout from "../Layout/Layout";
import {MoviesData} from "../Data/moviesData";
import {Link, useParams} from "react-router-dom";
import {BiArrowBack} from "react-icons/bi";
import {FaHeart, FaPlay} from "react-icons/fa";

function WatchPage() {
    let {id} = useParams();
    console.log("id", id); // "id", "the-dark-knight
    const movie = MoviesData.find((movie) => movie.name === id);
    const [play, setPlay] = useState(false);
    return (
        <Layout>
            <div className='container mx-auto bg-dry p-6 mb-12'>
                {/* Top Section */}
                <div className='flex-btn flex-wrap mb-6 gap-2 bg-main rounded border border-gray-800 p-6'>
                    <Link to={`/movie/${movie?.name}`}
                          className='md:text-xl text-sm flex gap-3 items-center font-bold text-dryGray'>
                        <BiArrowBack/> {movie?.name}
                    </Link>
                    <div className='flex-btn sm:w-auto w-full gap-5'>
                        <button
                            className='bg-white hover:text-subMain transitions bg-opacity-30 text-white rounded px-3 py-3 text-sm'>
                            <FaHeart/>
                        </button>
                    </div>
                </div>
                {/* Video Section */}
                {
                    play ? (
                        <video controls autoPlay={play} className='w-full h-full rounded'>
                            <source src={`/videos/trailers/${movie?.trailer}`} type="video/mp4" title={movie?.name}/>
                        </video>
                    ) : (
                        <div className='w-full h-screen rounded-lg overflow-hidden relative'>
                            <div className='absolute top-0 left-0 bottom-0 right-0 bg-main bg-opacity-30 flex-colo'>
                                <button onClick={() => setPlay(true)} className='bg-white text-subMain flex-colo border border-subMain rounded-full w-20 h-20 font-medium text-xl'>
                                    <FaPlay/>
                                </button>
                            </div>
                            <img src={movie?.image ? `/images/movies/${movie?.image}` : '/images/cinemaPosters/charactersPoster.jpg'}
                                 alt={movie?.name} className=' w-full h-full object-cover rounded-lg'/>
                        </div>
                    )
                }
            </div>
        </Layout>
    )
}

export default WatchPage
