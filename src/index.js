import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { Homepage } from './components/index';
import Navbar from './components/Navbar';
import Profile from './components/Profile';
import Posts from './components/Posts';
import { getAllPosts } from './API/index';
import AuthForm from './components/AuthForm';
import { getMe } from './API';




const App = () => {
    const [posts, setPosts] = useState([]);
    const [users, setUsers] = useState([]);
    const [token, setToken] = useState('');
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [user, setUser] = useState({})

    useEffect(() => {
        if (localStorage.token) {
            setToken(localStorage.token);
            setIsLoggedIn(!isLoggedIn);
        }
    }, []);

    useEffect(() => {
        if (token) {
            const fetchMe = async () => {
                const { data } = await getMe(token);
                setUser({ username: data.username });
            };
            fetchMe();
        }
    }, [isLoggedIn]);


    useEffect(() => {
        const fetchPosts = async () => {
            try {
                const data = await getAllPosts();
                setPosts(data.posts);
            } catch (error) {
                console.error(error);
            }
        };
        fetchPosts();
    }, [])

    return (
        <div>
            <Router>
                <Navbar isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />

                <Routes>
                    <Route path="/home" element={<Homepage />} />
                    <Route path="/profile" element={<Profile />} />
                    <Route path="/posts" element={<Posts posts={posts} />} />
                    <Route path="/auth" element={<AuthForm
                        token={token}
                        setToken={setToken}
                        user={user}
                        setUser={setUser}
                        setIsLoggedIn={setIsLoggedIn}
                    />}
                    />
                </Routes>

                <footer>
                    <p>This is a footer</p>
                </footer>
            </Router>
        </div>
    )
}

const appElement = document.getElementById('app');

const root = ReactDOM.createRoot(appElement);
root.render(<App />);