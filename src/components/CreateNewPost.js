import React from "react";
import { Link } from "react-router-dom";

const CreateNewPost = (props) => {
    const {
        title,
        setTitle,
        description,
        setDescription,
        price,
        setPrice,
        isLoggedIn,
        token
    } = props; 

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const response = await fetch('https://strangers-things.herokuapp.com/api/2206-ftb-et-web-ft-b/posts/',
            {
                method: "POST",
                headers: {
                    "Content-Type": 'application/json',
                    'Authorization': `Bearer ${token}`
                },
                body: JSON.stringify({
                    post: {
                      title,
                      description,
                      price,
                    }
                })
            });
            const data = await response.json();
            setTitle('');
            setDescription('');
            setPrice('');
            return data;
        } catch (error) {
            throw error;
        }
    }
    
    return (
        <div>
            {
               isLoggedIn 
            ? <form onSubmit={handleSubmit}>
                <label>
                    Title:
                    <input 
                        type='text' 
                        value={title}
                        onChange={(event) => setTitle(event.target.value)}
                    ></input>
                </label>
                <label>
                    Description:
                    <input 
                        type='text'
                        value={description}
                        onChange={(event) => setDescription(event.target.value)}
                    ></input>
                </label>
                <label>
                    Price:
                    <input 
                        type='text'
                        value={price}
                        onChange={(event) => setPrice(event.target.value)}
                    ></input>
                </label>
                <button type='submit'>Create Post</button>
            </form>

            : (<Link to="/login">Please login to create a new post</Link>)
            }
        </div>
    )
}

export default CreateNewPost;