import React from 'react'
import SideBar from "./SideBar";
import Table from "../../Components/Table";
import {UserAuth} from "../../Context/AuthContext";
import {doc, onSnapshot} from "firebase/firestore";
import {db} from "../../firebase";
import {MovieContextConsumer} from "../../Context/MovieContext";

function FavoriteMovies() {
    const {GetFavoriteMovies} = MovieContextConsumer()
    const favoriteMovies = GetFavoriteMovies()
    const favoriteMoviesCount = favoriteMovies.length

    return (
        <SideBar>
            <div className="flex flex-col gap-5">
                <h2 className="text-xl font-bold">Favorite Movies ({favoriteMoviesCount})</h2>
                <Table movies={favoriteMovies}/>
            </div>
        </SideBar>
    )
}

export default FavoriteMovies
