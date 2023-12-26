import React, {useState} from 'react'
import Layout from "../Layout/Layout";
import {Link, useParams} from "react-router-dom";
import {BiArrowBack} from "react-icons/bi";
import {FaPlay} from "react-icons/fa";
import {MovieContextConsumer} from "../Context/MovieContext";
import MovieLikeButton from "../Components/Buttons/MovieLikeButton";
import MovieImage from "../Components/MovieImage";

function WatchPage() {
    const {GetMovieById} = MovieContextConsumer()
    let {id} = useParams();
    const movie = GetMovieById(id)
    console.log(movie)
    const [play, setPlay] = useState(false);

    return (
        <Layout>
            <div className='container mx-auto bg-dry p-6 mb-12'>

                {/* Top Section */}
                <div className='flex-btn flex-wrap mb-6 gap-2 bg-main rounded border border-gray-800 p-6'>
                    <Link to={`/movie/${movie?.id}/${movie?.title}`}
                          className='md:text-xl text-sm flex gap-3 items-center font-bold text-dryGray'>
                        <BiArrowBack/> {movie?.title}
                    </Link>
                    <div className='flex-btn sm:w-auto w-full gap-5'>
                        <MovieLikeButton movie={movie}/>
                    </div>
                </div>

                {/* Video Section */}
                {
                    play ? (
                        <video controls autoPlay={play} className='w-full h-full rounded'>
                            <source src={`/videos/trailers/Dota 2 - Join the Battle.mp4`} type="video/mp4" title={movie?.name}/>
                        </video>
                    ) : (
                        <div className='w-full h-screen rounded-lg overflow-hidden relative'>
                            <div className='absolute top-0 left-0 bottom-0 right-0 bg-main bg-opacity-30 flex-colo'>
                                <button onClick={() => setPlay(true)}
                                        className='bg-white text-subMain flex-colo border border-subMain rounded-full w-20 h-20 font-medium text-xl'>
                                    <FaPlay/>
                                </button>
                            </div>
                            <MovieImage movie={movie} styles={'w-full h-full object-cover rounded-lg'}/>
                        </div>
                    )
                }
            </div>
        </Layout>
    )
}

export default WatchPage
