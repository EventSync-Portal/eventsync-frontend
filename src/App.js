import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
// admin imports
import AdminDashboard from "./pages/admin_pages/Homepage";
import Events from "./pages/admin_pages/Event";
import EventDetail from "./pages/admin_pages/Eventdetail";
import ReportDetail from "./pages/admin_pages/ReportDetail";
import Schedul from "./pages/admin_pages/Schedul";
import Reports from "./pages/admin_pages/Report";

// attendee imports
import AttendeeDashboard from './pages/attendee_pages/attendee_dashboard';
import AttendeeRegistration from "./pages/attendee_pages/attendee_register";
import AttendeeEvents from "./pages/attendee_pages/attendee_events";
import AttendeeEventDetails from "./pages/attendee_pages/attendee_ev_details";
import AttendeeFeedback from "./pages/attendee_pages/attendee_feedback";
import AllDepartments from "./pages/attendee_pages/all_departments";
import AttendeeProfile from "./pages/attendee_pages/attendee_profile";

// manager imports
import Event from "./pages/manager_pages/Events";
import ManagerDashboard from "./pages/manager_pages/Dashboard";
import EventDetails from "./pages/manager_pages/EventDetails";
import CreateEvent from "./pages/manager_pages/CreateEvent";
import EventAttendeesPage from "./pages/manager_pages/Attendees";
import BrandingCustomization from "./pages/manager_pages/Branding";
import LandingPage from "./pages/Landing";


const scheduleData = {
  classes: [
    {
      day: "Monday",
      className: "Math",
      room: "A101",
      professor: "Dr. Smith",
      startTime: "08:00",
      endTime: "10:00"
    },
    {
      day: "Wednesday",
      className: "Physics",
      room: "B205",
      professor: "Dr. Jane",
      startTime: "11:00",
      endTime: "13:00"
    },
    {
      day: "Friday",
      className: "Chemistry",
      room: "C301",
      professor: "Dr. Brown",
      startTime: "14:00",
      endTime: "16:00"
    }
  ]
};

const App = () => {

  const[user, setUser] = useState(null);

  return (
    <Routes>
        <Route path = '/' element = {<LandingPage/>} />

        {/* Admin Routes */}
        <Route path="/admin-dashboard" element={<AdminDashboard />} />
        <Route path="/event" element={<Events />} />
        <Route path="/event-detail" element={<EventDetail />} />
        <Route path="/report" element={<Reports />} />
        <Route path="/report-detail" element={<ReportDetail />} />
        <Route path="/schedule" element={<Schedul schedule={scheduleData} />} />

        {/* Attendee Routes */}
        <Route path='/attendee_dash' element={<AttendeeDashboard/>}/>
        <Route path='/attendee_registration' element={<AttendeeRegistration/>}/>
        <Route path='/attendee_events' element={<AttendeeEvents/>}/>
        <Route path='/attendee_ev_details' element={<AttendeeEventDetails/>}/>
        <Route path='/attendee_feedback' element={<AttendeeFeedback/>}/>
        <Route path='/all_departments' element={<AllDepartments/>}/>
        <Route path='/attendee_profile' element={<AttendeeProfile/>}/>

        {/* Manager Routes */}
        <Route path="/managerdash" element={<ManagerDashboard />} />
        <Route path="/eventlisting" element={<EventDetails />} />
        <Route path="/eventcreation" element={<CreateEvent />} />
        <Route path="/attendeeslist" element={<EventAttendeesPage />} />
        <Route path="/brandingcustom" element={<BrandingCustomization />} />
        <Route path="/events" element={<Event />} />

      
    </Routes>
  );
}

export default App;
