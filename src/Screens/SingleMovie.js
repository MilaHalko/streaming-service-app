import React from 'react'
import Layout from "../Layout/Layout";
import {useParams} from "react-router-dom";
import MovieInfo from "../Components/Single/MovieInfo";
import MovieRates from "../Components/Single/MovieRates";
import {MovieContextConsumer} from "../Context/MovieContext";

function SingleMovie() {
    const {id} = useParams();
    const {GetMovieById} = MovieContextConsumer()
    const movie = GetMovieById(id)

    return (
        <Layout>
            {
                movie && (
                    <>
                        <MovieInfo movie={movie}/>
                        <div className="container mx-auto min-h-screen px-2 my-6">
                            <MovieRates movie={movie}/>
                        </div>
                    </>
                )}
        </Layout>
    )
}

export default SingleMovie