import React from 'react'
import {Navigate} from "react-router-dom";
import {UserAuth} from "../../Context/AuthContext";

function ProtectedRoute({children, admin}) {
    const {user, GetUserData} = UserAuth()
    const userRole = GetUserData()?.role

    console.log(user)
    console.log(userRole)

    if (!user) {
        return <Navigate to={'/login'}/>
    } else {
        if (admin) {
            if (userRole !== 'admin') {
                console.log('No permission')
                return <Navigate to={'/'}/>
            }
        }
        return children
    }
}

export default ProtectedRoute
