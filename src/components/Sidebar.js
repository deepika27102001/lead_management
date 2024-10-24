import React from 'react';
import './Sidebar.css';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <h2 className="sidebar-title">EzyMetrics</h2>
      <ul className="sidebar-menu">
        <li className="sidebar-item">Dashboard</li>
        <li className="sidebar-item">Leads</li>
        <li className="sidebar-item">Analytics</li>
        <li className="sidebar-item">Reports</li>
      </ul>
    </div>
  );
};

export default Sidebar;
