import React from 'react';
import { useLoaderData, useNavigate } from 'react-router';

const PostDetails = () => {
    const post = useLoaderData();
    const navigate = useNavigate();
    const handleGoBack =() =>{
        navigate('/posts');
    }
    return (
        <div>
            <h2>{post.title}</h2>
            <p>{post.body}</p>
            <button onClick={handleGoBack}>Go Back</button>
        </div>
    );
};

export default PostDetails;