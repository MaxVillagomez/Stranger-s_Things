import React from 'react';
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <navbar>
            <h3>Stranger's Things</h3>
            <Link to="/home">Home</Link>
            <Link to="/profile">Profile</Link>
            <Link to="/posts">Posts</Link>
        </navbar>
    );
}
export default Navbar;