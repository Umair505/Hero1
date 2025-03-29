//rsc
import React, { use, useState } from 'react';
import Country from '../country/Country';
import './Countries.css'
const Countries = ({countriesPromise}) => {
    const countries = use(countriesPromise);
    const [visitedCountries,setVisitedCountries] = useState([])
    
    const [visitedFlags,setVisitedFlags] = useState([]);
    const handleVisitedFlags = (flag) =>{
        const newVisitedFlags = [...visitedFlags,flag]
        setVisitedFlags(newVisitedFlags);
    }

    const handleVisitedCountries = (country) =>{
       const newVisitedCountries = [...visitedCountries,country];
       setVisitedCountries(newVisitedCountries);
    }
    console.log(countries)
    return (
        <div>
            <h1>Travelling Countries : {countries.length}</h1>
            <h3>Traveled so far : {visitedCountries.length} </h3>
            <div>
                <h3>Visited Countries Flags : {visitedFlags.length} </h3>
                <ul>
                    {
                        visitedFlags.map((flag,index) => <img key={index} src={flag} alt="flag" onClick={() => handleVisitedFlags(flag)} />)
                    }
                </ul>
            </div>
            <li>
                {
                    visitedCountries.map(country => <li key={country.cca3}>{country.name.common}</li>)
                }
            </li>
            <div className='countries'>
            {
                countries.map(country => <Country 
                    key={country.cca3}
                    country={country}
                    handleVisitedCountries = {handleVisitedCountries}
                    handleVisitedFlags = {handleVisitedFlags}
                    ></Country>)
            }
            </div>
        </div>
    );
};

export default Countries;