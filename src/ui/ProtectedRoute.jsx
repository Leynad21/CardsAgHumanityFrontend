import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import { useUser } from '../features/authentication/useUser';

const ProtectedRoute = ({ children }) => {

    const navigate = useNavigate();

    // 1. Load authenticated user
    const { isLoading, user } = useUser();

    // 2. If user is not authenticated, redirect to login page

    useEffect(() => {
        if (!user && !isLoading) {
            navigate("/login")
        }
    }, [user, navigate, isLoading])


    // 3. While loading, show a loading spinner
    if (isLoading) {
        return (
            <div className="flex items-center justify-center h-screen" >
                <span className="loading loading-infinity loading-lg"></span>
            </div>
        )
    }


    // 4. If user is authenticated, render the app

    if (user) return children
}

export default ProtectedRoute