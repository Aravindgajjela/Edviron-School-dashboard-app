import React from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';

const TransactionStatus = () => {
  const checkTransactionStatus = async (orderId) => {
    try {
      const response = await axios.get(`/check-status?custom_order_id=${orderId}`);
      console.log(response.data);
      // Display status here
    } catch (error) {
      console.error('Error checking transaction status:', error);
    }
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
          />
        </div>
        <div className="col">
          <button className="btn btn-primary" onClick={() => checkTransactionStatus('order_id')}>
            Check Status
          </button>
        </div>
      </div>
      <div>
        {/* Display transaction status here */}
      </div>
    </div>
  );
};

export default TransactionStatus;