import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import Widget from './components/Widget';
import AddWidgetModal from './components/AddWidgetModal';
import './App.css';

const App = () => {
  const [widgets, setWidgets] = useState([
    { id: 1, metric: 'Total Leads', data: { totalLeads: 100, conversionRate: 75 }, chartType: 'bar' },
    { id: 2, metric: 'Sales Growth', data: { totalLeads: 50, conversionRate: 60 }, chartType: 'line' },
  ]);
  
  const [showAddWidgetModal, setShowAddWidgetModal] = useState(false);

  const addWidget = (newWidget) => {
    setWidgets([...widgets, newWidget]);
  };

  const removeWidget = (id) => {
    setWidgets(widgets.filter(widget => widget.id !== id));
  };

  return (
    <div className="App">
      <Sidebar />
      <div className="main-content">
        <h1>Dashboard</h1>
        <button className="btn add-widget" onClick={() => setShowAddWidgetModal(true)}>Add Widget</button>


        <div className="widgets">
          {widgets.map(widget => (
            <Widget 
              key={widget.id} 
              metric={widget.metric} 
              data={widget.data} 
              chartType={widget.chartType} 
              onRemove={() => removeWidget(widget.id)} 
            />
          ))}
        </div>
        {showAddWidgetModal && (
          <AddWidgetModal 
            onClose={() => setShowAddWidgetModal(false)} 
            addWidget={addWidget} 
          />
        )}
      </div>
    </div>
  );
};

export default App;
