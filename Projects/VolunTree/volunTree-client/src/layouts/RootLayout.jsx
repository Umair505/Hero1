import React from 'react';
import { Toaster } from 'react-hot-toast';
import Navbar from '../components/Navbar';
import { Outlet } from 'react-router';
import Footer from '../components/Footer';

const RootLayout = () => {
    return (
        <div>
            <Toaster/>
            <Navbar/>
            <div className='min-h-screen '>
                <Outlet/>
            </div>
            <Footer/>
        </div>
    );
};

export default RootLayout;