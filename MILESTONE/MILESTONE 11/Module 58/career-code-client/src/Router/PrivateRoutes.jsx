import React, { use } from 'react';
import { AuthContext } from '../contexts/AuthContext/AuthContext';
import { Navigate, useLocation } from 'react-router';

const PrivateRoutes = ({children}) => {
    const {user,loading} = use(AuthContext);
    const location = useLocation(); 
    if(loading){
        return <div className="flex justify-center items-center h-screen">
            <div className="w-16 h-16 border-4 border-dashed rounded-full animate-spin border-blue-500"></div>
        </div>;
    }
    if(!user){
        return <Navigate to="/signin" state={location.pathname} />
    }
    return children;
};

export default PrivateRoutes;