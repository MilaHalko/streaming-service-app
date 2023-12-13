import React from 'react'
import {Link} from "react-router-dom";

function Footer() {
    const Links = [
        {
            title: 'Company',
            links: [
                {title: 'Home', url: '/'},
                {title: 'About Us', url: '/about-us'},
                {title: 'Contact Us', url: '/contact-us'},
                {title: 'Movies', url: '/movies'},
            ]
        },
        {
            title: 'Top Categories',
            links: [
                {title: 'Action', url: '#'},
                {title: 'Comedy', url: '#'},
                {title: 'Drama', url: '#'},
                {title: 'Horror', url: '#'},
                {title: 'Romantic', url: '#'},
            ]
        },
        {
            title: 'My Account',
            links: [
                {title: 'Dashboard', url: '/dashboard'},
                {title: 'Favourites', url: '/favourite'},
                {title: 'Profile', url: '/profile'},
                {title: 'Change Password', url: '/password'},
            ]
        }
    ]

    return (
        <div className='bg-dry py-4 border-t-2 border-black'>
            <div className='container mx-auto px-2'>
                <div
                    className='grid grid-cols-2 md:grid-cols-7 xl:grid-cols-12 gap-5 sm:gap-9 lg:gap-11 xl:gap-7 py-10 justify-between'>
                    {Links.map((link, index) => (
                        <div key={index} className='col-span-1 md:col-span-2 lg:col-span-3 pb-3.5 sm:pb-0'>
                            <h3 className='text-md lg:leading-7 font-medium mb-4 sm:mb-5 lg:mb-6 pb-0.5'>{link.title}</h3>
                            <ul className='text-sm flex flex-col space-y-3'>
                                {link.links.map((text, index) => (
                                    <li key={index} className='flex items-baseline'>
                                        <Link to={text.url} className='text-border inline-block w-full hover:text-subMain'>
                                            {text.title}
                                        </Link>
                                    </li>
                                )
                                )}
                            </ul>
                        </div>
                    ))}
                    <div className='pb-3.5 sm:pb-0 col-span-1 md:col-span-2 lg:col-span-3'>
                        <Link to='/'>
                            <img src='/images/logos/logo-red.png' alt='logo' className='w-2/4 object-contain h-15'/>
                        </Link>
                        <p className='leading-7 text-sm text-border mt-3'>
                            <span>Kyiv, Ukraine 02000</span>
                            <br/>
                            <span>Tell: +38 098 765 4321</span>
                            <br/>
                            <span>Email: milagalko1@gmail.com</span>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer
