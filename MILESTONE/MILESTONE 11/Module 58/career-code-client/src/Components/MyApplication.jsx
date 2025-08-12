import React, { Suspense } from 'react';
import ApplicationStat from './ApplicationStat';
import ApplicationList from './ApplicationList';
import { AuthContext } from '../contexts/AuthContext/AuthContext';
import { myApplicationsPromise } from '../api/applicationApi';
import useAuth from '../hooks/useAuth';


const MyApplication = () => {
    const { user } = useAuth();
    return (
        <div>
            <ApplicationStat />

            <Suspense fallback={<div>Loading...</div>}>
                <ApplicationList myApplicationsPromise={user ? myApplicationsPromise(user.email) : null} />

            </Suspense>
        </div>
    );
};

export default MyApplication;