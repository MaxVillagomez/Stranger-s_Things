import React from 'react';
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <header className='flex'>
            <nav>
                <h3 className='flex-start'>Stranger's Things</h3>
                <div className='navLinks'>
                    <Link className={'none'} to="/home">Home</Link>
                    <Link className={'none'} to="/profile">Profile</Link>
                    <Link className={'none'} to="/posts">Posts</Link>
                </div>
            </nav>
        </header>
    );
}
export default Navbar;