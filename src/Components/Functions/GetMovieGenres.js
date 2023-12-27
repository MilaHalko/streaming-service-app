import React from 'react'
import requests from "../../Requests";
import axios from "axios";

export function GetMovieGenres(movie) {
    const [genres, setGenres] = React.useState([])
    React.useEffect(() => {
        if (movie?.genre_ids) {
            const movieGenres = []
            axios.get(requests.requestGenres).then(response => {
                const allGenres = response.data.genres
                movie?.genre_ids?.map(id => {
                    allGenres.map(genre => {
                        if (id === genre.id) {
                            movieGenres.push(genre.name)
                        }
                    })
                })
                setGenres(movieGenres)
            })
        }
    }, [movie?.genre_ids])

    return genres
}

export function GetAllGenres() {
    const [genres, setGenres] = React.useState([])
    React.useEffect(() => {
        axios.get(requests.requestGenres).then(response => {
            setGenres(response.data.genres)
        })
    }, [])

    return genres
}