import React, { useState } from 'react';
import Hero from '../Components/Hero';
import PhonesContainer from '../Components/PhonesContainer';
import { useLoaderData } from 'react-router';

const Home = () => {
    const data = useLoaderData();
    const [phones,setPhones] = useState(data);
    const handleSearch = (e,text) =>{
        e.preventDefault()
        const searchPhones = data.filter(phone =>
            phone.name.toLowerCase().split(' ').includes(text.toLowerCase()) ||
            phone.brand.toLowerCase().split(' ').includes(text.toLowerCase())
        )
        if(searchPhones.length > 0){
            setPhones(searchPhones)
        }
        else{
            alert('No phone found')
        }
    }
    return (
        <div>
            <Hero handleSearch={handleSearch}></Hero>
            <PhonesContainer phones={phones}></PhonesContainer>
        </div>
    );
};

export default Home;