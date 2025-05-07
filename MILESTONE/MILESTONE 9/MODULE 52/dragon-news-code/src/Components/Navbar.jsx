import React, { useState } from 'react';
import user from "../assets/user.png";
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'; // Added for mobile menu
import { Link, NavLink } from 'react-router';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false); // State for mobile menu

    return (
        <div className='flex justify-between items-center py-4 px-4 md:px-0'>
            {/* Mobile Menu Button - Only shows on small screens */}
            <div className='md:hidden'>
                <button 
                    onClick={() => setIsOpen(!isOpen)}
                    className='text-gray-700 hover:text-gray-900'
                >
                    {isOpen ? (
                        <XMarkIcon className='h-6 w-6' />
                    ) : (
                        <Bars3Icon className='h-6 w-6' />
                    )}
                </button>
            </div>

            {/* Logo/Brand - Add your logo here */}
            <div className='hidden md:block'></div>

            {/* Navigation Links - Desktop */}
            <div className='hidden md:flex gap-6'>
                <NavLink 
                    to='/' 
                    className={({ isActive }) => 
                        `px-3 py-2 rounded-md text-sm font-medium ${isActive ? 'bg-blue-100 text-blue-600' : 'text-gray-700 hover:bg-gray-100'}`
                    }
                >
                    Home
                </NavLink>
                <NavLink 
                    to='/about' 
                    className={({ isActive }) => 
                        `px-3 py-2 rounded-md text-sm font-medium ${isActive ? 'bg-blue-100 text-blue-600' : 'text-gray-700 hover:bg-gray-100'}`
                    }
                >
                    About
                </NavLink>
                <NavLink 
                    to='/career' 
                    className={({ isActive }) => 
                        `px-3 py-2 rounded-md text-sm font-medium ${isActive ? 'bg-blue-100 text-blue-600' : 'text-gray-700 hover:bg-gray-100'}`
                    }
                >
                    Career
                </NavLink>
            </div>

            {/* Login Section */}
            <div className='flex items-center gap-3'>
                <img 
                    className='h-8 w-8 rounded-full hidden sm:block' 
                    src={user} 
                    alt="User" 
                />
                <Link to="/auth/login" className='btn btn-primary px-4 sm:px-6 md:px-10 py-2 text-sm md:text-base'>
                    Login
                </Link>
            </div>

            {/* Mobile Menu - Only shows on small screens when open */}
            {isOpen && (
                <div className='md:hidden absolute top-16 left-0 right-0 bg-white shadow-lg z-50'>
                    <div className='px-2 pt-2 pb-3 space-y-1 sm:px-3 flex flex-col'>
                        <NavLink 
                            to='/' 
                            className='block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-gray-100'
                            onClick={() => setIsOpen(false)}
                        >
                            Home
                        </NavLink>
                        <NavLink 
                            to='/about' 
                            className='block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-gray-100'
                            onClick={() => setIsOpen(false)}
                        >
                            About
                        </NavLink>
                        <NavLink 
                            to='/career' 
                            className='block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-gray-100'
                            onClick={() => setIsOpen(false)}
                        >
                            Career
                        </NavLink>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Navbar; 