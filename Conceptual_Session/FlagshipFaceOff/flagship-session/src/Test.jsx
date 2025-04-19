import React from 'react';
import { Outlet } from 'react-router';

const Test = () => {
    return (
        <div>
            <h1>Inside Favourite</h1>
            <Outlet></Outlet>
        </div>
    );
};

export default Test;