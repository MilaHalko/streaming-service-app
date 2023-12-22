import React, {useState} from 'react'
import Layout from "../Layout/Layout";
import Filters from "../Components/Filters";
import Movie from "../Components/Movie";
import {CgSpinner} from "react-icons/cg";
import axios from "axios";
import requests from "../Requests";

export default function MoviesPage() {
    const [Movies, setMovies] = React.useState([]);
    const maxPage = 20;
    const [page, setPage] = useState(maxPage);

    React.useEffect(() => {
        const page = 50;
        let movies = [];
        for (let i = 1; i <= page; i++) {
            axios.get(requests.requestPopular + `&page=${i}`).then((response) => {
                movies = [...movies, ...response.data.results];
                setMovies(movies);
            })
        }
    }, [requests.requestPopular]);

    const HandleLoadMore = () => {
        setPage(page + maxPage);

    }

    return (
        <Layout>
            <div className="min-h-screen container mx-auto px-2 my-6">
                <Filters/>
                <p className='text-lg font-medium my-6'>
                    Total <span className='font-bold text-subMain'>{Movies.length}</span>{' '} movies found
                </p>
                <div className='grid xl:grid-cols-4 2xl:grid-cols-5 lg:grid-cols-3 sm:grid-cols-2 gap-6'>
                    {
                        Movies.slice(0, page)?.map((movie, index) => (
                            <Movie key={index} movie={movie}/>
                        ))
                    }
                </div>
                {/* Load more movies */}
                <div className='w-full flex-colo md:my-20 my-10'>
                    <button onClick={HandleLoadMore} className='flex-rows gap-3 text-white py-3 px-8 rounded font-semibold border-2 border-subMain'>
                        More Movies <CgSpinner className='animate-spin'/>
                    </button>
                </div>
            </div>
        </Layout>
    )
}
