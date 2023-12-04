// SignUp.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const SignUp = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
  });

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Send signup data to the server
      const response = await fetch('http://localhost:3000/auth/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        // Handle the error (display an error message)
        console.error('Signup failed');
        return;
      }

      // Redirect to the sign-in page after successful signup
      navigate.push('/signin');

    } catch (error) {
      console.error('Error during signup:', error);
    }
  };

  return (
    <div>
      <h2>Sign Up</h2>
      <form onSubmit={handleSubmit}>
        {/* Form fields for name, email, password */}
        <label>Name:</label>
        <input type="text" name="name" onChange={handleInputChange} required />

        <label>Email:</label>
        <input type="email" name="email" onChange={handleInputChange} required />

        <label>Password:</label>
        <input type="password" name="password" onChange={handleInputChange} required />

        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
};

export default SignUp;
