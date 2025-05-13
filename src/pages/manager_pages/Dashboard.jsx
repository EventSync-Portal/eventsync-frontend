import React, { useState } from 'react';
import '../../css/manager_css/dashboard.css';
import { QrCode, Calendar, Users, Bell, Settings, LogOut } from 'lucide-react';
import { Link } from 'react-router-dom';

function ManagerDashboard() {
    const [activePage, setActivePage] = useState('dashboard');

    return (
        <div className="dashboard-container">
            {/* Sidebar */}
            <aside className="sidebar">
                <div className="profile-section">
                    <div className="avatar-placeholder"></div>
                    <p className="user-name">Name & Surname</p>
                </div>
                <nav className="sidebar-nav">
                    <div className="nav-item">EventSync</div>
                    <Link to="/eventlisting"><div className="nav-item"><Calendar size={16} /> Events</div></Link>
                    <Link to="/qrscanning"><div className="nav-item"><QrCode size={16} /> Scan QR Code</div></Link>
                    <Link to="/events"><div className="nav-item"><Users size={16} /> Attendees</div></Link>
                    <div className="nav-item"><Bell size={16} /> Notifications</div>
                    <div className="nav-item"><Settings size={16} /> Settings</div>
                </nav>
            </aside>

            {/* Main */}
            <main className="main-content">
                <div className="topbar">
                    <div className="logout-button"><LogOut size={18} /> Logout</div>
                </div>

                {activePage === 'dashboard' ? (
                    <div className="dashboard-content">
                        <div className="stats-section">
                            <div className="stat-card">
                                <Calendar />
                                <p className="stat-value">5</p>
                                <p className="stat-label">Upcoming Events</p>
                            </div>
                            <div className="stat-card">
                                <Users />
                                <p className="stat-value">120</p>
                                <p className="stat-label">Total Attendees</p>
                            </div>
                        </div>

                        <div className="cards-grid">
                            <div className="card">
                                <h3>CREATE EVENT</h3>
                                <input type="text" placeholder="Title" className="input" disabled/>
                                <input type="text" placeholder="Location" className="input" disabled/>
                                <input type="number" placeholder="Capacity" className="input" disabled/>
                                <textarea placeholder="Venue" className="textarea" disabled></textarea>
                                <Link to="/eventcreation"><button className="submit-btn">Click to create event</button></Link>
                            </div>

                            <div className="card">
                                <h3>BRANDING CUSTOMIZATION</h3>
                                <label className="label">Theme:</label>
                                <select className="select">
                                    <option value="">Select Theme</option>
                                </select>
                                <label className="label">Logo</label>
                                <div className="upload-row">
                                    <button className="upload-btn">📁 Upload</button>
                                </div>
                                <Link to="/brandingcustom"><button className="submit-btn">Click to Customize</button></Link>
                                <div className="logo-box">
                                    <p>Logo</p>
                                </div>
                                <p className="banner-text">Promotional banner</p>
                                <button className="outline-btn">Reject</button>
                            </div>

                            <div className="card">
                                <h3>WRITE NOTIFICATIONS</h3>
                                <input type="text" placeholder="Title" className="input" disabled/>
                                <textarea placeholder="Message" className="textarea" disabled></textarea>   
                                <button className="submit-btn">Write Notification</button>
                            </div>

                            <div className="card">
                                <h3>SCAN QR CODES</h3>
                                <div >
                                    <Link to="/qrscanning"><QrCode size={200} /></Link>
                                </div>
                            </div>

                        </div>
                    </div>
                ) : (
                    <div className="scan-page">
                        <h2>Scan QR Code</h2>
                        <div className="qr-box"><QrCode size={100} /></div>
                        <p>Point your camera at a QR code to check in attendees.</p>
                    </div>
                )}
            </main>
        </div>
    );
}

export default ManagerDashboard;
