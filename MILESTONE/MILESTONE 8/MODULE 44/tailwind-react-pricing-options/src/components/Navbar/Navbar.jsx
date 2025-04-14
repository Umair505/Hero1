import React from 'react';
const navLinks = [
    { id: 1, name: "Home", path: "/" },
    { id: 2, name: "About", path: "/about" },
    { id: 3, name: "Services", path: "/services" },
    { id: 4, name: "Blog", path: "/blog" },
    { id: 5, name: "Contact", path: "/contact" }
  ];
  
const Navbar = () => {
    return (
        <nav className='w-11/12 mx-auto'> 
            <ul className='flex justify-between items-center bg-gray-800 text-white p-4'>
                {
                    navLinks.map(link => (
                        <li key={link.id} className="inline-block mx-4">
                            <a href={link.path} className=" hover:text-blue-500">{link.name}</a>
                        </li>
                    ))
                }
            </ul>
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