import React from "react";
import { Link } from "react-router-dom";

const Posts = ({posts, isLoggedIn}) => {
    return (
        
        <div>
            <div>
                {
                    isLoggedIn 
                    ? (<Link to="/createnewpost">Create a New Post</Link>) 
                    : (<Link to="/login">Please login to create a new post</Link>)
                }
            </div>
            
            <div>
                {
                    posts.length ? posts.map((indivPosts, idx) => {
                        return <div key={indivPosts.id}>
                            <h1>{indivPosts.title}</h1>
                            <h3>{indivPosts.author.username}</h3>
                            <p>{indivPosts.description}</p>
                            <p>Price: {indivPosts.price}</p>
                            <p>Location: {indivPosts.location}</p>
                        </div>
                    }) : <div>No posts to display</div>
                }
            </div>
        </div>
        
    )
};


export default Posts;