import React from 'react'
import Layout from "../Layout/Layout";
import {useParams} from "react-router-dom";
import {MoviesData} from "../Data/moviesData";
import MovieInfo from "../Components/Single/MovieInfo";
import MovieCasts from "../Components/Single/MovieCasts";
import MovieRates from "../Components/Single/MovieRates";
import Titles from "../Components/Titles";
import {BsCollectionFill} from "react-icons/bs";
import Movie from "../Components/Movie";

function SingleMovie() {
    const {id} = useParams();
    const movie = MoviesData.find((movie) => movie.name === id);
    let RelatedMovies = [];
    for (let i = 0; i < movie.genre.length; i++) {
        RelatedMovies = MoviesData.filter((another) => another.genre.includes(movie.genre[i]) && another.name !== movie.name);
    }
    return (
        <Layout>
            <MovieInfo movie={movie}/>
            <div className="container mx-auto min-h-screen px-2 my-6">
                <MovieCasts movie={movie}/>
                <MovieRates movie={movie}/>
                <div className="my-16">
                    <Titles title="Related Movies" Icon={BsCollectionFill}/>
                    <div className='grid xl:grid-cols-4 2xl:grid-cols-5 lg:grid-cols-3 sm:grid-cols-2 gap-6'>
                        {
                            RelatedMovies.map((movie, index) => (
                                <Movie key={index} movie={movie}/>
                            ))
                        }
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default SingleMovie