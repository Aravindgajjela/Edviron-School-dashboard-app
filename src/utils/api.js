// src/utils/api.js

import axios from 'axios';

// Create an axios instance with the base URL of your backend API
const api = axios.create({
  baseURL: 'http://localhost:5000/',  // Your backend API URL (change if needed)
  headers: {
    'Content-Type': 'application/json',  // Ensure the server knows you're sending JSON
  },
});

// Interceptors (optional): Add custom interceptors for requests or responses
api.interceptors.request.use(
  (config) => {
   
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default api;
