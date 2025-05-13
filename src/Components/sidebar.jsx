import React, { useState } from "react";
import { Link, NavLink } from 'react-router-dom';
import { FaHome, FaExclamationCircle, FaChalkboardTeacher, FaUserEdit } from "react-icons/fa";  
import { IoEarthOutline } from "react-icons/io5";
import { BsBuildings } from "react-icons/bs";
import '../css/attendee_css/attendee_sidebar.css';

const AttendeeSidebar = () => {

return(
    <>
    <div className="sidebar">
      <ul className='page-links'>
        
        <NavLink to='/attendee_dash' className={({ isActive }) => isActive ? "page-btns active" : "page-btns"}><span><FaHome className="dash-icon"/></span> <span className="label">Dashboard</span></NavLink>
        <NavLink to='/attendee_events' className={({ isActive }) => isActive ? "page-btns active" : "page-btns"}><span><IoEarthOutline className="dash-icon"/></span> <span className="label">My Events</span></NavLink><br/>
        <NavLink to='/all_departments' className={({ isActive }) => isActive ? "page-btns active" : "page-btns"}><span><BsBuildings className="dash-icon"/></span> <span className="label">Departments</span></NavLink><br/>
        <NavLink to='/attendee_profile' className={({ isActive }) => isActive ? "page-btns active" : "page-btns"}> <span><FaUserEdit className="dash-icon"/></span> <span className="label">Profile</span></NavLink>

      </ul>
    </div>

    </>
  )
}
export default AttendeeSidebar;