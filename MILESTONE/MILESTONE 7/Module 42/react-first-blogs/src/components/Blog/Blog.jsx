import React from 'react';
import { FaRegBookmark } from "react-icons/fa";
const Blog = ({blog,handleBookMarks,handleMarkAsRead}) => {
    return (
        <div>
            <div className="card bg-base-100 w-96 shadow-sm">
                <figure>
                    <img
                    src={blog.cover}
                    alt="Shoes" />
                </figure>
                <div className="card-body">
                    <div className="author flex gap-2 items-center">
                        <img className='w-12' src={blog.author_img} alt="" />
                        <h3>{blog.author}</h3>
                        <button className='cursor-pointer' onClick={() =>handleBookMarks(blog)}><FaRegBookmark size={24}/></button>
                        
                    </div>
                    <h2 className="card-title">{blog.title}</h2>
                    <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
                    <div className='flex'>
                    {
                        blog.hashtags.map((hash) => <p>{hash}</p>)
                    }
                    </div>
                    <div className="card-actions justify-end">
                    <button className="cursor-pointer" onClick={() => handleMarkAsRead(blog.reading_time,blog.id)} className="btn btn-primary">Mark as read</button>
                    </div>
                </div>
                </div>
        </div>
    );
};

export default Blog;