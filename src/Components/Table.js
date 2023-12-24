import React from 'react'
import {FaEdit} from "react-icons/fa";
import {MdDelete} from "react-icons/md";
import {Link} from "react-router-dom";
import {GoEye} from "react-icons/go";
import {GetMovieGenres} from "./Functions/GetMovieGenres";
import MovieImage from "./MovieImage";

const Head = "text-xs text-left text-main font-semibold px-4 py-2 uppercase";
const Text = "text-xs text-left leading-6 whitespace-nowrap px-5 py-3";

const Rows = (movieData, index, admin) => {
    const movie = movieData.movie
    const genres = GetMovieGenres(movie)

    return (
        <tr key={index}>
            <td className={`${Text}`}>
                <div className="w-12 bg-dry border border-border h-12 rounded overflow-hidden">
                    <MovieImage movie={movie}/>
                </div>
            </td>
            <td className={`${Text} truncate`}>{movie.title}</td>
            <td className={`${Text} truncate`}>{genres.map((genre, index) => (<>
                <span>{genre}</span>
                {index < genres.length - 1 && <span className="text-sm font-medium">/</span>}
            </>))}</td>
            <td className={`${Text}`}>{movie.original_language}</td>
            <td className={`${Text}`}>{movie.release_date}</td>
            <td className={`${Text} float-right flex-rows gap-2`}>
                {admin ? (<>
                        <button
                            className="borders border-border bg-dry flex-rows gap-2 text-border rounded py-1 px-2">
                            Edit <FaEdit className="text-green-500"/>
                        </button>
                        <button className="bg-subMain text-white rounded flex-colo w-6 h-6">
                            <MdDelete/>
                        </button>
                    </>)
                    : (<>
                        <Link to={`/movie/${movie?.title}`} className="bg-subMain text-white rounded flex-colo w-6 h-6">
                            <GoEye/>
                        </Link>
                    </>)
                }
            </td>
        </tr>
    )
}

function Table({movies, admin}) {
    return (
        <div className="overflow-x-scroll overflow-hidden relative w-full">
            <table className="w-full table-auto border border-border divide-y divide-border">
                <thead>
                <tr className='bg-dryGray'>
                    <th scope="col" className={`${Head}`}>
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
                        Year
                    </th>
                    {/*<th scope="col" className={`${Head}`}>*/}
                    {/*    Duration*/}
                    {/*</th>*/}
                    <th scope="col" className={`${Head} text-end`}>
                        Actions
                    </th>
                </tr>
                </thead>
                <tbody className="bg-main divide-y divide-gray-800">
                {
                    movies?.map((movie, index) => {
                        return  Rows(movie, index, admin)
                    })
                }
                </tbody>
            </table>
        </div>
    )
}

export default Table
