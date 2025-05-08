import React, { use } from 'react';
import { AuthContext } from './AuthProvider';
import { Navigate } from 'react-router';

const PrivateRoute = ({children}) => {
    const {user,loading} = use(AuthContext);
    console.log(user);
    if (loading) {
        return (
          <div className="flex justify-center items-center min-h-screen">
            <span className="loading loading-infinity loading-xl"></span>
          </div>
        );
      }
      

    //if -> user thake return children
    if(user && user?.email)
        return children;
    //navigate --> login
    return <Navigate to='/auth/login'></Navigate>
};

export default PrivateRoute;