import React from 'react';
import { Outlet } from 'react-router';
import Navbar from '../Components/Navbar';
import Hero from '../Components/Hero';
import Footer from '../Components/Footer';

const MainLayout = () => {
    return (<>
    <Navbar></Navbar>
    <Hero></Hero>
    <div className='bg-red-400 min-h-screen-[calc(100vh-116px)]'>
        <Outlet></Outlet>
    </div>
    <Footer></Footer>
    </>
    )
};

export default MainLayout;