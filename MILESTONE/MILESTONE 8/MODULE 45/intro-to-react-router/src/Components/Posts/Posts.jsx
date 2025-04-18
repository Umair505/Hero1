import React from 'react';
import { useLoaderData } from 'react-router';
import SinglePost from '../SinglePost/SinglePost';

const Posts = () => {
    const posts = useLoaderData();
    return (
        <div>
            <h2>These are my posts</h2>
            <div>
                {
                    posts.map(post => <SinglePost key={post.id} post={post}></SinglePost>)
                }
            </div>
        </div>
    );
};

export default Posts;