import React, { Suspense, use } from 'react';
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
                <ApplicationList myApplicationsPromise={myApplicationsPromise(user.email)}>
                </ApplicationList>
            </Suspense>
        </div>
    );
};

export default MyApplication;