import React from 'react';
import { Link } from 'react-router-dom';
import { login } from '../API';




function Login(props) {
    const { 
        username, 
        setUserName, 
        password, 
        setPassword, 
        setToken, 
        setIsLoggedIn 
    } = props;
    
    async function handleSubmit(event) {
        event.preventDefault();
        const user = {
            username,
            password,
        };
        const { data } = await login(user);
        localStorage.token = data.token;
        setIsLoggedIn(true);
        setToken(localStorage.token);
        setUserName('');
        setPassword('');
    }


    return (
        <>
            <form onSubmit={handleSubmit}>
                <label className='flex'>
                    Username:
                    <input
                        type='text' value={username}
                        onChange={(event) => setUserName(event.target.value)}
                    ></input>
                </label>
                <label>
                    Password:
                    <input
                        type='text' value={password}
                        onChange={(event) => setPassword(event.target.value)}
                    ></input>
                </label>
                <button type='submit'>Login</button>
            </form>

            <Link to="/register">New User? Register here!</Link>
        </>
    );
}

export default Login;