import React, { useRef, useEffect }from 'react';
import AttendeeNavbar from '../../Components/navbar';
import AttendeeSidebar from '../../Components/sidebar';
import dummyEventInfo from '../../dummyEventInfo';
import '../../css/attendee_css/attendee_dashboard.css';
import { NavLink } from 'react-router-dom';

const AttendeeDashboard = () => {

const scrollRefUpcoming = useRef(null);
const scrollRefRecommended = useRef(null);

  
  const handleScroll = (direction, type) => {
  let container;

  if (type === "upcoming") {
    container = scrollRefUpcoming.current;
  } else if (type === "recommended") {
    container = scrollRefRecommended.current;
  }

  if (container) {
    const scrollAmount = 300; // pixels to scroll
    if (direction === "left") {
      container.scrollBy({ left: -scrollAmount, behavior: "smooth" });
    } else {
      container.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  }
};

  return (
    <>
    <div className='attendee-dashboard-layout'>
            <AttendeeNavbar/>

            <div className='attendee-dashboard-side'>
                <AttendeeSidebar/>

                <div className='attendee-dashboard-content'>

                    <h1 className='attendee-events-header'>Upcoming Events</h1>
                    <button onClick={() =>  handleScroll("left", "upcoming")} className="scroll-btn left">
                        ‹
                    </button>

                    <div className="attendee-cards-container" ref={scrollRefUpcoming}>

                        {dummyEventInfo.map((item, index) => (
                        <div className="attendee-event-card" key={index}>
                        <div className='a-event-card-img'>
                            <img
                            src={item.image}
                            alt={item.department}
                            className="a-event-card-image"
                            />
                        <div className="attendee-event-card-header">{item.department}</div>
                        </div>

                        <div className="card-body">
                        <p className='a-event-card-p'><strong>Department:</strong> {item.department}</p>
                        <p className='a-event-card-p'><strong>Date:</strong> {item.date}</p>
                        <p className='a-event-card-p'><strong>Time:</strong> {item.time}</p>
                        <p className='a-event-card-p'><strong>Location:</strong> {item.location}</p>
                        
                        <NavLink to='/attendee_registration' className="a-register-btn">Register</NavLink>
                        </div>
                        </div>
                    ))}
                    </div>

                    <button onClick={() =>  handleScroll("right", "upcoming")} className="scroll-btn right">
                        ›
                    </button>


                    <h1 className='attendee-events-header'>Recommended Events</h1>

                    <button onClick={() =>  handleScroll("right", "recommended")} className="scroll-btn-2 left">
                        ‹
                    </button>

                    <div className="attendee-cards-container" ref={scrollRefRecommended}>

                        {dummyEventInfo.map((item, index) => (
                        <div className="attendee-event-card" key={index}>
                        <div className='a-event-card-img'>
                            <img
                            src={item.image}
                            alt={item.department}
                            className="a-event-card-image"
                            />
                        <div className="attendee-event-card-header">{item.department}</div>
                        </div>

                        <div className="card-body">
                        <p className='a-event-card-p'><strong>Department:</strong> {item.department}</p>
                        <p className='a-event-card-p'><strong>Date:</strong> {item.date}</p>
                        <p className='a-event-card-p'><strong>Time:</strong> {item.time}</p>
                        <p className='a-event-card-p'><strong>Location:</strong> {item.location}</p>
                        
                        <NavLink to='/attendee_registration' className="a-register-btn">Register</NavLink>
                        </div>
                        </div>
                    ))}
                    </div>

                    <button onClick={() =>  handleScroll("left", "recommended")} className="scroll-btn-2 right">
                        ›
                    </button>

                </div>

            </div>
    </div>

    </>
  );
};
export default AttendeeDashboard