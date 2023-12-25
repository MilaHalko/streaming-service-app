import React, {useState} from 'react'
import Titles from "../Titles";
import {BsBookmarkStarFill, BsCaretLeftFill, BsCaretRightFill,}
from "react-icons/bs";
import {Swiper, SwiperSlide} from "swiper/react";
import {Autoplay, Navigation} from "swiper/modules";
import 'swiper/css';
import {FaHeart} from "react-icons/fa";
import {Link} from "react-router-dom";
import Rating from "../Stars";
import axios from "axios";
import requests from "../../Requests";
// TODO: Maybe delete?
function TopRated() {
    const [Movies, setMovies] = React.useState([]);
    const [nextEl, setNextEl] = useState(null);
    const [prevEl, setPrevEl] = useState(null);

    React.useEffect(() => {
        axios.get(requests.requestTopRated).then((response) => {
            setMovies(response.data.results);
        })
    }, [requests.requestTopRated]);

    const buttonCaretClass = 'h-10 w-10 text-xl hover:text-2xl flex-colo';

    return (
        <div className="my-16">
            <Titles title="Top Rated" Icon={BsBookmarkStarFill}/>
            <div className="mt-10">
                <Swiper
                    navigation={{nextEl, prevEl}}
                    slidesPerView={4}
                    spaceBetween={20}
                    autoplay={true}
                    speed={800}
                    loop={true}
                    modules={[Navigation, Autoplay]}
                    breakpoints={{
                        0: {slidesPerView: 1},
                        400: {slidesPerView: 2},
                        768: {slidesPerView: 3},
                        1024: {slidesPerView: 4},
                    }}
                >
                    {Movies.map((movie, index) => (
                        <SwiperSlide key={index}>
                            <div className="p-4 h-rate hovered border border-border bg-dry rounded-lg overflow-hidden">
                                {
                                    movie?.backdrop_path === null ? (
                                        <img src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`} alt={movie?.title}
                                             className="w-full h-full object-cover rounded-lg"/>
                                    ) : (
                                        <img src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`} alt={movie?.title}
                                             className="w-full h-full object-cover rounded-lg"/>
                                    )
                                }
                                <div
                                    className="px-4 hovers gap-6 text-center absolute bg-black bg-opacity-70 top-0 bottom-0 left-0 right-0">
                                    <button
                                        className="w-12 h-12 flex-colo transitions hover:bg-subMain rounded-full bg-white bg-opacity-30 text-white">
                                        <FaHeart/>
                                    </button>
                                    <Link className="font-semibold text-xl truncated line-clamp-2"
                                          to={`/movie/${movie.id}/${movie.title}`}>
                                        {movie.title}
                                    </Link>
                                    <div className="flex gap-2 text-star">
                                        <Rating valueBy10={movie.vote_average} icon/>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
                <div className='w-full px-1 flex-rows gap-3 pt-12'>
                    <button ref={(node) => setPrevEl(node)} className={buttonCaretClass}>
                        <BsCaretLeftFill/>
                    </button>
                    <button ref={(node) => setNextEl(node)} className={buttonCaretClass}>
                        <BsCaretRightFill/>
                    </button>
                </div>
        </div>
</div>
)
}

export default TopRated
