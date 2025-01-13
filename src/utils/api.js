import axios from 'axios';

const jwtToken = localStorage.getItem('token')
// Create an axios instance with the base URL of your backend API
const api = axios.create({
  baseURL: 'https://managementschoolserver.onrender.com/',  // Your backend API URL (change if needed)
  headers: {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${jwtToken}`
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
