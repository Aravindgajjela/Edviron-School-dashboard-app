import React from 'react';
import { Line } from 'react-chartjs-2';
import 'chart.js/auto';

const RealTimeChart = ({ data }) => {
  const chartData = {
    labels: data.map(item => item.time),
    datasets: [
      {
        label: 'Transaction Trends',
        data: data.map(item => item.amount),
        borderColor: 'rgba(75,192,192,1)',
        fill: false,
      },
    ],
  };

  return (
    <div className="chart-container">
      <Line data={chartData} />
    </div>
  );
};

export default RealTimeChart;