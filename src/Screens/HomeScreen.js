import React from 'react'
import Layout from "../Layout/Layout";
import Banner from "../Components/Home/Banner";
import MoviesBlock from "../Components/Home/MoviesBlock";
import Promos from "../Components/Home/Promos";
import requests from "../Requests";

function HomeScreen() {
    return (
        <Layout>
            <div className='px-5 mb-6'>
                <Banner fetchUrl={requests.requestNowPlaying}/>
                <MoviesBlock title='Popular' request={requests.requestPopular} movieCount={30}/>
                <Promos/>
                <MoviesBlock title='Top Rated' request={requests.requestTopRated} movieCount={10}/>
            </div>
        </Layout>
    )
}

export default HomeScreen
