import React, { useState } from 'react';
import api from '../utils/api';
import 'bootstrap/dist/css/bootstrap.min.css';

const TransactionStatus = () => {
  const [status, setStatus] = useState(""); // State for input value
  const [displayStatus, setDisplayStatus] = useState(""); // State to display transaction status
  const [error, setError] = useState(null); // State to handle errors

  // Function to check transaction status
  const checkTransactionStatus = async () => {
    try {
      const response = await api.get(`/api/transactions/status/${status}`);
      setDisplayStatus(response.data.status);
      setError(null); // Clear any previous errors
    } catch (error) {
      console.error('Error checking transaction status:', error);
      setDisplayStatus("");
      setError("Failed to fetch transaction status. Please check the Custom Order ID.");
    }
  };

  // Handle input change
  const handleStatusChange = (event) => {
    setStatus(event.target.value); // Update status with input value
  };

  return (
    <div className="container mt-4">
      <h2>Transaction Status</h2>
      <div className="row mb-3">
        <div className="col">
          <input
            type="text"
            className="form-control"
            placeholder="Enter Custom Order ID"
            value={status} // Controlled input
            onChange={handleStatusChange} // Update state on input change
          />
        </div>
        <div className="col">
          <button className="btn btn-primary" onClick={checkTransactionStatus}>
            Check Status
          </button>
        </div>
      </div>
      <div>
        {/* Display transaction status or error */}
        {displayStatus && <h3>Status: {displayStatus}</h3>}
        {error && <p className="text-danger">{error}</p>}
      </div>
    </div>
  );
};

export default TransactionStatus;
