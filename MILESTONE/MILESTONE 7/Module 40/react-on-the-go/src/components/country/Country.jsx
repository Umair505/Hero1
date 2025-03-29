import React, { useState } from 'react';
import './Country.css'
const Country = ({country,handleVisitedCountries,handleVisitedFlags}) => {
    const [Visited,setVisited] = useState(false);
    console.log(handleVisitedCountries)
    const handleVisited = () =>{
        // if(!Visited)
        // {
        //     setVisited(true);
        // }
        // else{
        //     setVisited(false);
        // }
        setVisited(!Visited);
        handleVisitedCountries(country);
    }
    return (
        <div className={`country ${Visited && 'country-visited'}`}>
            <h3>Name : {country.name.common}</h3>
            <img src={country.flags.png} alt="" />
            <p>Independent : {country?.independent ? 'Free': 'Not free'}</p>
            <p>Population : {country?.population}</p>
            <button onClick={handleVisited}>{Visited ? 'Visited' : 'Not Visited'}</button>
            <button onClick={() => handleVisitedFlags(country.flags.png)}>Visited Flag</button>
        </div>
    );
};

export default Country;