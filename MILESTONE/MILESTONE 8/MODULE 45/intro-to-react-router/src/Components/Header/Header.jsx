import React from 'react';
import { Link } from 'react-router';

const Header = () => {
    return (
        <div>
            <h1>This is header</h1>
            <nav className='flex gap-4'>
                <Link to="/">Home</Link>
                <Link to="/mobiles">Mobiles</Link>
                <Link to="/laptop">Laptop</Link>
            </nav>
        </div>
    );
};

export default Header;