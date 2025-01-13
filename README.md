# School Dashboard

A web application for managing and viewing school transaction data, built using React.


## login 
username and password
     "username": "aravind",
    "email": "aravind123@gmail.com",
    "password": "aravind123"

## Features

- **Login Page**: Allows users to log in using a username and password.
- **Dashboard**: A central page to access transaction data and filter it.
- **Transactions Overview**: Displays a list of all transactions with options to filter by search term, status, and date.
- **Transaction Details by School**: Allows users to view transactions based on a specific School ID.
- **Transaction Status Check**: Displays the status of transactions.
- **Real-Time Chart**: Visual representation of transaction trends over time.
- **Dark Mode Toggle**: Switch between light and dark modes.

## Tech Stack

- **Frontend**: React.js
- **Backend**: Express.js (API calls handled by axios)
- **CSS Framework**: Bootstrap
- **Charts**: Chart.js for real-time transaction trends
- **Spinners**: React Spinners (for loading states)

## Installation

1. Clone the repository:
     git clone https://github.com/yourusername/school-dashboard.git

  
2. Navigate to the project directory:


3. Install the dependencies:

4. Start the development server:


5. Open your browser and go to `http://localhost:3000`.

## File Structure

- **src/**: Contains all the React components and logic.
- **components/**: Folder for React components like Login, Dashboard, etc.
- **utils/**: Folder for utility functions like API calls.
- **App.js**: Main entry point for the application.
- **App.css**: Styles for the application.

## Routes

- `/login`: Login page
- `/logout`: Logout page
- `/dashboard`: Dashboard displaying transaction data

## Notes

- You will need a backend API to serve transaction data.
- The API should expose endpoints like:
- `/api/auth/login`: For login functionality
- `/api/transactions`: For fetching all transaction data
- `/api/transactions?school_id={id}`: For fetching transactions by School ID

## Contribution

Feel free to fork this repo and submit pull requests for improvements or bug fixes!

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.


