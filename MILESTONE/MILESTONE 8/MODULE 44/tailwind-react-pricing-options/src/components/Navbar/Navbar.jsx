import { Menu, X } from 'lucide-react';
import React, { useState } from 'react';
const navLinks = [
    { id: 1, name: "Home", path: "/" },
    { id: 2, name: "About", path: "/about" },
    { id: 3, name: "Services", path: "/services" },
    { id: 4, name: "Blog", path: "/blog" },
    { id: 5, name: "Contact", path: "/contact" }
  ];
const links =  navLinks.map(link => (
    <li key={link.id} className="flex mr-4">
        <a href={link.path} className=" hover:text-blue-500">{link.name}</a>
    </li>
))
  
const Navbar = () => {
    const [open,setOpen] = useState(false);
    return (
        <nav className='flex justify-between mx-10 '> 
            <span className='flex' onClick={()=>setOpen(!open)}>
                { open ?<X className='md:hidden'></X> : <Menu className='md:hidden'></Menu>}
                
            <ul className='md:hidden'>
                {links}
            </ul>
                <h1 className='ml-4'>My Nav</h1>
            </span>
            <ul className='md:flex hidden mr-2'>
                {
                   links
                }
            </ul>
            <ul><button className='btn'>Login</button></ul>
        </nav>
        // <div>
        //     <ul className='flex justify-between items-center bg-gray-800 text-white p-4'>
        //         <li><a href="/">Home</a></li>
        //         <li><a href="/">About</a></li>
        //         <li><a href="/">Blog</a></li>
        //         <li><a href="/"></a></li>
        //     </ul>
        // </div>
    );
};

export default Navbar;