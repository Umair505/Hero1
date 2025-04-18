import React from 'react';
import { Link } from 'react-router';

const User = ({user}) => {
    const {id,name,phone,email} = user;
    const userStyle ={
        border: '2px solid yellow',
        margin: '10px',
        padding: '10px',
        borderRadius: '10px',
        
    }
    return (
        <div style={userStyle}>
            <h3>Name: {name}</h3>
            <p>Email: {email}</p>
            <p><small>Phone: {phone}</small></p>
            <Link to={`/users/${id}`}>Show Details</Link>
        </div>
    );
};

export default User;