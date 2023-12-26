import React from 'react'
import {Navigate} from "react-router-dom";
import {UserAuth} from "../../Context/AuthContext";

function ProtectedRoute({children, admin}) {
    const {user} = UserAuth()
    console.log(admin)

    if (!user) {
        return <Navigate to={'/login'}/>
    } else {
        if (admin) {
            if (user?.role !== 'admin') {
                console.log('No permission')
                return <Navigate to={'/'}/>
            }
        }
        return children
    }
}

export default ProtectedRoute
