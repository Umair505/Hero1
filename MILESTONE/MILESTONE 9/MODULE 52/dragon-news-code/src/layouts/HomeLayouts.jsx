import React from 'react';
import { Outlet } from 'react-router';
import Header from '../Components/Header';
import LatestNews from '../Components/LatestNews';
import Navbar from '../Components/Navbar';

const HomeLayouts = () => {
    return (
        <div>
            <header>
              <Header></Header>
              <section className='w-11/12 mx-auto my-3'>
                <LatestNews></LatestNews>
              </section>
              <nav className='w-11/12 mx-auto my-3'>
              <Navbar></Navbar>
              </nav>
            </header>
            <main>
                <section className="left_nav">

                </section>
                <Outlet></Outlet>
                <section className="right_nav">

                </section>
            </main>
        </div>
    );
};

export default HomeLayouts;