import React from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';

const TransactionDetails = () => {
  const fetchTransactionsBySchool = async (schoolId) => {
    try {
      const response = await axios.get(`/transactions?school_id=${schoolId}`);
      console.log(response.data);
      // Process data here
    } catch (error) {
      console.error('Error fetching transactions by school:', error);
    }
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
          />
        </div>
        <div className="col">
          <button className="btn btn-primary" onClick={() => fetchTransactionsBySchool('school_id')}>
            Fetch Transactions
          </button>
        </div>
      </div>
      <table className="table table-bordered">
        <thead>
          <tr>
            <th>#</th>
            <th>collect_id</th>
            <th>gateway</th>
            <th>order_amount</th>
            <th>transaction_amount</th>
            <th>status</th>
          </tr>
        </thead>
        <tbody>
          {/* Map through school transactions here */}
        </tbody>
      </table>
    </div>
  );
};

export default TransactionDetails;