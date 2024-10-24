import React, { useState } from 'react';

const CustomizeModal = ({ onClose, addWidget }) => {
  const [metric, setMetric] = useState('Lead Metrics');
  const [chartType, setChartType] = useState('bar'); 

  const handleSubmit = () => {
    const newWidget = { id: Date.now(), metric, chartType }; 
    addWidget(newWidget);
    onClose();
  };

  return (
    <div className="modal">
      <h2>Customize Widget</h2>
      <label>
        Metric:
        <select value={metric} onChange={(e) => setMetric(e.target.value)}>
          <option value="Lead Metrics">Lead Metrics</option>
        
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
      <button onClick={handleSubmit}>Save</button>
      <button onClick={onClose}>Cancel</button>
    </div>
  );
};

export default CustomizeModal;
