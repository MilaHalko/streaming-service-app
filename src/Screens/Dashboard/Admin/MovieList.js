import SideBar from "../SideBar";
import Table from "../../../Components/Table";
import React from "react";
import {MovieContextConsumer} from "../../../Context/MovieContext";
import requests from "../../../Requests";

function MoviesList() {
    const {GetMoviesByRequest} = MovieContextConsumer()
    const movies = GetMoviesByRequest(requests.requestUpcoming, 100)

    return (
        <SideBar>
            <div className="flex flex-col gap-6">
                <div className="flex-btn gap-2">
                    <h2 className="text-xl font-bold">
                        Movies List
                    </h2>
                </div>
                <Table movies={movies}/>
            </div>
        </SideBar>
    )
}

export default MoviesList