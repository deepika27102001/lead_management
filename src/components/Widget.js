import React, { useState } from 'react';
import { Bar, Line, Pie } from 'react-chartjs-2';
import { Chart, registerables } from 'chart.js';
import './Widget.css';

Chart.register(...registerables);

const Widget = ({ metric, data }) => {
  const [chartType, setChartType] = useState('bar');

  const chartData = {
    labels: ['Total Leads', 'Conversion Rate'],
    datasets: [
      {
        label: metric,
        data: [data.totalLeads, data.conversionRate],
        backgroundColor: [
          'rgba(75, 192, 192, 0.6)',  // Color for Total Leads
          'rgba(153, 102, 255, 0.6)', // Color for Conversion Rate
        ],
      },
    ],
  };

  const chartOptions = {
    scales: {
      y: {
        beginAtZero: true,
        title: {
          display: true,
          text: 'Counts',
        },
      },
    },
  };

  return (
    <div className="widget">
      <h3 className="widget-title">{metric}</h3>
      <label htmlFor="chartType" className="chart-type-label">Select Chart Type:</label>
      <select
        id="chartType"
        value={chartType}
        onChange={(e) => setChartType(e.target.value)}
        className="chart-type-select"
      >
        <option value="bar">Bar</option>
        <option value="line">Line</option>
        <option value="pie">Pie</option>
      </select>

      <div className="calculation">
        <p>Total Leads: <strong>{data.totalLeads}</strong></p>
        <p>Conversion Rate: <strong>{data.conversionRate}%</strong></p>
      </div>

      <div className="chart-container">
        {chartType === 'bar' && <Bar data={chartData} options={chartOptions} />}
        {chartType === 'line' && <Line data={chartData} options={chartOptions} />}
        {chartType === 'pie' && <Pie data={chartData} />}
      </div>
    </div>
  );
};

export default Widget;
