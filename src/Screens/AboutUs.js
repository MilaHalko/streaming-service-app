import React from 'react'
import Layout from "../Layout/Layout";
import Head from "../Components/Head";

function AboutUs() {
    return (
        <Layout>
            <div className="min-h-screen container mx-auto px-2 my-6">
                <Head title='About Us'/>
                <div className="xl:py-20 py-10 px-4">
                    <div className='grid grid-flow-row xl:grid-cols-2 gap-5 xl:gap-16 items-center'>
                        <div>
                            <h3 className='text-xl lg:text-3xl font-semibold'>Welcome to <br/></h3>
                            <img src="/images/logos/mediatoria-red.png" alt="mediatoria" className='w-1/2 mt-5'/>
                            {/*Description*/}
                            {/*Space between p needed*/}
                            <div className='mt-5 text-sm leading-8 text-text space-y-5'>
                                <p>
                                    Mediatoria is a streaming platform that allows you to watch a wide variety of
                                    movies on thousands of internet-connected devices.
                                    With Mediatoria, you can enjoy unlimited ad-free viewing of our content.
                                    We are constantly adding new content, so you can always find something new to watch.
                                    All you need to get started is an internet connection and a compatible device.
                                    You can watch Mediatoria on your personal computer, on your mobile phone or tablet,
                                    on your television, or on any other device that supports streaming.
                                </p>
                                <p>
                                    Mediatoria is a Ukrainian media-services provider and production company
                                    headquartered in Kyiv, Ukraine. The company was founded in 2022 in Kyiv by
                                    a group of students from Kyiv Polytechnic Institute. Mediatoria is a subscription-based
                                    streaming service offering online streaming from a library of films and television series,
                                    including those produced in-house.
                                </p>
                                <p>
                                    Enjoy watching as much as you want, whenever you want, without a single ad – all for
                                    one low monthly price.
                                </p>
                            </div>
                            {/*Mediatoria Stats*/}
                            <div className='grid md:grid-cols-2 gap-6 mt-8'>
                                <div className='p-8 bg-dry rounded-lg'>
                                    <span className='text-3xl block font-extrabold'>1000</span>
                                    <h4 className='text-lg font-semibold my-2'>Movies</h4>
                                    <p className='mb-0 text-sm leading-7 text-text'>
                                        Watch thousands of movies on all your devices
                                    </p>
                                </div>
                                <div className='p-8 bg-dry rounded-lg'>
                                    <span className='text-3xl block font-extrabold'>5000</span>
                                    <h4 className='text-lg font-semibold my-2'>Users</h4>
                                    <p className='mb-0 text-sm leading-7 text-text'>
                                        Join our huge community passionate about films
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className='mt-10 lg:mt-0'>
                            <img src="/images/cinemaPosters/charactersPoster.jpg" alt="Movie characters" className='w-full rounded-lg xl:block hidden h-header object-cover'/>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default AboutUs
  