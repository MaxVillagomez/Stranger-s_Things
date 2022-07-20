import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { Homepage } from './components/index';
import Navbar from './components/Navbar';
import Profile from './components/Profile';
import Posts from './components/Posts';
import { getAllPosts } from './API/api';





const App = () => {
    const [posts, setPosts] = useState([]);
    const [users, setUsers] = useState([]);
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [currentUser, setCurrentUser] = useState({})

    useEffect(() => {
        const fetchPosts = async () => {
            try {
                const data = await getAllPosts();
                console.log("This is the data: ", data)
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
                <Navbar />

                <Routes>
                    <Route path="/home" element={<Homepage />} />
                    <Route path="/profile" element={<Profile />} />
                    <Route path="/posts" element={<Posts posts={posts} />} />
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