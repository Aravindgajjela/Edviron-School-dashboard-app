import React from 'react';
import TransactionsOverview from './TransactionsOverview';
import TransactionDetails from './TransactionDetails';
import TransactionStatus from './TransactionStatus';
import DarkModeToggle from './DarkModeToggle'; // Import your dark mode toggle component

class Dashboard extends React.Component {
  state = {
    activeTab: 'overview', // Default active tab
    transactionDetails: []
  };

  // Method to switch tabs
  switchTab = (tab) => {
    this.setState({ activeTab: tab });
  };
  render() {
    const { activeTab } = this.state;
    return (
      <div className="container mt-4">
        <h1>Dashboard</h1>
        {/* Dark Mode Toggle */}
        <DarkModeToggle />
        {/* Tab Navigation */}
        <div className="mb-3">
          <button
            className={`btn btn-${activeTab === 'overview' ? 'primary' : 'secondary'} me-2`}
            onClick={() => this.switchTab('overview')}
          >
            Transactions Overview
          </button>
          <button
            className={`btn btn-${activeTab === 'details' ? 'primary' : 'secondary'} me-2`}
            onClick={() => this.switchTab('details')}
          >
            Transaction Details by School
          </button>
          <button
            className={`btn btn-${activeTab === 'status' ? 'primary' : 'secondary'}`}
            onClick={() => this.switchTab('status')}
          >
            Transaction Status Check
          </button>
        </div>

        {/* Tab Content */}
        {activeTab === 'overview' && <TransactionsOverview />}
        {activeTab === 'details' && <TransactionDetails />}
        {activeTab === 'status' && <TransactionStatus />}
      </div>
    );
  }
}

export default Dashboard;
