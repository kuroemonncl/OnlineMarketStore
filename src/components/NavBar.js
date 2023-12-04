//NavBar.js
import React, {useState} from 'react';
import { Link } from 'react-router-dom';

const NavBar = ({ isAuthenticated }) => {
    return (
    <nav>
        <Link to="/">Home</Link>
        {isAuthenticated ? (
        <>
            <Link to="/myprofile">My Profile</Link>
            <Link to="/users">Users</Link>
            <Link to="/signout">Sign Out</Link>
        </>
        ) : (
        <>
            <Link to="/signup">Sign Up</Link>
            <Link to="/signin">Sign In</Link>
        </>
        )}
    </nav>
    );
};

export default NavBar;
