import React from 'react';

const SignOut = ({ setAuthenticated }) => {
    const handleSignOut = () => {
    // Clear authentication token from local storage
    localStorage.removeItem('token');
    setAuthenticated(false);
    };

    return (
    <div>
        <h2>Sign Out</h2>
        <button onClick={handleSignOut}>Sign Out</button>
    </div>
    );
};

export default SignOut;
