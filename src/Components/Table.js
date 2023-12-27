import React from 'react'
import Row from "./Row";
import {MovieContextConsumer} from "../Context/MovieContext";

const Head = "text-xs text-left text-main font-semibold px-4 py-2 uppercase";

function Table({movies}) {
    const {GetMovieById} = MovieContextConsumer()

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
                        return <Row movie={movie} index={index}/>
                    })
                }
                </tbody>
            </table>
        </div>
    )
}

export default Table
