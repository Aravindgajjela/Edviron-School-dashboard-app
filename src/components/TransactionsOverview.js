import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import api from '../utils/api';
import { ThreeDots } from 'react-loader-spinner';  // Import loader from react-loader-spinner

const TransactionsOverview = () => {
  const [transactions, setTransactions] = useState([]); // State for transactions
  const [searchTerm, setSearchTerm] = useState(''); // State for search input
  const [statusFilter, setStatusFilter] = useState(''); // State for status filter
  const [dateFilter, setDateFilter] = useState(''); // State for date filter
  const [loading, setLoading] = useState(false); // Loading state

  // Fetch transactions on component mount
  useEffect(() => {
    fetchTransactions();
  }, []);

  // Method to fetch transactions data from the backend
  const fetchTransactions = async () => {
    setLoading(true); // Set loading to true before API call
    try {
      const response = await api.get('/api/transactions'); // API call to fetch transactions
      setTransactions(response.data); // Update state with fetched transactions
    } catch (error) {
      console.error('Error fetching transactions:', error.message); // Handle any error
    } finally {
      setLoading(false); // Set loading to false after the response
    }
  };

  // Handler for search input change
  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value); // Update search term state
  };

  // Handler for status filter change
  const handleStatusChange = (event) => {
    setStatusFilter(event.target.value); // Update status filter state
  };

  // Handler for date filter change
  const handleDateChange = (event) => {
    setDateFilter(event.target.value); // Update date filter state
  };

  // Filtered transactions based on search term, status, and date
  const filteredTransactions = transactions.filter((transaction) => {
    const matchesSearch =
      transaction.school_id &&
      transaction.school_id.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesStatus =
      !statusFilter || transaction.status === statusFilter;

    const matchesDate =
      !dateFilter || new Date(transaction.date).toISOString().split('T')[0] === dateFilter;

    return matchesSearch && matchesStatus && matchesDate;
  });

  return (
    <div className="container mt-4">
      <h2>Transactions Overview</h2>
      <div className="row mb-3">
        <div className="col">
          <input
            type="text"
            className="form-control"
            placeholder="Search by Order ID"
            value={searchTerm}
            onChange={handleSearchChange} // Attach handler
          />
        </div>
        <div className="col">
          <select
            className="form-select"
            value={statusFilter}
            onChange={handleStatusChange} // Attach handler
          >
            <option value="">Filter by Status</option>
            <option value="Success">Success</option>
            <option value="Pending">Pending</option>
            <option value="Failed">Failed</option>
          </select>
        </div>
        <div className="col">
          <input
            type="date"
            className="form-control"
            value={dateFilter}
            onChange={handleDateChange} // Attach handler
          />
        </div>
      </div>

      {/* Loader */}
      {loading ? (
        <div className="text-center loader">
          <ThreeDots color="#0b69ff" height={50} width={50} />
        </div>
      ) : (
        <table className="table table-bordered">
          <thead>
            <tr>
              <th>#</th>
              <th>Institution Name</th>
              <th>Date & Time</th>
              <th>Order ID</th>
              <th>Gateway</th>
              <th>order_amount</th>
              <th>transaction_amount</th>
              <th>status</th>
              <th>custom_order_id</th>
            </tr>
          </thead>
          <tbody>
            {/* Map through filtered transactions and render them */}
            {filteredTransactions.map((transaction, index) => (
              <tr key={index+1}>
                <td>{index + 1}</td>
                <td>St. PATRICKS SENIOR SCHOOL</td>
                <td>{new Date(transaction.date).toLocaleString()}</td>
                <td>{transaction.school_id}</td>
                <td>{transaction.gateway}</td>
                <td>{transaction.order_amount}</td>
                <td>{transaction.order_amount}</td>
                <td>{transaction.status}</td>
                <td>{transaction.custom_order_id}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default TransactionsOverview;
