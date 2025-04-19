import React from 'react';
import { Outlet } from 'react-router';

const MainLayout = () => {
    return <>
    <h1>Navbar</h1>
    <Outlet></Outlet>
    <h1>Footer</h1>
    </>
};

export default MainLayout;