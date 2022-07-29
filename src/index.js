import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import {
    getAllPosts,
    getMe
} from './API/index';
import {
    Navbar,
    Profile,
    Posts,
    Homepage,
    Login,
    Register,
    CreateNewPost
} from './components/index';

const App = () => {
    const [posts, setPosts] = useState([]);
    const [username, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const [token, setToken] = useState('');
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [user, setUser] = useState({});
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState('');

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
                setUserPosts({posts: data.posts})
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
                <Navbar 
                    isLoggedIn={isLoggedIn} 
                    setIsLoggedIn={setIsLoggedIn} 
                    setUser={setUser} 
                    setToken={setToken}
                 />

                <Routes>
                    <Route path="/" element={<Homepage />} />
                    <Route path="/profile" element={<Profile posts={posts} isLoggedIn={isLoggedIn} />} />
                    <Route path="/posts" element={<Posts posts={posts} isLoggedIn={isLoggedIn}/>} />
                    <Route path="/login" element={
                        <Login
                            setToken={setToken}
                            username={username}
                            password={password}
                            setUserName={setUserName}
                            setPassword={setPassword}
                            setIsLoggedIn={setIsLoggedIn}
                        />}
                    />
                    <Route path="/register" element={
                        <Register 
                            username={username}
                            password={password}
                            setUserName={setUserName} 
                            setPassword={setPassword}
                        />}
                    />
                    <Route path="/createnewpost" element={
                        <CreateNewPost
                            title={title}
                            setTitle={setTitle}
                            description={description}
                            setDescription={setDescription}
                            price={price}
                            setPrice={setPrice}
                            isLoggedIn={isLoggedIn}
                            token={token}
                        />}/>
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