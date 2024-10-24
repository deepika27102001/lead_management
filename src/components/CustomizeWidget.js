import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './CustomizeWidget.css';

const CustomizeWidget = ({ widget, onSave, onCancel }) => {
  const [metric, setMetric] = useState(widget.metric || 'Total Leads');
  const [chartType, setChartType] = useState(widget.chartType || 'bar');
  const [dateRange, setDateRange] = useState('Last 7 days');

  const handleSubmit = (e) => {
    e.preventDefault();
    const updatedWidget = { ...widget, metric, chartType, dateRange };
    onSave(updatedWidget);
  };

  return (
    <div className="customize-widget">
      <h2>Customize Widget</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Metric:
          <select value={metric} onChange={(e) => setMetric(e.target.value)}>
            <option value="Total Leads">Total Leads</option>
            <option value="Conversion Rate">Conversion Rate</option>
            <option value="Sales Volume">Sales Volume</option>
          </select>
        </label>
        <label>
          Chart Type:
          <select value={chartType} onChange={(e) => setChartType(e.target.value)}>
            <option value="bar">Bar Chart</option>
            <option value="line">Line Chart</option>
            <option value="pie">Pie Chart</option>
          </select>
        </label>
        <label>
          Date Range:
          <select value={dateRange} onChange={(e) => setDateRange(e.target.value)}>
            <option value="Last 7 days">Last 7 days</option>
            <option value="Last 30 days">Last 30 days</option>
            <option value="This month">This month</option>
            <option value="Last month">Last month</option>
          </select>
        </label>
        <div className="buttons">
          <button type="submit">Save</button>
          <button type="button" onClick={onCancel}>Cancel</button>
        </div>
      </form>
    </div>
  );
};

CustomizeWidget.propTypes = {
  widget: PropTypes.shape({
    id: PropTypes.number.isRequired,
    metric: PropTypes.string,
    chartType: PropTypes.string,
    dateRange: PropTypes.string,
  }).isRequired,
  onSave: PropTypes.func.isRequired,
  onCancel: PropTypes.func.isRequired,
};

export default CustomizeWidget;
