import React from 'react'
import Titles from "../Titles";
import {BsCollectionFill} from "react-icons/bs";
import Movie from "../Movie";
import {MovieContextConsumer} from "../../Context/MovieContext";

function MoviesBlock({title, request, movieCount}) {
    const {GetMoviesByRequest} = MovieContextConsumer()
    const Movies = GetMoviesByRequest(request, movieCount);

    return (
        <div className='my-10'>
            <Titles title={title} Icon={BsCollectionFill}/>
            <div className='grid sm:mt-10 mt-6 xl:grid-cols-5 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-5'>
                {Movies.map((movie, index) => (
                    <Movie key={index} movie={movie}/>
                ))}
            </div>
        </div>
    )
}

export default MoviesBlock
