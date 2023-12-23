import React from 'react'
import {Swiper, SwiperSlide} from "swiper/react";
import {Autoplay} from "swiper/modules";
import FlexMovieItems from "../FlexMovieItems";
import {Link} from "react-router-dom";
import axios from "axios";

function Banner({fetchUrl}) {
    const [Movies, setMovies] = React.useState([]);

    React.useEffect(() => {
        axios.get(fetchUrl).then((response) => {
            setMovies(response.data.results);
        })
    }, [fetchUrl]);

    return (
        <div className="relative w-full">
            <Swiper
                direction={'vertical'}
                slidesPerView={1}
                loop={true}
                speed={1000}
                modules={[Autoplay]}
                autoplay={{delay: 4000, disableOnInteraction: false}}
                className="w-full xl:h-[600px] bg-dry lg:h-[500px] h-[350px] overflow-hidden"
            >
                {Movies?.slice(10, 15).map((movie, index) => (
                    <SwiperSlide key={index} className="relative rounded">
                        {
                            movie?.backdrop_path === null ? (
                                <img src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`} alt={movie?.title}
                                     className="w-full h-full object-cover"/>
                            ) : (
                                <img src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`}
                                     alt={movie?.title}
                                     className="w-full h-full object-cover"/>
                            )
                        }
                        <div className="absolute linear-bg xl:pl-52 sm:pl-32 pl-8 top-0 bottom-0 left-0 right-0 flex flex-col justify-center lg:gap-8 md:gap-5 gap-4">
                            <h1 className="xl:text-4xl truncate capitalize font-sans sm:text-2xl text-xl font-bold pb-1">
                                {movie.title}
                            </h1>
                            <div className="flex gap-5 items-center text-dryGray">
                                <FlexMovieItems movie={movie}/>
                            </div>
                            <div className="flex gap-5 items-center">
                                <Link to={`/movie/${movie.title}`}
                                      className="bg-subMain hover:text-main transitions text-white px-8 py-3 rounded font-medium sm:text-sm text-xs">
                                    Watch Now
                                </Link>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    )
}

export default Banner
