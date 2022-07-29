import React from "react";
import { Link } from "react-router-dom";

const Profile = (props) => {
    const {
        posts,
        isLoggedIn
    } = props;

    return (
        <div>
            {
                isLoggedIn ? (<h3>Welcome to your profile!</h3>) : (<Link to="/login">Please login to view your profile</Link>) 
            }

            {
                isLoggedIn ? (<p>Your Posts</p>) : null
            }

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

    )
}

export default Profile;