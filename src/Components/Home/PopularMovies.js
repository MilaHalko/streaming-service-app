import React from 'react'
import Titles from "../Titles";
import {BsCollectionFill} from "react-icons/bs";
import Movie from "../Movie";
import axios from "axios";
import requests from "../../Requests";

function PopularMovies() {
    const [Movies, setMovies] = React.useState([]);

    React.useEffect(() => {
        axios.get(requests.requestPopular).then((response) => {
            setMovies(response.data.results);
        })
    }, [requests.requestPopular]);

    return (
        <div className='my-16'>
            <Titles title='Popular Movies' Icon={BsCollectionFill}/>
            <div className='grid sm:mt-12 mt-6 lg:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-5'>
                {Movies.map((movie, index) => (
                    <Movie key={index} movie={movie}/>
                ))}
            </div>
        </div>
    )
}

export default PopularMovies
