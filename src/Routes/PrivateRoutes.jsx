import React from 'react';
import { useContext } from 'react';
import { AuthContext } from '../providers/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoutes = ({ children }) => {

    const { user, loading} = useContext(AuthContext);
    const location = useLocation();
    console.log(user);

    if (loading) {
        return <div className='min-h-screen flex items-center justify-center mx-auto my-auto'>
            <progress className="progress progress-primary w-64"></progress>
        </div>
    }

    if (user) {
        return children;
    }

    return (
        <Navigate to='/login' state={{ from: location }} replace >

        </Navigate>
    );
};

export default PrivateRoutes;