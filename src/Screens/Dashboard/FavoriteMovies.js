import React from 'react'
import SideBar from "./SideBar";
import Table from "../../Components/Table";
import {UserAuth} from "../../Context/AuthContext";
import {doc, onSnapshot} from "firebase/firestore";
import {db} from "../../firebase";

function FavouriteMovies() {
    const {user} = UserAuth()
    const [FavouriteMovies, setFavouriteMovies] = React.useState([])
    const [admin, setAdmin] = React.useState(false)

    React.useEffect(() => {
        if (user?.email) {
            const unsubscribe = onSnapshot(doc(db, "users", `${user?.email}`), (doc) => {
                setFavouriteMovies(doc.data()?.favoriteMovies)
                setAdmin(doc.data()?.role === 'admin')
            });

            return () => unsubscribe();
        }
    }, [user?.email])


    return (
        <SideBar>
            <div className="flex flex-col gap-5">
                <h2 className="text-xl font-bold">Favourite Movies</h2>
                <Table movies={FavouriteMovies} admin={admin}/>
            </div>
        </SideBar>
    )
}

export default FavouriteMovies
