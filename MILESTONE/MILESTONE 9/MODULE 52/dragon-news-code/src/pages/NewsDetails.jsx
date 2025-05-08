import React, { useEffect, useState } from 'react';
import Header from '../Components/Header';
import RightAside from '../Components/Homelayout/RightAside';
import NewsDetailsCard from './NewsDetailsCard';
import { useLoaderData, useParams } from 'react-router';

const NewsDetails = () => {
    const data =useLoaderData();
    const {id} = useParams();
    const [news,setNews] = useState({});
    console.log(news);
    useEffect(()=>{
        window.scrollTo(0, 0);
        const newsDetails =data.find(singleNews =>singleNews.id == id);
        setNews(newsDetails);
    },[data,id])
    return (
        <div>
            <header>
                <Header></Header>
            </header>
            <main className='w-11/12 mx-auto gap-3 py-10 grid grid-cols-12'>
                <section className='col-span-12 md:col-span-9'>

                    <NewsDetailsCard news={news}></NewsDetailsCard>
                </section>
                <aside className='col-span-3 hidden lg:block md:block'>
                    <RightAside></RightAside>
                </aside>
            </main>
        </div>
    );
};

export default NewsDetails;