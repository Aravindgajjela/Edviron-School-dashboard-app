import React, { Component } from 'react';
import { FaMoon, FaSun } from 'react-icons/fa'; // Importing icons from react-icons
import './DarkModeToggle.css';

class DarkModeToggle extends Component {
  state = {
    isDarkMode: false, // Initialize state for dark mode
  };

  toggleTheme = () => {
    this.setState((prevState) => {
      const newIsDarkMode = !prevState.isDarkMode;
      document.body.classList.toggle('dark-mode', newIsDarkMode);
      return { isDarkMode: newIsDarkMode };
    });
  };

  render() {
    const { isDarkMode } = this.state;
    return (
      <div className="toggle-container">
        <button className="btn btn-secondary" onClick={this.toggleTheme}>
          {isDarkMode ? <FaSun /> : <FaMoon />} {/* Show Sun for Dark mode, Moon for Light mode */}
          <span className="ml-2">{isDarkMode ? 'Light Mode' : 'Dark Mode'}</span>
        </button>
      </div>
    );
  }
}

export default DarkModeToggle;
