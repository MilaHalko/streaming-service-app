import React from 'react'
import {Link, useNavigate} from "react-router-dom";
import {FaHeart, FaRegHeart} from "react-icons/fa";
import {UserAuth} from "../Context/AuthContext";
import {doc, updateDoc, arrayUnion, arrayRemove, onSnapshot} from "firebase/firestore";
import {db} from "../firebase";
import {MovieContextConsumer} from "../Context/MovieContext";
import MovieImage from "./MovieImage";
import axios from "axios";
import requests from "../Requests";
import login from "../Screens/Login";

function Movie({movie}) {
    const {SaveToFavorites, RemoveFromFavorites, IsInFavorites} = MovieContextConsumer()
    const {user} = UserAuth()
    const [liked, setLiked] = React.useState(IsInFavorites(movie))
    const navigate = useNavigate()

    React.useEffect(() => {
        if (user?.email) {
            onSnapshot(doc(db, "users", `${user?.email}`), (doc) => {
                doc.data()?.favoriteMovies.some((item) => item.id === movie.id) ? setLiked(true) : setLiked(false)
            });
        }
    }, [user?.email])

    const handleSaveMovie = async () => {
        if (user?.email) {
            const newLiked = !liked;
            setLiked(newLiked)
            if (newLiked) {
                SaveToFavorites(movie)
            } else {
                RemoveFromFavorites(movie)
            }
        } else {
            alert('Please login to save movie')
            navigate('/login')
        }
    }

    return (
        <>
            <div className='border border-border p-1 hover:scale-105 transitions relative rounded overflow-hidden'>
                <Link to={`/movie/${movie.id}/${movie?.title}`} className='w-full'>
                    <MovieImage movie={movie} h={'64'}/>
                </Link>
                <div
                    className='absolute flex-btn gap-2 bottom-0 right-0 left-0 bg-main bg-opacity-60 text-white px-4 py-2'>
                    <h3 className='font-semibold truncate'>{movie?.title}</h3>
                    <button onClick={handleSaveMovie}
                            className='h-10 w-10 text-2xl  flex-colo transitions hover:bg-transparent text-white hover:text-subMain'>
                        {
                            liked ? <FaHeart className='text-red-600'/> : <FaRegHeart/>
                        }
                    </button>
                </div>
            </div>
        </>
    )
}

export default Movie
