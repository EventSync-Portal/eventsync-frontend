import React from 'react';
import { FaArrowLeft } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import '../../css/admin_css/Report.css';

const Reports = () => {
  const navigate = useNavigate();

  const events = [
    { id: 1, title: 'Event 1', description: "Body text for whatever you'd like to say..." },
    { id: 2, title: 'Event 2', description: "Body text for whatever you'd like to say..." },
    { id: 3, title: 'Event 3', description: "Body text for whatever you'd like to say..." },
  ];

  return (
    <div className="reports-container">
      <div className="top-bar">
        <FaArrowLeft className="back-icon" onClick={() => navigate('/admin-dashboard')} />
      </div>

      <h2>Reports</h2>

      <div className="event-list">
        {events.map((event) => (
          <div className="event-card" key={event.id}>
            <div className="event-image" />
            <div className="event-details">
              <h4>{event.title}</h4>
              <p>{event.description} Add main takeaway points, quotes, anecdotes, or even a very very short story.</p>
              <button onClick={() => navigate('/report-detail')}>View</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Reports;
