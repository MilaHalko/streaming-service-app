import React from 'react'
import NavBar from "./NavBar/NavBar";
import Footer from "./Footer/Footer";
import MobileFooter from "./Footer/MobileFooter";

function Layout({children}) {
    return (
        <div className='bg-main text-white flex flex-col min-h-screen'>
            <NavBar/>
            {children}
            <Footer/>
            <MobileFooter/>
        </div>
    )
}

export default Layout
