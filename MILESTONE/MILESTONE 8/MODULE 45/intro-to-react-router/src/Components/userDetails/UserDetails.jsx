import React from 'react';
import { useLoaderData, useParams, useRouteLoaderData } from 'react-router';

const UserDetails = () => {
    const user = useLoaderData();
    // const params = useParams();
    const {userId} = useParams();
    const {website, name, email, phone} = user;
    return (
        <div>
            <h3>User Details here</h3>
            <h2>{name}</h2>
            <h4>{website}</h4>
        </div>
    );
};

export default UserDetails;