import React from "react";
import AttendeeNavbar from '../../Components/navbar';
import AttendeeSidebar from '../../Components/sidebar';
import '../../css/attendee_css/attendee_events.css';
import dummyEventInfo from "../../dummyEventInfo";
import { NavLink } from "react-router-dom";

const AttendeeEvents = () => {
  return (
    <>
         <div className='attendee-event-layout'>
            <AttendeeNavbar/>

            <div className='attendee-event-side'>
                <AttendeeSidebar/>

                <div className='attendee-event-content'>

                    <h1 className="a-reg-page-heading">Registered Events</h1>
                    <div className="a-event-card-container">
                        {dummyEventInfo.map((event) => (
                        <div key={event.id} className="a-event-card">
                        <div className="image-wrapper">
                            <img src={event.image} alt={event.title} className="a-card-image" />
                            <span className="department-badge">{event.department}</span>
                        </div>
                    <div className="a-card-body">
                        <h3 className="a-event-title">{event.title}</h3>
                        <p className="a-event-detail"><strong>Location: </strong>{event.location}</p>
                        <p className="a-event-detail"><strong>Date: </strong>{event.date}</p>
                        <NavLink to='/attendee_ev_details' className="a-details-button">Details</NavLink>
                    </div>
                        </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}
export default AttendeeEvents