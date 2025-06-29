import React from 'react';
import { Outlet } from 'react-router';
import Navbar from '../Pages/Shared/Navbar';
import Footer from '../Pages/Shared/Footer';

const RootLayout = () => {
    return (
        <div className='max-w-7xl mx-auto'>
            <Navbar />
            <div className='min-h-[calc(100vh-200px)]'>
                <Outlet />
            </div>
            <Footer />
        </div>
    );
};

export default RootLayout;