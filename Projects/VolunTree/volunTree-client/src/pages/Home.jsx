import React from 'react';
import Carousel from '../components/Carousel';
import VolunteerServices from '../components/VolunteerServices';
import VolunteerNeedsNow from '../components/VolunteerNeedsNow';
import { useLoaderData } from 'react-router';
import GalleryPage from '../components/GalleryPage';
import FAQSection from '../components/FAQSection';
import WhyBeAVolunteer from '../components/WhyBeAVolunteer';

const Home = () => {
    const volunteerPost = useLoaderData();
    console.log(volunteerPost.data.data);
    return (
        <div>
            
           <Carousel/>
            <WhyBeAVolunteer/>
           <VolunteerNeedsNow volunteerPost={volunteerPost}/>
            <GalleryPage/>
           <VolunteerServices/>
           <FAQSection/>
        </div>
    );
};

export default Home;