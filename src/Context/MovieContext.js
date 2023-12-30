import React, {createContext, useContext} from 'react'
import {arrayRemove, arrayUnion, doc, getDoc, updateDoc} from "firebase/firestore";
import {db} from "../firebase";
import {UserAuth} from "./AuthContext";
import axios from "axios";
import requests from "../Requests";

const MovieContext = createContext()

export function MovieContextProvider({children}) {
    const {user} = UserAuth()

    async function SaveToFavorites(movie) {
        if (user?.email) {
            console.log(movie)
            await updateDoc(doc(db, "users", user.email), {
                favoriteMovies: arrayUnion({
                    id: movie.id,
                    title: movie.title,
                })
            }).then(() => {
                console.log(`Movie ${movie.title} added to favorites`)
            })
        }
    }

    async function RemoveFromFavorites(movie) {
        if (user?.email) {
            console.log(movie)
            await updateDoc(doc(db, "users", user?.email), {
                favoriteMovies: arrayRemove({
                    id: movie.id,
                    title: movie.title,
                })
            }).then(() => {
                    console.log(`Movie ${movie.title} removed from favorites`)
                }
            ).catch((error) => {
                console.log(error)
            })

        }
    }

    async function IsInFavorites(movie) {
        if (user?.email) {
            const docRef = doc(db, "users", `${user?.email}`);
            const docSnap = await getDoc(docRef);
            if (docSnap.exists()) {
                return docSnap.data()?.favoriteMovies.some((item) => item.id === movie?.id)
            } else {
                return false
            }
        } else {
            return false
        }
    }

    function GetFavoriteMovies() {
        const [FavoriteMovies, setFavoriteMovies] = React.useState([])

        React.useEffect(() => {
            const loadFavoriteMovies = async () => {
                if (user?.email) {
                    const docRef = doc(db, "users", `${user?.email}`);
                    const docSnap = await getDoc(docRef);
                    if (docSnap.exists()) {
                        const results = docSnap.data()?.favoriteMovies.map(async (item) => await GetMovieById2(item.id))
                        setFavoriteMovies(await Promise.all(results))
                    }
                }
            }
            loadFavoriteMovies()
        }, [user?.email])
        return FavoriteMovies
    }

    function GetMovieById(id) {
        const [movie, setMovie] = React.useState()
        React.useEffect(() => {
            let request = requests.requestID(id)
            axios.get(request).then((response) => {
                setMovie(response.data)
            })
        }, [id])
        return movie
    }

    async function GetMovieById2(id) {
        let request = requests.requestID(id)
        const response = await axios.get(request)
        return response.data
    }

    async function GetMoviesByRequest2(request, movieCount) {
        if (movieCount === undefined) movieCount = 1000
        const loadMovies = async () => {
            let shouldContinue = true;
            let tempMovies = [];

            for (let i = 0; i < movieCount / 20.0 && shouldContinue; i++) {
                try {
                    const response = await axios.get(request + `&page=${i + 1}`);
                    if (response.data.results.length === 0) {
                        shouldContinue = false;
                        break;
                    }
                    tempMovies = [...tempMovies, ...response.data.results];
                } catch (error) {
                    console.error("Error loading movies:", error);
                }
            }

            return tempMovies;
        };
        return await loadMovies();
    }

    function GetMoviesByRequest(request, movieCount) {
        const [movies, setMovies] = React.useState([])
        if (movieCount === undefined) movieCount = 100


        React.useEffect(() => {
            const loadMovies = async () => {
                let shouldContinue = true;
                let tempMovies = [];

                for (let i = 0; i < movieCount / 20.0 && shouldContinue; i++) {
                    try {
                        const response = await axios.get(request + `&page=${i + 1}`);
                        if (response.data.results.length === 0) {
                            shouldContinue = false;
                            break;
                        }
                        tempMovies = [...tempMovies, ...response.data.results];
                    } catch (error) {
                        console.error("Error loading movies:", error);
                    }
                }
                setMovies(tempMovies);
            };
            loadMovies();

        }, [request, movieCount]);

        return movies.slice(0, movieCount)
    }

    return (
        <MovieContext.Provider
            value={{
                SaveToFavorites,
                RemoveFromFavorites,
                IsInFavorites,
                GetFavoriteMovies,
                GetMovieById,
                GetMovieById2,
                GetMoviesByRequest,
                GetMoviesByRequest2
            }}>
            {children}
        </MovieContext.Provider>
    )
}

export function MovieContextConsumer() {
    return useContext(MovieContext)
}

