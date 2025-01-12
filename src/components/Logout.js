// src/components/Logout.js
import React from 'react';
import { Navigate } from 'react-router-dom';  // Import Navigate instead of Redirect
import api from '../utils/api'; // Import your axios instance

class Logout extends React.Component {
  state = {
    loggedOut: false,
  };

  handleLogout = function () {
    localStorage.removeItem('token');  // Remove the token
    // Optionally, reset the Authorization header
    api.defaults.headers['Authorization'] = '';  

    // Set the state to indicate the user has logged out
    this.setState({ loggedOut: true });
  };

  render() {
    if (this.state.loggedOut) {
      return <Navigate to="/login" />; // Use Navigate for redirection
    }

    return (
      <button onClick={this.handleLogout} className="btn btn-danger">
        Logout
      </button>
    );
  }
}

export default Logout;
