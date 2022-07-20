import React from 'react';
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <nav>
            <h3>Stranger's Things</h3>
            <Link to="/home">Home</Link>
            <Link to="/profile">Profile</Link>
            <Link to="/posts">Posts</Link>
        </nav>
    );
}
export default Navbar;