import React, { useState } from 'react';
import { useLoaderData } from 'react-router';
import CoffeeCard from './CoffeeCard';

const Home = () => {
    const initialCoffees = useLoaderData();
    const [coffees,setCoffees] = useState(initialCoffees);
    
    return (
        <div>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-5 p-24'>
                {
                    coffees.map(coffee=> <CoffeeCard 
                        coffees={coffees}
                        setCoffees={setCoffees}
                        key={coffee._id} coffee={coffee}></CoffeeCard>)
                }
            </div>
        </div>
    );
};

export default Home;