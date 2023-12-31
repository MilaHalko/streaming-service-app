import React, {useContext} from 'react'
import {BsCollectionPlay} from "react-icons/bs";
import {NavLink} from "react-router-dom";
import {FiHeart} from "react-icons/fi";
import {CgMenuBoxed, CgUser} from "react-icons/cg";
import MenuDrawer from "../../Components/Drawer/MenuDrawer";
import {SidebarContext} from "../../Context/DrawerContext";
import {UserAuth} from "../../Context/AuthContext";

function MobileFooter() {
    const {user} = UserAuth()
    const {mobileDrawer, toggleDrawer} = useContext(SidebarContext);
    const active = "bg-white text-main";
    const inactive = "transitions text-2xl flex-colo hover:bg-white hover:text-main rounded-md px-3 py-3";
    const Hover = ({isActive}) => isActive ? `${active} ${inactive}` : `${inactive} text-white`;

    return (
        <>
            <div className="flex flex-col w-full h-full justify-between align-middle mt-3">
                <MenuDrawer drawerOpen={mobileDrawer} toggleDrawer={toggleDrawer}/>
            </div>
            <footer className="lg:hidden fixed z-50 bottom-0 w-full shadow-black shadow-lg">
                <div className="bg-dry flex-btn w-full py-1 xs:px-9 px-1">
                    <NavLink to="/movies/Popular" className={Hover}>
                        <BsCollectionPlay/>
                    </NavLink>

                    <NavLink to='/favorites' className={Hover}>
                        <FiHeart className='w-6 h-6'/>
                    </NavLink>

                    {
                        user?.email ? (
                            <NavLink to={`/account`} className={Hover}>
                                <CgUser className={'w-6 h-6'}/>
                            </NavLink>
                        ) : (
                            <NavLink to='/login' className={Hover}>
                                <CgUser className={'w-6 h-6'}/>
                            </NavLink>
                        )
                    }
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
