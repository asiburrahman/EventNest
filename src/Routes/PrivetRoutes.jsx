import React, { use } from 'react';
import { AuthContext } from '../context/AuthContext';
import { Navigate, useLocation } from 'react-router';
import { ToastContainer } from 'react-toastify'

const PrivetRoutes = ({children}) => {
    const{user, loading} = use(AuthContext)
   
    const location = useLocation()
    // console.log(location);
    // console.log(loading);
    
    if (loading) {
        return <>
        <span className="loading loading-dots loading-xs"></span>
        <span className="loading loading-dots loading-sm"></span>
        <span className="loading loading-dots loading-md"></span>
        <span className="loading loading-dots loading-lg"></span>
        <span className="loading loading-dots loading-xl"></span>
        </>
    }

    if (!user) {
        return <Navigate state={location.pathname} to="/login"></Navigate>
    }

    return (
        <div>
            <ToastContainer />
            {children}
        </div>
    );
};

export default PrivetRoutes;