import React from 'react'
import {FaRegCalendarAlt} from "react-icons/fa";
import {BiTime} from "react-icons/bi";

// TODO: refactor this component
function FlexMovieItems({movie}) {
    return (
        <>
            {/*<div className="flex items-center gap-2">*/}
            {/*    {movie.list.map((genre, index) => (*/}
            {/*        <>*/}
            {/*        <span className="text-sm font-medium">{genre}</span>*/}
            {/*        {index < movie.genre.length - 1 && <span className="text-sm font-medium">/</span>}*/}
            {/*        </>*/}
            {/*    ))}*/}
            {/*</div>*/}
            {/*<div className="flex items-center gap-2">*/}
            {/*    <FaRegCalendarAlt className="text-subMain w-3 h-3"/>*/}
            {/*    <span className="text-sm font-medium">{movie.year}</span>*/}
            {/*</div>*/}
            {/*<div className="flex items-center gap-2">*/}
            {/*    <BiTime className="text-subMain w-3 h-3"/>*/}
            {/*    <span className="text-sm font-medium">{movie.duration}</span>*/}
            {/*</div>*/}
        </>
    )
}

export default FlexMovieItems
