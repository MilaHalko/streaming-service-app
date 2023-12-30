import React, {useState} from 'react'
import Layout from "../Layout/Layout";
import Filters from "../Components/Filters";
import Movie from "../Components/Movie";
import {CgSpinner} from "react-icons/cg";
import requests from "../Requests";
import {MovieContextConsumer} from "../Context/MovieContext";
import {useNavigate, useParams} from "react-router-dom";

export default function MoviesPage() {
    const {GetMoviesByRequest2} = MovieContextConsumer()
    const {title} = useParams()
    const maxPage = 20;
    const [request, setRequest] = useState(requests.requestPopular);
    const [page, setPage] = useState(maxPage);
    const [Movies, setMovies] = useState([]);

    React.useEffect(() => {
        if (title && title !== 'Popular') setRequest(requests.requestTitle(title))
        const fetchMovies = async () => {
            const movies = await GetMoviesByRequest2(request, page)
            setMovies(movies)
        }
        fetchMovies()
    }, [request, page])

    const handleLoadMore = () => {
        setPage(page + maxPage);
    }

    const handleFilter = (genre, year) => {

        // Simple Request for All Movies
        if (title && title === 'Popular') {
            setRequest(requests.requestMovies(year, genre))
        }

        // Request for Movies by Title
        else {
            if (title) setRequest(requests.requestTitle(title))

            // Filter Movies by Genre and Year
            setMovies(Movies.filter(movie => {
                let genrePass = true
                let yearPass = true
                if (genre) {
                    const movieGenre = movie.genre_ids
                    genrePass = movieGenre.includes(genre)
                }
                if (year) {
                    const movieYear = movie.release_date.substring(0, 4)
                    yearPass = movieYear === `${year}`
                }
                return genrePass && yearPass
            }))
        }
    }

    return (
        <Layout searchTitle={title}>
            <div className="px-5">

                {/* Filters */}
                <Filters handleFilter={handleFilter}/>
                <p className='text-lg font-medium my-6'>
                    {/*Total <span className='font-bold text-subMain'>{Movies.length}</span>{' '} movies found*/}
                </p>

                {/* Movies */}
                <div className='grid xl:grid-cols-4 2xl:grid-cols-5 lg:grid-cols-3 sm:grid-cols-2 gap-6'>
                    {
                        Movies.slice(0, page)?.map((movie, index) => (
                            <Movie key={index} movie={movie}/>
                        ))
                    }
                </div>

                {/* Load more movies */}
                <div className='w-full flex-colo md:my-20 my-10'>
                    <button onClick={handleLoadMore}
                            className='flex-rows gap-3 text-white py-3 px-8 rounded font-semibold border-2 border-subMain'>
                        More Movies <CgSpinner className='animate-spin'/>
                    </button>
                </div>
            </div>
        </Layout>
    )
}
