import React, {useEffect} from 'react'
import Layout from "../Layout/Layout";
import {useNavigate, useParams} from "react-router-dom";
import MovieInfo from "../Components/Single/MovieInfo";
import MovieCasts from "../Components/Single/MovieCasts";
import MovieRates from "../Components/Single/MovieRates";
import Titles from "../Components/Titles";
import {BsCollectionFill} from "react-icons/bs";
import Movie from "../Components/Movie";
import {MovieContextConsumer} from "../Context/MovieContext";
import requests from "../Requests";
import axios from "axios";

function SingleMovie() {
    const {id} = useParams();
    const {GetMovieById} = MovieContextConsumer()
    const navigate = useNavigate()
    // const movie = GetMovieById(id);

    const [movie, setMovie] = React.useState()
    React.useEffect(() => {
        let request = requests.requestMovie(id)
        axios.get(request).then((response) => {
            setMovie(response.data)
        })
    }, [id])

    let RelatedMovies = [movie];

    return (
        <Layout>
            {
                movie && (
                    <>
                        <MovieInfo movie={movie}/>
                        <div className="container mx-auto min-h-screen px-2 my-6">
                            <MovieRates movie={movie}/>
                            <div className="my-16">
                                <Titles title="Related Movies" Icon={BsCollectionFill}/>
                                <div
                                    className='mt-10 grid xl:grid-cols-4 2xl:grid-cols-5 lg:grid-cols-3 sm:grid-cols-2 gap-6'>
                                    {
                                        RelatedMovies.map((movie, index) => (
                                            <Movie key={index} movie={movie}/>
                                        ))
                                    }
                                </div>
                            </div>
                        </div>
                    </>
                )}
        </Layout>
    )
}

export default SingleMovie