import React from 'react';
import Navbar from '../Components/Navbar';

const ErrorPage = () => {
    return (
        <div>
            <Navbar/>
            <h1 className='text-red-500'>Not Found!</h1>
        </div>
    );
};

export default ErrorPage;