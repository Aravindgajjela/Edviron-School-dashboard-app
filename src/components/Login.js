import React, { useState } from 'react';
import { Navigate } from 'react-router-dom'; 
import api from '../utils/api'; 
import { ClipLoader } from 'react-spinners';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loggedIn, setLoggedIn] = useState(false);
  const [loading, setLoading] = useState(false);  // New state for loading
  
  // Handle input change
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (name === 'username') {
      setUsername(value);
    } else if (name === 'password') {
      setPassword(value);
    }
  };

  // Handle login form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    setLoading(true);  // Set loading to true when the request starts
    
    api
      .post('/api/auth/login', { username, password })
      .then((response) => {
        console.log("Login Success", response.data);
        localStorage.setItem('token', response.data.jwtToken);
        setLoggedIn(true);
        setLoading(false);  // Set loading to false after response is received
      })
      .catch((error) => {
        setLoading(false);  // Set loading to false after response is received
        if (error.response) {
          console.log("Error Response Data: ", error.response.data);
          setError('Invalid credentials');
        } else if (error.request) {
          console.error("No Response Received: ", error.request);
          setError('Server not reachable');
        } else {
          console.error("Error Message: ", error.message);
          setError('Unexpected error occurred');
        }
      });
  };

  if (loggedIn) {
    return <Navigate to="/dashboard" />; // Use Navigate for redirection
  }

  return (
    <div className="container mt-4">
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="username" className="form-label">
            Username
          </label>
          <input
            type="text"
            id="username"
            name="username"
            className="form-control"
            value={username}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">
            Password
          </label>
          <input
            type="password"
            id="password"
            name="password"
            className="form-control"
            value={password}
            onChange={handleInputChange}
            required
          />
        </div>
        
        {error && <div className="alert alert-danger">{error}</div>}
        
        <button type="submit" className="btn btn-primary" disabled={loading}>
          Login
        </button>
        
        {/* Show loader when loading is true */}
        {loading && (
          <div className="mt-3 loader">
            <ClipLoader color="#0b69ff" height={50} width={50} />
          </div>
        )}
      </form>
    </div>
  );
};

export default Login;
