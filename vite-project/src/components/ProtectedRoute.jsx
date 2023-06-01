import React from 'react'
import { UserAuth } from '../contexts/AuthContext'
import { Navigate } from 'react-router-dom'

const ProtectedRoute = ({ children }) => {

    const { user } = UserAuth();
    if (!user)
        return <Navigate to='/login' />

    return children
}

export default ProtectedRoute
