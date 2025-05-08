import React, { useState } from 'react';
import { Outlet, useNavigation } from 'react-router';
import Header from '../Components/Header';
import LatestNews from '../Components/LatestNews';
import Navbar from '../Components/Navbar';
import LeftAside from '../Components/Homelayout/LeftAside';
import RightAside from '../Components/Homelayout/RightAside';
import Footer from '../Components/Footer';
import Loading from '../Components/Loading';


const HomeLayouts = () => {
  const [showMobileSidebar, setShowMobileSidebar] = useState(false);
  const  {state} = useNavigation()
  return (
    <div>
      <header>
        <Header />
        
        <section className="w-11/12 mx-auto my-3">
          <LatestNews />
        </section>
        <nav className="w-11/12 mx-auto my-3">
          <Navbar />
        </nav>
      </header>
      <main className="w-11/12 mx-auto my-3 gap-5 grid grid-cols-1 md:grid-cols-12 relative">
        {/* Mobile Sidebar Trigger */}
        <div 
          className="md:hidden fixed left-0 top-1/2 transform -translate-y-1/2 z-20 w-6 h-16 bg-base-200 rounded-r-lg flex items-center justify-center cursor-pointer"
          onMouseEnter={() => setShowMobileSidebar(true)}
        >
          <span className="text-gray-400 font-bold">≡</span>
        </div>

        {/* Left Sidebar */}
        <aside 
          className={`md:col-span-3 sticky h-fit top-0 ${showMobileSidebar ? 'block fixed left-0 top-0 h-full w-64 bg-white shadow-lg z-10' : 'hidden md:block'}`}
          onMouseLeave={() => setShowMobileSidebar(false)}
        >
          <LeftAside></LeftAside>
        </aside>

        {/* Main Content */}
        <section className="col-span-1 md:col-span-6">
          {state == "loading" ? <Loading></Loading> : <Outlet />}
        </section>

        {/* Right Sidebar */}
        <aside className="md:col-span-3 hidden md:block sticky h-fit top-0">
        <RightAside />
        </aside>
      </main>
      <footer>
        <Footer></Footer>
      </footer>
    </div>
  );
};

export default HomeLayouts;