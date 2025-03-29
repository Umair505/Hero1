//rsc
import React, { use, useState } from 'react';
import Country from '../country/Country';
import './Countries.css'
const Countries = ({countriesPromise}) => {
    const [visitedCountries,setVisitedCountries] = useState([])
    const countries = use(countriesPromise);

    const handleVisitedCountries = (country) =>{
       alert(country.name.common)
    }
    console.log(countries)
    return (
        <div>
            <h1>Travelling Countries : {countries.length}</h1>
            <h3>Traveled so far : </h3>
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