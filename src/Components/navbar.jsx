import React, { useState } from 'react';
import '../css/attendee_css/attendee_navbar.css';
import { IoMdNotifications } from "react-icons/io";
import dummyNotification from '../dummyNotification';
import logoImg from '../assets/logo.png';
import LogoutComponent from './logout';

const AttendeeNavbar = () => {

const [isOpen, setIsOpen] = useState(false);

  const unreadCount = dummyNotification.filter((n) => !n.read).length;

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
        <header className='header'>

            <nav className='lect-navbar'>
                <div className='nav-logo'>
                    <img src={logoImg} className='logoImg'/>
                </div>
            </nav>

            <nav className='lect-navbar'>

              <div className="lect-notification-wrapper">
                <div className="lect-bell-icon" onClick={() => setIsOpen(!isOpen)}>
                <IoMdNotifications size={40} />
                {unreadCount > 0 && <span className="lect-badge">{unreadCount}</span>}
                </div>

              {isOpen && (
              <div className="lect-notification-dropdown">
              {dummyNotification.map(note => (
              <div key={note.id} className={`lect-notification-item ${note.read ? 'read' : 'unread'}`}>
              {note.message}
              </div>
              ))}
              </div>
              )}
              </div>

                <LogoutComponent/>

            </nav>
        </header>
    </div>
  )
}
export default AttendeeNavbar;