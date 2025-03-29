import React from 'react';
import './Country.css'
const Country = ({country}) => {
    const handleVisited = () =>{
        alert('Visited');
    }
    return (
        <div className='country'>
            <h3>Name : {country.name.common}</h3>
            <img src={country.flags.png} alt="" />
            <p>Independent : {country?.independent ? 'Free': 'Not free'}</p>
            <p>Population : {country?.population}</p>
            <button onClick={handleVisited}>Not Visited</button>
        </div>
    );
};

export default Country;