import React from "react";

const Posts = (props) => {

    const { posts } = props;

    return (
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
    )
};


export default Posts;