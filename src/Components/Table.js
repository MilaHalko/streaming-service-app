import React from 'react'
import {FaEdit} from "react-icons/fa";
import {useNavigate} from "react-router-dom";
import {GetMovieGenres} from "./Functions/GetMovieGenres";
import MovieImage from "./MovieImage";
import {AiOutlineClose} from "react-icons/ai";
import {MovieContextConsumer} from "../Context/MovieContext";

const Head = "text-xs text-left text-main font-semibold px-4 py-2 uppercase";
const Text = "text-xs text-left leading-6 px-4 py-3";

const Rows = (movieData, index) => {
    const movie = movieData.movie
    const genres = GetMovieGenres(movie)
    const navigate = useNavigate()

    return (
        <tr key={index} className={'cursor-pointer'} onClick={() => navigate(`/movie/${movie.id}/${movie.title}`)}>
            <td className={`h-full hidden sm:table-cell`}>
                <MovieImage movie={movie}/>
            </td>

            <td className={`${Text} cursor-pointer`}>
                {movie.title}
            </td>

            <td className={`${Text}`}>
                {
                    genres.map((genre, index) => (<>
                        <span>{genre}</span>
                        {index < genres.length - 1 && <span className="text-sm font-medium">/</span>}
                    </>))}
            </td>

            <td className={`${Text}`}>
                {movie.original_language}
            </td>

            <td className={`${Text} whitespace-nowrap`}>
                {movie.release_date}
            </td>

            {/*<td className={`${Text} justify-between h-full`}>*/}
            {/*    <button className="text-white text-lg rounded flex-colo w-6 h-6 hover:text-subMain m-2 cursor-pointer"*/}
            {/*            onClick={() => {*/}
            {/*                RemoveFromFavorites(movie)*/}
            {/*            }}>*/}
            {/*        <AiOutlineClose/>*/}
            {/*    </button>*/}

            {/*    {admin && (*/}
            {/*        <>*/}
            {/*            <button className="borders border-border bg-dry flex-rows gap-2 text-border rounded py-1 px-2 cursor-pointer">*/}
            {/*                Edit <FaEdit className="text-green-500"/>*/}
            {/*            </button>*/}
            {/*        </>*/}
            {/*    )}*/}
            {/*</td>*/}
        </tr>
    )
}

function Table({movies, admin}) {
    return (
        <div className="overflow-x-auto w-full rounded-t-md">
            <table className="w-full table-auto">
                <thead>
                <tr className='bg-dryGray'>
                    <th scope="col" className={`${Head} hidden sm:table-cell`}>
                        Image
                    </th>
                    <th scope="col" className={`${Head}`}>
                        Name
                    </th>
                    <th scope="col" className={`${Head}`}>
                        Genres
                    </th>
                    <th scope="col" className={`${Head}`}>
                        Language
                    </th>
                    <th scope="col" className={`${Head}`}>
                        Release
                    </th>
                </tr>
                </thead>
                <tbody className="bg-main divide-y-[3px] divide-dry">
                {
                    movies?.map((movie, index) => {
                        return Rows(movie, index)
                    })
                }
                </tbody>
            </table>
        </div>
    )
}

export default Table
