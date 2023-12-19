import React from 'react'
import {Link} from "react-router-dom";
import {BiHomeAlt} from "react-icons/bi";

function NotFound() {
    return (
        <div className='flex-colo gap-8 w-full min-h-screen text-white bg-main lg:py-20 py-10 px-6'>
            <h1 className='text-4xl font-semibold'>Page Not Found :(</h1>
            <p className='font-medium text-border italic leading-6'>
                The page you are looking for
                might have been removed had its name changed
                or is temporarily unavailable.
            </p>
            <Link to="/" className='bg-subMain transitions text-white flex-rows gap-2 font-medium py-3 px-4 rounded-md hover:text-main'>
                <BiHomeAlt/> Mediatoria
            </Link>
        </div>
    )
}

export default NotFound
