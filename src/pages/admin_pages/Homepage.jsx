import React from 'react';
import '../../css/admin_css/homepage.css';
import { Link } from 'react-router-dom';

function AdminDashboard() {
  return (
    <div className="dashboard">
      <aside className="sidebar">
        <div className="profile"></div>
        <h2>
          Event<span>Sync</span>
        </h2>
        <nav>
          <ul>
            <li><Link to="/event" className="nav-link">Event</Link></li>
            <li><Link to="/report" className="nav-link">Report</Link></li>
            <li><Link to="/schedul" className="nav-link">Calendar</Link></li>
          </ul>
        </nav>
      </aside>

      <main className="main">
        <header className="header">
          <div className="notification">Notification</div>
          <div className="logout">Log out</div>
        </header>

        <section className="overview">
          <div className="card">40<br />Total Events</div>
          <div className="card">5<br />Upcoming Events</div>
          <div className="card">12<br />Pending Approvals</div>
          <div className="card">2<br />Policy Violations</div>
        </section>

        <section className="event-section">
          <h3>All Events</h3>
          <div className="event-table">
            <div className="event-row heading">
              <div>Event Name</div>
              <div>Organizer</div>
              <div>Date</div>
              <div>Location</div>
              <div>Status</div>
            </div>
            <div className="event-row">
              <div>Tech Fest 2025</div>
              <div>Faculty of ICT</div>
              <div>2025-05-03</div>
              <div>Campus Hall A</div>
              <div>Approved</div>
            </div>
            <div className="event-row">
              <div>Career Expo</div>
              <div>Student Support</div>
              <div>2025-05-10</div>
              <div>Main Arena</div>
              <div>Pending</div>
            </div>
          </div>
        </section>

        <section className="calendar-attendance">
          <div className="calendar">
            <h3>April 2025</h3>
            <div className="calendar-grid">
              {/* Calendar days can be dynamically rendered here */}
            </div>
          </div>
          <div className="attendance">
            <h3>Event Attendance</h3>
            <div className="chart"></div>
          </div>
          <div className="engagement">
            <h3>Engagement by Event Type</h3>
            <div className="chart"></div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default AdminDashboard;
