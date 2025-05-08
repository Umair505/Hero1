import React, { use } from 'react';
import { AuthContext } from './AuthProvider';
import { Navigate, useLocation } from 'react-router';
import Loading from '../Components/Loading';

const PrivateRoute = ({children}) => {
    const {user,loading} = use(AuthContext);
    if (loading) {
        return (
         <Loading></Loading>
        );
      }
    const location = useLocation();

    //if -> user thake return children
    if(user && user?.email)
        return children;
    //navigate --> login
    return <Navigate state={location.pathname} to='/auth/login'></Navigate>
};

export default PrivateRoute;