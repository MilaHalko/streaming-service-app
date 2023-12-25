import React from 'react'
import {Swiper, SwiperSlide} from "swiper/react";
import {Autoplay} from "swiper/modules";
import MovieItems from "../MovieItems";
import {Link} from "react-router-dom";
import axios from "axios";
import MovieImage from "../MovieImage";
import MovieLikeButton from "../MovieLikeButton";

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
                {Movies?.slice(0, 7).map((movie, index) => (
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
                                <MovieLikeButton movie={movie} className="ml-4"/>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    )
}

export default Banner
