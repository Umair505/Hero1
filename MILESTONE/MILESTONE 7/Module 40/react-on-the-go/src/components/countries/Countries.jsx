//rsc
import React, { use, useState } from 'react';
import Country from '../country/Country';
import './Countries.css'
const Countries = ({countriesPromise}) => {
    const [visitedCountries,setVisitedCountries] = useState([])
    const countries = use(countriesPromise);

    const handleVisitedCountries = (country) =>{
       const newVisitedCountries = [...visitedCountries,country];
       setVisitedCountries(newVisitedCountries);
    }
    console.log(countries)
    return (
        <div>
            <h1>Travelling Countries : {countries.length}</h1>
            <h3>Traveled so far : {visitedCountries.length} </h3>
            <li>
                {
                    visitedCountries.map(country => <li>{country.name.common}</li>)
                }
            </li>
            <div className='countries'>
            {
                countries.map(country => <Country 
                    key={country.cca3}
                    country={country}
                    handleVisitedCountries = {handleVisitedCountries}
                    ></Country>)
            }
            </div>
        </div>
    );
};

export default Countries;