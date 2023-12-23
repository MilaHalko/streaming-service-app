import React from 'react'
import Layout from "../Layout/Layout";
import Banner from "../Components/Home/Banner";
import PopularMovies from "../Components/Home/PopularMovies";
import Promos from "../Components/Home/Promos";
import TopRated from "../Components/Home/TopRated";
import requests from "../Requests";

function HomeScreen() {
    return (
        <Layout>
            <div className='px-5 mb-6'>
                <Banner fetchUrl={requests.requestNowPlaying}/>
                <PopularMovies/>
                <Promos/>
                <TopRated/>
            </div>
        </Layout>
    )
}

export default HomeScreen
