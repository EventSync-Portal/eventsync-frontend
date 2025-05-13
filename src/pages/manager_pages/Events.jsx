import React from 'react';
import '../../css/manager_css/events.css'; // Create this file next
import { Link } from 'react-router-dom';

const events = [
  {
    id: 1,
    name: "Tech Fest 2025",
    logo: "https://via.placeholder.com/100x100.png?text=Tech+Fest",
    date: "May 10, 2025",
    location: "TUT Campus Hall"
  },
  {
    id: 2,
    name: "AI Expo",
    logo: "https://via.placeholder.com/100x100.png?text=AI+Expo",
    date: "June 22, 2025",
    location: "Innovation Center"
  },
  {
    id: 3,
    name: "Gaming Night",
    logo: "https://via.placeholder.com/100x100.png?text=Gaming+Night",
    date: "July 15, 2025",
    location: "eSports Arena"
  },
];

function Event() {
  return (
    <div className="event-page">
      <h2 className="event-heading">EVENTS ATTENDEES DETAILS</h2>
      <Link to="/attendeeslist"><div className="event-grid">
        {events.map(event => (
          <div className="event-card" key={event.id}>
            <img src={event.logo} className="event-logo" />
            <h3 className="event-name">{event.name}</h3>
            <p className="event-date">{event.date}</p>
            <p className="event-location">{event.location}</p>
          </div>
        ))}
      </div></Link>
    </div>
  );
}

export default Event;