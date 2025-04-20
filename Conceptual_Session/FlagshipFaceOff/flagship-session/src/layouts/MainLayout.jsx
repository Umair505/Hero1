import React from 'react';
import { Outlet } from 'react-router';
import Navbar from '../Components/Navbar';
import Hero from '../Components/Hero';

const MainLayout = () => {
    return (<>
    <Navbar></Navbar>
    <Hero></Hero>
    <Outlet></Outlet>
    <h1>Footer</h1>
    </>
    )
};

export default MainLayout;