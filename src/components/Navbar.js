import React from 'react';
import { Link } from "react-router-dom";


const Navbar = ({ isLoggedIn, setIsLoggedIn }) => {
    return (
        <header className='flex'>
            <nav className='nav-flex'>
                <h3>Stranger's Things</h3>
                <div className='nav-links'>
                    <Link className='none nav-links' to="/home">Home</Link>
                    <Link className='none' to="/profile">Profile</Link>
                    <Link className='none' to="/posts">Posts</Link>
                    <Link className='none' to="/auth">Login</Link>

                </div>
            </nav>
        </header >
    );
}
export default Navbar;