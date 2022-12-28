import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';

const PrivateRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    const location = useLocation();

    if (loading) {
        return <div className=''><button type="button" class="bg-indigo-500 ..." disabled>
            <svg class="animate-spin h-5 w-5 mr-3 ..." viewBox="0 0 24 24">

            </svg>
            Processing...
        </button></div >
    }

    if (user && user?.uid) {
        return children;
    }
    return <Navigate to='/login' state={{ from: location }} ></Navigate>;

};

export default PrivateRoute;