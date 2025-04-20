import React from 'react';
import { Outlet } from 'react-router';
import Navbar from '../Components/Navbar';
import Hero from '../Components/Hero';
import Footer from '../Components/Footer';

const MainLayout = () => {
    return (<>
    <Navbar></Navbar>
    <div className='min-h-[calc(100vh-116px)]'>
        <Hero></Hero>
        <div className='max-w-screen-2xl px-8 md:px-12 lg:px-16 xl:px-24 mx-auto'>
        <Outlet></Outlet>
        </div>
    </div>
    <Footer></Footer>
    </>
    )
};

export default MainLayout;