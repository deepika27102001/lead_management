import React, { useState } from 'react';
import './AddWidgetModal.css';

const AddWidgetModal = ({ onClose, addWidget }) => {
  const [metric, setMetric] = useState('Total Leads');
  const [chartType, setChartType] = useState('bar');
  const [totalLeads, setTotalLeads] = useState(0);
  const [conversionRate, setConversionRate] = useState(0);

  const handleSubmit = () => {
    const newWidget = {
      id: Date.now(),
      metric,
      data: { totalLeads, conversionRate },
      chartType,
    };
    addWidget(newWidget);
    onClose();
  };

  return (
    <div className="modal">
      <h2>Add Widget</h2>
      <label>
        Metric:
        <select value={metric} onChange={(e) => setMetric(e.target.value)}>
          <option value="Total Leads">Total Leads</option>
          <option value="Sales Growth">Sales Growth</option>
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
        Total Leads:
        <input type="number" value={totalLeads} onChange={(e) => setTotalLeads(e.target.value)} />
      </label>
      <label>
        Conversion Rate:
        <input type="number" value={conversionRate} onChange={(e) => setConversionRate(e.target.value)} />
      </label>
      <div className="button-group">
        <button className="btn add-widget" onClick={handleSubmit}>Add Widget</button>
        <button className="btn cancel" onClick={onClose}>Cancel</button>
      </div>
    </div>
  );
};

export default AddWidgetModal;
