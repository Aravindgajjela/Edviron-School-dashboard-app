import React, { useState } from 'react';
import api from '../utils/api';
import 'bootstrap/dist/css/bootstrap.min.css';

const TransactionDetails = () => {
  const [filteredTransactions, setFilteredTransactions] = useState([]); // Filtered transactions
  const [schoolId, setSchoolId] = useState(''); // Input for school ID
  const [error, setError] = useState(null); // Error state for handling issues

  // Fetch transactions for the given school ID
  const fetchTransactions = async () => {
    try {
      if (schoolId.trim() === '') {
        setError('Please enter a valid School ID.');
        setFilteredTransactions([]); // Clear previous results
        return;
      }

      const response = await api.get(`/api/transactions?school_id=${schoolId}`);
      setFilteredTransactions(response.data); // Update filtered transactions
      setError(null); // Clear any previous errors
    } catch (error) {
      console.error('Error fetching transactions:', error);
      setFilteredTransactions([]); // Clear previous results
      setError('No transactions found or an error occurred.');
    }
  };

  // Handle input change for school ID
  const handleInputChange = (event) => {
    setSchoolId(event.target.value); // Update school ID state
  };

  return (
    <div className="container mt-4">
      <h2>Transactions by School</h2>
      <div className="row mb-3">
        <div className="col">
          <input
            type="text"
            className="form-control"
            placeholder="Enter School ID"
            value={schoolId} // Controlled input
            onChange={handleInputChange} // Handle input change
          />
        </div>
        <div className="col">
          <button className="btn btn-primary" onClick={fetchTransactions}>
            Fetch Transactions
          </button>
        </div>
      </div>
      {error && (
        <div className="alert alert-danger" role="alert">
          {error}
        </div>
      )}
      <table className="table table-bordered">
        <thead>
          <tr>
            <th>Sr.no</th>
            <th>School ID</th>
            <th>Gateway</th>
            <th>Order Amount</th>
            <th>Transaction Amount</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {filteredTransactions.map((transaction, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{transaction.school_id}</td>
              <td>{transaction.gateway}</td>
              <td>{transaction.order_amount}</td>
              <td>{transaction.transaction_amount}</td>
              <td>{transaction.status}</td>
            </tr>
          ))}
          {filteredTransactions.length === 0 && !error && (
            <tr>
              <td colSpan="6" className="text-center">
                No transactions found.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default TransactionDetails;
