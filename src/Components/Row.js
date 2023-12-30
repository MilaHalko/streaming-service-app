import React from 'react'
import MovieImage from "./MovieImage";
import {useNavigate} from "react-router-dom";
import {GetMovieGenres} from "./Functions/GetMovieGenres";

const Text = "text-xs text-left leading-6 px-4 py-3";

function Row({movie, index}) {
    const genres = movie.genres ? movie.genres.map(genre => genre.name) : []
    const navigate = useNavigate()

    return (
        <tr key={index} className={'cursor-pointer'}
            onClick={() => navigate(`/movie/${movie.id}/${movie.title}`)}>
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
                        {index < genres.length - 1 &&
                            <span className="text-sm font-medium">/</span>}
                    </>))}
            </td>

            <td className={`${Text}`}>
                {movie.original_language}
            </td>

            <td className={`${Text} whitespace-nowrap`}>
                {movie.release_date}
            </td>
        </tr>
    )
}

export default Row
