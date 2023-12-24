import React, {useEffect} from 'react'
import {Link, useNavigate} from "react-router-dom";
import {FaHeart, FaRegHeart} from "react-icons/fa";
import {UserAuth} from "../Context/AuthContext";
import {doc, updateDoc, arrayUnion, arrayRemove, onSnapshot} from "firebase/firestore";
import {db} from "../firebase";

function Movie({movie}) {
    const {user} = UserAuth()
    const [liked, setLiked] = React.useState(false)
    const navigate = useNavigate()

    const SaveMovie = async () => {
        if (user?.email) {
            const newLiked = !liked;
            setLiked(newLiked)

            if (newLiked) {
                await updateDoc(doc(db, "users", user.email), {
                    favoriteMovies: arrayUnion({
                        id: movie.id,
                        title: movie.title,
                        movie: movie
                    })
                })
                console.log(`Movie ${movie.title} added to favorites`)

            } else {
                await updateDoc(doc(db, "users", user.email), {
                    favoriteMovies: arrayRemove({
                        id: movie.id,
                        title: movie.title,
                        movie: movie
                    })
                })
                console.log(`Movie ${movie.title} removed from favorites`)
            }

        } else {
            alert('Please login to save movies')
            navigate('/login')
        }
    }

    React.useEffect(() => {
        if (user?.email) {
            onSnapshot(doc(db, "users", `${user?.email}`), (doc) => {
                doc.data()?.favoriteMovies.some((item) => item.id === movie.id) ? setLiked(true) : setLiked(false)
            });
        }
    }, [user?.email])


    return (
        <>
            <div className='border border-border p-1 hover:scale-105 transitions relative rounded overflow-hidden'>
                <Link to={`/movie/${movie?.title}`} className='w-full'>
                    {
                        movie?.backdrop_path === null ? (
                            <img src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`} alt={movie?.title}
                                 className='w-full h-64 object-cover'/>
                        ) : (
                            <img src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`} alt={movie?.title}
                                 className='w-full h-64 object-cover'/>
                        )
                    }
                </Link>
                <div
                    className='absolute flex-btn gap-2 bottom-0 right-0 left-0 bg-main bg-opacity-60 text-white px-4 py-2'>
                    <h3 className='font-semibold truncate'>{movie?.title}</h3>
                    <button onClick={SaveMovie}
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
