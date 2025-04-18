import React from 'react';
import { Link, NavLink } from 'react-router';
import './header.css';
const Header = () => {
    return (
        <div>
            <h1>This is header</h1>
            <nav>
                <NavLink to="/">Home</NavLink>
                <NavLink to="/mobiles">Mobiles</NavLink>
                <NavLink to="/laptop">Laptop</NavLink>
                <NavLink to="/users">Users</NavLink>
                {/* <NavLink to="/users2">Users2</NavLink> */}
            </nav>
        </div>
    );
};

export default Header;