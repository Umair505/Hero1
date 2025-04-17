import React from 'react';
import { Outlet } from 'react-router';

const Footer = () => {
    return (
        <div>
            <p><small>Thank you for visiting our website</small></p>
            <a href="/">Terms </a>
            <a href="/">Privacy</a>
            <Outlet></Outlet>
        </div>
    );
};

export default Footer;