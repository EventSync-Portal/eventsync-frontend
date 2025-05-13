import React from 'react';
import '../../css/admin_css/Event.css';
import { FaArrowLeft } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const eventData = [
  { id: 1, hasDepartment: true },
  { id: 2, hasDepartment: true },
  { id: 3, hasDepartment: false },
  { id: 4, hasDepartment: false },
  { id: 5, hasDepartment: true },
  { id: 6, hasDepartment: false },
  { id: 7, hasDepartment: false },
  { id: 8, hasDepartment: false },
];

const Events = () => {
  const navigate = useNavigate();

  return (
    <div className="events-container">
      <div className="top-bar">
        <FaArrowLeft className="back-icon" onClick={() => navigate('/admin-dashboard')} />
      </div>

      <div className="event-grid">
        {eventData.map((event) => (
          <div className="event-card" key={event.id}>
            {event.hasDepartment && <div className="tag">Department</div>}
            <div className="image-placeholder"></div>
            <div className="info">
              <p className="label">Event</p>
              <p className="date"><strong>Date:</strong> 22 May 2025</p>
              <button onClick={() => navigate('/event-detail')}>View</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Events;
