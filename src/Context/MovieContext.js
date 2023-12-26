import React, {createContext, useContext} from 'react'
import {arrayRemove, arrayUnion, doc, onSnapshot, updateDoc} from "firebase/firestore";
import {db} from "../firebase";
import {UserAuth} from "./AuthContext";
import axios from "axios";
import requests from "../Requests";

const MovieContext = createContext()

export function MovieContextProvider({children}) {
    const {user} = UserAuth()

    async function SaveToFavorites(movie) {
        if (user?.email) {
            await updateDoc(doc(db, "users", user.email), {
                favoriteMovies: arrayUnion({
                    id: movie.id,
                    title: movie.title,
                    movie: movie
                })
            })
            console.log(`Movie ${movie.title} added to favorites`)
        }
    }

    async function RemoveFromFavorites(movie) {
        if (user?.email) {
            console.log(movie)
            await updateDoc(doc(db, "users", user.email), {
                favoriteMovies: arrayRemove({
                    id: movie.id,
                    title: movie.title,
                    movie: movie
                })
            }).catch((error) => {
                console.log(error)
            })
            console.log(`Movie ${movie.title} removed from favorites`)
        }
    }

    function IsInFavorites(movie) {
        if (user?.email) {
            onSnapshot(doc(db, "users", `${user?.email}`), (doc) => {
                doc.data()?.favoriteMovies.some((item) => item.id === movie.id)
            });
        } else {
            return false
        }
    }

    function GetFavoriteMovies() {
        const [FavoriteMovies, setFavoriteMovies] = React.useState([])

        React.useEffect(() => {
            if (user?.email) {
                const unsubscribe = onSnapshot(doc(db, "users", `${user?.email}`), (doc) => {
                    setFavoriteMovies(doc.data()?.favoriteMovies.map((item) => item.movie))
                });

                return () => unsubscribe();
            }
        }, [user?.email])
        return FavoriteMovies
    }

    async function GetMovieById(id) {
        const [movie, setMovie] = React.useState()
        React.useEffect(() => {
            let request = requests.requestMovie(id)
            axios.get(request).then((response) => {
                setMovie(response.data)
            })
        }, [id])
        return movie
    }

    function GetMoviesByRequest(request, movieCount) {
        const [movies, setMovies] = React.useState([])
        React.useEffect(() => {
            let tempMovies = []
                for (let i = 0; i < movieCount / 20.0; i++) {
                    axios.get(request + `&page=${i+1}`).then((response) => {
                        tempMovies = [...tempMovies, ...response.data.results];
                        setMovies(tempMovies);
                    })
                }
            }, [request]
        );
        return movies.slice(0, movieCount)
    }

    return (
        <MovieContext.Provider
            value={{SaveToFavorites, RemoveFromFavorites, IsInFavorites, GetFavoriteMovies, GetMovieById, GetMoviesByRequest}}>
            {children}
        </MovieContext.Provider>
    )
}

export function MovieContextConsumer() {
    return useContext(MovieContext)
}

