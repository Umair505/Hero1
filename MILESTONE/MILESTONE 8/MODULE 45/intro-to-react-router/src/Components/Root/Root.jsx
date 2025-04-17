import React from 'react';
import Header from '../Header/Header';
import { Outlet } from 'react-router';
import Footer from '../footer/Footer';
import Sidebar from '../Sidebar/Sidebar';
import './root.css';
const Root = () => {
    return (
        <div>
            <Header></Header>
            <div className='root-main'>
                <Sidebar></Sidebar>
                <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Root;