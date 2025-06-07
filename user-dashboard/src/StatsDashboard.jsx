import React from 'react';

function StatsDashboard({ user }) {
  // Dummy stats for the user
  const stats = [
    { label: "Projects Completed", value: 12 },
    { label: "Tasks Pending", value: 5 },
    { label: "Connections", value: 15 }
  ];

  return (
    <div className="stats-dashboard">
      <h3>User Statistics</h3>
      <div className="stats-grid">
        {stats.map((stat, index) => (
          <div key={index} className="stat-item">
            <span className="stat-value">{stat.value}</span>
            <span className="stat-label">{stat.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default StatsDashboard;