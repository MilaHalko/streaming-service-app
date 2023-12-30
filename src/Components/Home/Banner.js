import React from 'react'
import {Swiper, SwiperSlide} from "swiper/react";
import {Autoplay} from "swiper/modules";
import MovieItems from "../MovieItems";
import {Link} from "react-router-dom";
import MovieImage from "../MovieImage";
import {MovieContextConsumer} from "../../Context/MovieContext";

function Banner({fetchUrl}) {
    const {GetMoviesByRequest} = MovieContextConsumer()
    const Movies = GetMoviesByRequest(fetchUrl, 10);

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
                {Movies?.map((movie, index) => (
                    <SwiperSlide key={index} className="relative rounded">
                        <MovieImage movie={movie}/>
                        <div className="absolute linear-bg xl:pl-52 sm:pl-32 pl-8 top-0 bottom-0 left-0 right-0 flex flex-col justify-center md:gap-4 gap-3">
                            <h1 className="xl:text-4xl truncate capitalize font-sans sm:text-2xl text-xl font-bold pb-1">
                                {movie.title}
                            </h1>
                            <div className="flex text-dryGray">
                                <MovieItems movie={movie}/>
                            </div>
                            <div className="flex">
                                <Link to={`/movie/${movie.id}/${movie.title}`}
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
