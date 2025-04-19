import React, { Suspense, useState } from 'react';
import { Link, Navigate, useLocation } from 'react-router';
import UserDetailsTwo from '../userDetails2/UserDetailsTwo';

const User = ({user}) => {
    const [showInfo,setShowInfo] = useState(false)
    const userPromise = fetch(`https://jsonplaceholder.typicode.com/users/${user.id}`).then(res => res.json());
    const location = useLocation();
    const {id,name,phone,email} = user;
    const userStyle ={
        border: '2px solid yellow',
        margin: '10px',
        padding: '10px',
        borderRadius: '10px',
        
    }
    const [visitHome,setVisitHome] = useState(false);
    if(visitHome){
        return <Navigate to="/"></Navigate>
    }
    return (
        <div style={userStyle}>
            <h3>Name: {name}</h3>
            <p>Email: {email}</p>
            <p><small>Phone: {phone}</small></p>
            <Link to={`/users/${id}`}>Show Details</Link>
            <button onClick={()=>setShowInfo(!showInfo)}>{showInfo?'Hide':'Show'} Info</button>
            {
                showInfo && 
                <Suspense fallback={<div>Loading...</div>}>
                    <UserDetailsTwo userPromise={userPromise}></UserDetailsTwo>
                </Suspense>
            }
            <button onClick={() => setVisitHome(true)}>Visit Home</button>
        </div>
    );
};

export default User;