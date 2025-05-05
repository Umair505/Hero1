import React from 'react';
import logo from '../assets/logo.png'
import { format } from 'date-fns';
const Header = () => {
    return (
        <div  className='flex justify-center flex-col items-center gap-3'>
            <img className='w-[350px' src={logo} alt="" />
            <p className='text-accent'>Journalism Without Fear or Favour</p>
            <p className='font-semibold text-accent'>{format(new Date(),"EEEE , MMMM MM , yyyy")}</p>
        </div>
    );
};

export default Header;