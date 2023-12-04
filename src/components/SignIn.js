// SignIn.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const SignIn = ({ setAuthenticated }) => {
  console.log('Rendering SignIn Component'); 
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const [loading, setLoading] = useState(false);

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);
      
      // Send signin data to the server
      const response = await fetch('http://localhost:3000/auth/signin', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        console.error('Signin failed');
        setLoading(false);
        return;
      }

      const { token } = await response.json();

      // Set the authentication token in local storage or a secure storage mechanism
      localStorage.setItem('token', token);

      setAuthenticated(true);
      navigate.push('/'); // Redirect to the landing page

    } catch (error) {
      console.error('Error during signin:', error);
      setLoading(false);
    }
  };

  return (
    <div>
      <h2>Sign In</h2>
      <form onSubmit={handleSubmit}>
        <label>Email:</label>
        <input type="email" name="email" onChange={handleInputChange} value={formData.email} required />

        <label>Password:</label>
        <input type="password" name="password" onChange={handleInputChange} value={formData.password} required />

        <button type="submit" disabled={loading}>
          {loading ? 'Signing In...' : 'Sign In'}
        </button>
      </form>
    </div>
  );
};

export default SignIn;
