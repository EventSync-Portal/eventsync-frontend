import React from "react";
import '../../css/attendee_css/attendee_ev_details.css';
import AttendeeNavbar from '../../Components/navbar';
import AttendeeSidebar from '../../Components/sidebar';
import { QRCodeSVG } from 'qrcode.react';
import dummyAttendee from "../../dummyAttendee";
import dummyAgenda from "../../dummyAgenda"; 
import { NavLink } from "react-router-dom";
import ResponsiveQRCode from "./a_qr_code";

const AttendeeEventDetails = () => {

const valueToEncode = "https://example.com";


  return (
    <>
    
    <div className='attendee-event-layout'>
            <AttendeeNavbar/>

            <div className='attendee-event-side'>
                <AttendeeSidebar/>

                <div className='attendee-event-content'>

                    <section className="a-event-details-cont">
                    <h1 className="a-ev-details-header">Entry Code</h1>
                        {dummyAttendee.map((user) => {
        
                    const qrValue = `user:${user.student_num}:${user.email}`;

                    return (
                        <div key={user.student_num} className="a-qr-section">
                            <p className="a-entry-code"><strong> Unique ID: </strong> {user.student_num}</p>
                            <ResponsiveQRCode value={`user:${user.student_num}:${user.email}`} />
                        </div>
                            );
                            })}
                    </section>

                    <section className="a-event-agenda-container">
                        <h2 className="a-ev-agenda-header">Event Schedule</h2>
                        <div className="a-ev-agenda-list">
                            <ul className="a-agenda-list">
                            {dummyAgenda.map((item, index) => (
                            <li key={index} className="a-agenda-item">
                                <span className="agenda-time">{item.time}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- &nbsp;&nbsp;&nbsp;&nbsp;</span>
                                <span className="agenda-activity">{item.activity}</span>
                            </li>
                            ))}
                            </ul>
                        </div>
                        <NavLink to='/attendee_feedback' className="a-feedback-button">Give Feedback</NavLink>
                    </section>

                </div>
            </div>
    </div>

    </>
  )
}
export default AttendeeEventDetails