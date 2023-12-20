import React, {useContext} from 'react'
import {BsCollectionPlay} from "react-icons/bs";
import {NavLink} from "react-router-dom";
import {FiHeart, FiUserCheck} from "react-icons/fi";
import {CgMenuBoxed} from "react-icons/cg";
import MenuDrawer from "../../Components/Drawer/MenuDrawer";
import {SidebarContext} from "../../Context/DrawerContext";

function MobileFooter() {
    const {mobileDrawer, toggleDrawer} = useContext(SidebarContext);
    const active = "bg-white text-main";
    const inactive = "transitions text-2xl flex-colo hover:bg-white hover:text-main rounded-md px-3 py-3";
    const Hover = ({isActive}) => isActive ? `${active} ${inactive}` : `${inactive} text-white`;
    return (
        <>
            <div className="flex flex-col h-full justify-between align-middle bg-white rounded cursor-pointer overflow-y-scroll flex-grow w-full">
                <MenuDrawer drawerOpen={mobileDrawer} toggleDrawer={toggleDrawer}/>
            </div>
            <footer className="lg:hidden fixed z-50 bottom-0 w-full px-1 shadow-black shadow-2xl">
                <div className="bg-dry rounded-md flex-btn w-full py-1 xs:px-9 px-1">
                    <NavLink to="/movies" className={Hover}>
                        <BsCollectionPlay/>
                    </NavLink>

                    <NavLink to='/favourites' className={Hover}>
                        <FiHeart className='w-6 h-6'/>
                    </NavLink>

                    <NavLink to='/login' className={Hover}>
                        <FiUserCheck/>
                    </NavLink>

                    <button onClick={() => toggleDrawer()}
                            type="button"
                            className={inactive}>
                        <CgMenuBoxed/>
                    </button>

                </div>
            </footer>
        </>
    )
}

export default MobileFooter
