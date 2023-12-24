import React from 'react'
import SideBar from "./SideBar";
import Table from "../../Components/Table";
import {UserAuth} from "../../Context/AuthContext";
import {doc, onSnapshot} from "firebase/firestore";
import {db} from "../../firebase";

function FavouriteMovies() {
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
            <div className="flex flex-col gap-6">
                <div className="flex-btn gap-2">
                    <h2 className="text-xl font-bold">Favorite Movies</h2>
                    <button className="bg-main font-medium transitions hover:bg-subMain border border-subMain text-white py-3 px-6 rounded">
                        Delete All
                    </button>
                </div>
                <Table movies={FavoriteMovies} admin={admin}/>
            </div>
        </SideBar>
    )
}

export default FavouriteMovies
