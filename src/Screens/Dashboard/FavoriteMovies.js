import React from 'react'
import SideBar from "./SideBar";
import Table from "../../Components/Table";
import {UserAuth} from "../../Context/AuthContext";
import {doc, onSnapshot} from "firebase/firestore";
import {db} from "../../firebase";

function FavoriteMovies() {
    const {user} = UserAuth()
    const [FavoriteMovies, setFavoriteMovies] = React.useState([])
    const [admin, setAdmin] = React.useState(false)

    React.useEffect(() => {
        if (user?.email) {
            const unsubscribe = onSnapshot(doc(db, "users", `${user?.email}`), (doc) => {
                setFavoriteMovies(doc.data()?.favoriteMovies)
                setAdmin(doc.data()?.role === 'admin')
            });

            return () => unsubscribe();
        }
    }, [user?.email])


    return (
        <SideBar>
            <div className="flex flex-col gap-5">
                <h2 className="text-xl font-bold">Favorite Movies</h2>
                <Table movies={FavoriteMovies} admin={admin}/>
            </div>
        </SideBar>
    )
}

export default FavoriteMovies
