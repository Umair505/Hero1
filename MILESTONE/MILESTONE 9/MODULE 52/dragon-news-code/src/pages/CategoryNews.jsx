import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router';

const CategoryNews = () => {
    const {id} = useParams();
    const data = useLoaderData();

    const [categoryNews,setCategoryNews] = useState([]);
    // console.log(id,data);
    useEffect(()=>{
        if(id=='0'){
            setCategoryNews(data);
            return;
        }
        else if(id == '1')
        {
            const filterNews = data.filter(news=>news.others.is_today_pick==true)
            setCategoryNews(filterNews);
            return;
        }
        else{
            const filterNews = data.filter(news=>news.category_id == id)
            setCategoryNews(filterNews);
        }
    },[data,id])
    return (
        <div>
            <h1>Category News - {id}</h1>
            <h1> Total News {categoryNews.length}</h1>
        </div>
    );
};

export default CategoryNews;