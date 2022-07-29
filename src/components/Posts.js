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
                    posts.length ? posts.map((userPosts, idx) => {
                        return <div key={userPosts.id}>
                            <h1>{userPosts.title}</h1>
                            <h3>{userPosts.author.username}</h3>
                            <p>{userPosts.description}</p>
                            <p>Price: {userPosts.price}</p>
                            <p>Location: {userPosts.location}</p>
                        </div>
                    }) : <div>No posts to display</div>
                }
            </div>
        </div>
        
    )
};


export default Posts;