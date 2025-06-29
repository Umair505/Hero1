import React, { Suspense } from 'react';
import Banner from './Banner';
import HotJobs from './HotJobs';

const Home = () => {
    const jobsPromise =fetch('http://localhost:3000/jobs').then(res=>res.json())
    return (
        <div>
            <Banner />
            <Suspense fallback={<div>Loading...</div>}>
                 <HotJobs jobsPromise={jobsPromise}></HotJobs>
            </Suspense>
        </div>
    );
};

export default Home;