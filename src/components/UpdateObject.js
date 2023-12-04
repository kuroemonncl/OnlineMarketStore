import React, { useState, useEffect } from 'react';

const UpdateObject = ({ match }) => {
    const userId = match.params.userId;
    const [userData, setUserData] = useState({
    name: '',
    email: '',
    password: '',
    });

    useEffect(() => {
    const fetchUserDetails = async () => {
        try {
        const response = await fetch(`http://localhost:3000/api/users/${userId}`);
        if (response.ok) {
            const data = await response.json();
            setUserData(data.data);
        } else {
            console.error('Failed to fetch user details');
        }
        } catch (error) {
        console.error('Error during user details fetch:', error);
        }
    };

    fetchUserDetails();
    }, [userId]);

    const handleInputChange = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
    e.preventDefault();

    try {
        const response = await fetch(`http://localhost:3000/api/users/${userId}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData),
        });

        if (!response.ok) {
        console.error('User update failed');
        return;
        }

        // Handle success (show a success message) 
    } catch (error) {
        console.error('Error during user update:', error);
    }
    };

    return (
    <div>
        <h2>Update User</h2>
        <form onSubmit={handleSubmit}>
        <label>Name:</label>
        <input
            type="text"
            name="name"
            value={userData.name}
            onChange={handleInputChange}
            required
        />

        <label>Email:</label>
        <input
            type="email"
            name="email"
            value={userData.email}
            onChange={handleInputChange}
            required
        />

        <label>Password:</label>
        <input
            type="password"
            name="password"
            value={userData.password}
            onChange={handleInputChange}
            required
        />

        <button type="submit">Update User</button>
        </form>
    </div>
    );
};

export default UpdateObject;
