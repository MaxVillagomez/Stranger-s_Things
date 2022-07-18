import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { Homepage } from './components/index';
import Navbar from './components/Navbar';
import Profile from './components/Profile';





const App = () => {
    const [posts, setPosts] = useState([]);
    const [users, setUsers] = useState([]);
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [currentUser, setCurrentUser] = useState({})

    useEffect(() => {
        const fetchPosts = async () => {
            try {
                const response = await fetch('https://strangers-things.herokuapp.com/api/2206-FTB-ET-WEB-FT-B/posts');
                const data = await response.json();
                setPosts(data.data.posts);
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