import React from 'react'
import {Link, NavLink, useNavigate} from "react-router-dom";
import {IoSearchSharp} from "react-icons/io5";
import {CgUser} from "react-icons/cg";
import {FaSignOutAlt} from "react-icons/fa";
import {UserAuth} from "../../Context/AuthContext";

function NavBar() {
    const {user, logout} = UserAuth()
    const navigate = useNavigate()

    const handleLogout = async () => {
        try {
            await logout()
            navigate('/')
        } catch (error) {
            console.log(error)
        }
    };

    const hover = 'hover:text-subMain transitions text-white';
    const Hover = ({isActive}) => (isActive ? 'text-subMain' : hover);

    return (
        <div className='bg-main shadow-md sticky top-0 z-20'>
            <div className='sm:py-6 py-2 sm:px-14 px-2 grid lg:gap-10 gap-4 grid-cols-3 lg:grid-cols-7 justify-between items-center'>

                {/*Logo*/}
                <div className='col-span-1 lg:block hidden'>
                    <Link to='/'>
                        <img src='/images/logos/mediatoria-red.png' alt='logo' className='w-full h-16 object-contain'/>
                    </Link>
                </div>

                {/*Search Movie Form*/}
                <div className='col-span-3'>
                    <form className='w-full text-sm bg-dryGray rounded flex-btn gap-4'>
                        <button type='submit'
                                className='bg-subMain w-12 h-12 flex-colo rounded'>
                            <IoSearchSharp className={'w-6 h-6'}/>
                        </button>
                        <input type='text'
                               placeholder='Search Movie...'
                               className='font-medium placeholder:text-border text-base w-11/12 h-12 bg-transparent border-none px-2 text-black'/>
                    </form>
                </div>

                {/*Navigation*/}
                <div className='col-span-3 font-bold text-base hidden xl:gap-14 2xl:gap-20 justify-between lg:flex xl:justify-end items-center'>
                    <NavLink to='/movies' className={Hover}>
                        Movies
                    </NavLink>
                    <NavLink to='/about-us' className={Hover}>
                        About Us
                    </NavLink>
                    <NavLink to='/contact-us' className={Hover}>
                        Contact Us
                    </NavLink>
                    {
                        user?.email ? (
                            /* Navigation For Logged In User */
                            <>
                                <NavLink to='/account' className={Hover}>
                                    <CgUser className='w-8 h-8'/>
                                </NavLink>
                                <button onClick={handleLogout} className={`${Hover({ isActive: false })} relative`}>
                                    <FaSignOutAlt className='w-6 h-6'/>
                                </button>
                            </>
                        ) : (
                            /*Navigation For Guest User*/
                            <NavLink to='/login' className={`${Hover({ isActive: false })} relative`}>
                                <CgUser className='w-8 h-8'/>
                            </NavLink>
                        )
                    }
                </div>
            </div>
        </div>
    )
}

export default NavBar;
