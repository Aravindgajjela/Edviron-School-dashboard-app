// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom'; // Fixed import of Navigate
import './App.css';
import Login from './components/Login';
import Logout from './components/Logout'; 
import Dashboard from './components/Dashboard';  

class App extends React.Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Routes> 
            <Route path="/login" element={<Login />} />
            <Route path="/logout" element={<Logout />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/" element={<Navigate to="/login" />} /> 
          </Routes>
        </div>
      </Router>
    );
  }
}

export default App;
