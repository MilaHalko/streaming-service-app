import React from 'react'
import {Link} from "react-router-dom";
import {UserAuth} from "../../Context/AuthContext";

function Footer() {
    const {UserIsAdmin} = UserAuth()
    const admin = UserIsAdmin()

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
            title: 'My Account',
            links: [
                {title: 'Favorites', url: '/favorites'},
                {title: 'Account Settings', url: '/account'},
            ]
        }
    ]

    if (admin) {
        Links[1].links.push({title: 'Movies List', url: '/movieslist'})
        Links[1].links.push({title: 'Users', url: '/users'})
    }

    return (
        <div className='bg-dry py-3 px-5 md:px-16 mt-auto'>
            <div className='container mx-auto'>
                <div className='grid grid-cols-2 md:grid-cols-7 xl:grid-cols-12 gap-5 sm:gap-9 lg:gap-11 xl:gap-7 py-10 justify-between'>
                    {Links.map((link, index) => (
                        <div key={index} className='md:col-span-2 xl:col-span-3 pb-1 sm:pb-0'>
                            <h3 className='text-lg lg:leading-3 font-medium mb-6 pt-0.5'>{link.title}</h3>
                            <ul className='text-base flex flex-col space-y-3'>
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
                    <div className='pb-3.5 sm:pb-0 col-span-1 md:col-span-3 lg:col-span-3 text-base'>
                        <Link to='/'>
                            <img src='/images/logos/logo-red.png' alt='logo' className='w-2/4 object-contain h-15'/>
                        </Link>
                        <p className='leading-7 text-border mt-5'>
                            <span>KPI Campus, 37 Peremohy Ave, Kyiv, Ukraine 03056</span>
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
