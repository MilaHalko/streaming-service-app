import React from 'react'
import MainDrawer from "./MainDrawer";
import {Link, NavLink, useNavigate} from "react-router-dom";
import {IoClose} from "react-icons/io5";
import {BsCollectionPlay} from "react-icons/bs";
import {HiOutlineUserGroup} from "react-icons/hi";
import {BiPhoneCall} from "react-icons/bi";
import {UserAuth} from "../../Context/AuthContext";
import {PiSignInBold} from "react-icons/pi";

function MenuDrawer({drawerOpen, toggleDrawer}) {
    const {user, logout} = UserAuth()
    const {navigate} = useNavigate()

    const Links = [
        {name: "Movies", path: "/movies", icon: BsCollectionPlay},
        {name: "About Us", path: "/about-us", icon: HiOutlineUserGroup},
        {name: "Contact Us", path: "/contact-us", icon: BiPhoneCall},
    ]

    const active = "bg-dryGray text-subMain";
    const hover = "hover:bg-dry";
    const inActive = "rounded sm:gap-10 font-medium text-sm transitions flex gap-6 items-center sm:px-8 px-4 py-4 items-center";
    const Hover = ({isActive}) => isActive ? `${active} ${inActive}` : `${inActive} ${hover}`;

    const handleLogout = async () => {
        try {
            await logout()
            toggleDrawer()
            navigate('/')
        } catch (error) {
            console.log(error)
        }
    };

    return (
        <MainDrawer drawerOpen={drawerOpen} closeDrawer={toggleDrawer}>
            <div className="flex flex-col w-full h-full justify-between items-center bg-main text-white rounded">
                <div className="w-full flex-btn h-16 px-6 py-4 bg-dry">
                    <Link onClick={toggleDrawer} to="/">
                        <img src="/images/logos/mediatoria-red.png" alt="logo" className="w-28 h-28 object-contain"/>
                    </Link>
                    <button onClick={toggleDrawer} type="button"
                            className="transitions w-10 h-10 flex-colo text-base text-subMain bg-white rounded-full hover:bg-subMain hover:text-white">
                        <IoClose/>
                    </button>
                </div>

                {/* Menu Links */}
                <div className="w-full overflow-y-scroll flex-grow max-h-full">
                    {Links.map((link, index) => (
                        <NavLink to={link.path} key={index} onClick={toggleDrawer} className={Hover}>
                            <link.icon className="text-lg"/>
                            {link.name}
                        </NavLink>
                    ))}

                    {
                        user?.email ? (
                            <div onClick={handleLogout} className={`${Hover({ isActive: false })}`}>
                                <PiSignInBold className="text-lg"/> Logout
                            </div>
                        ) : (
                            <NavLink to="/login" onClick={toggleDrawer} className={Hover}>
                                <PiSignInBold className="text-lg"/> Login
                            </NavLink>
                        )
                    }
                </div>
            </div>
        </MainDrawer>
    )
}

export default MenuDrawer
