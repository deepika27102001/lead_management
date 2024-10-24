import React, { useState } from 'react';
import Widget from './Widget';
import CustomizeWidget from './CustomizeWidget';
import './Dashboard.css';

const Dashboard = () => {
  const [widgets, setWidgets] = useState([]);
  const [editingWidget, setEditingWidget] = useState(null); 

  const handleAddWidget = (newWidget) => {
    setWidgets([...widgets, newWidget]);
  };

  const handleEditWidget = (updatedWidget) => {
    setWidgets(widgets.map(widget => (widget.id === updatedWidget.id ? updatedWidget : widget)));
    setEditingWidget(null); 
  };

  const handleCancelEdit = () => {
    setEditingWidget(null); 
  };

  const handleRemoveWidget = (id) => {
    setWidgets(widgets.filter(widget => widget.id !== id));
  };

  return (
    <div className="dashboard">
      <h1>Dashboard</h1>
      <button className="add-widget" onClick={() => handleAddWidget({ id: Date.now(), metric: 'Total Leads', chartType: 'bar', dateRange: 'Last 7 days' })}>
        Add Widget
      </button>
      {widgets.map(widget => (
        <div key={widget.id}>
          <Widget
            metric={widget.metric}
            data={{ totalLeads: 250, conversionRate: 75 }} 
            onRemove={() => handleRemoveWidget(widget.id)}
            onEdit={() => setEditingWidget(widget)} 
          />
        </div>
      ))}
      {editingWidget && (
        <CustomizeWidget
          widget={editingWidget}
          onSave={handleEditWidget}
          onCancel={handleCancelEdit}
        />
      )}
    </div>
  );
};

export default Dashboard;
