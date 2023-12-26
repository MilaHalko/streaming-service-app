import React from 'react'
import {FaHeart, FaRegHeart} from "react-icons/fa";
import {doc, onSnapshot} from "firebase/firestore";
import {useNavigate} from "react-router-dom";
import {UserAuth} from "../../Context/AuthContext";
import {MovieContextConsumer} from "../../Context/MovieContext";
import {db} from "../../firebase";

function MovieLikeButton({movie, className}) {
    const {user} = UserAuth()
    const {SaveToFavorites, RemoveFromFavorites, IsInFavorites} = MovieContextConsumer()
    const [liked, setLiked] = React.useState(IsInFavorites(movie))
    const navigate = useNavigate()

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

    React.useEffect(() => {
        if (user?.email) {
            onSnapshot(doc(db, "users", `${user?.email}`), (doc) => {
                doc.data()?.favoriteMovies.some((item) => item.id === movie.id) ? setLiked(true) : setLiked(false)
            });
        }
    }, [user?.email])

    return (
        <button onClick={handleSaveMovie}
                className={`${className} h-10 w-10 text-2xl flex-colo transitions hover:bg-transparent text-white hover:text-subMain`}>
            {
                liked ? <FaHeart className='text-red-600'/> : <FaRegHeart/>
            }
        </button>
    )
}

export default MovieLikeButton
