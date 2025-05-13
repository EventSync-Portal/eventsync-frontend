import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { ArrowLeft } from 'lucide-react';
import '../../css/manager_css/attendees.css';

function EventAttendeesPage() {
  const [attendees, setAttendees] = useState([]);
  const [loading, setLoading] = useState(true);
  const eventName = "Tech Fest 2025";

  const handleBack = () => {
    console.log('Back button clicked');
  };

  useEffect(() => {
    // Simulate fetching dummy data
    const fetchAttendees = async () => {
      try {
        // Dummy data simulation
        const response = await axios.get('/api/attendees'); // <-- simulate endpoint
        setAttendees(response.data);
      } catch (error) {
        console.error('Failed to fetch attendees:', error);

        // Fallback dummy data
        setAttendees([
          { name: 'Khanyisile', surname: 'Mthombeni', email: 'Khanie@gmail.com' },
          { name: 'Thandeka', surname: 'Nkadimeng', email: 'Thandie@gmail.com' },
          { name: 'Phumudzo', surname: 'Mawelela', email: 'Phumu@gmail.com' },
          { name: 'Mdeva', surname: 'Kgobe', email: 'Mdeva@gmail.com' },
          { name: 'Thabiso', surname: 'Shoba', email: 'Thabis@gmail.com' },
          { name: 'Andile', surname: 'Nkalanga', email: 'Andile@gmail.com' },
        ]);
      } finally {
        setLoading(false);
      }
    };

    fetchAttendees();
  }, []);

  return (
    <div className="attendees-container">
      <div className="attendees-header">
        <button className="back-button" onClick={handleBack}>
          <ArrowLeft size={20} />
        </button>
      </div>

      <h3 className="event-name">Event Name: {eventName}</h3>

      {loading ? (
        <p>Loading attendees...</p>
      ) : (
        <div className="attendees-table">
          <div className="attendees-row header-row">
            <div className="column">ID</div>
            <div className="column">NAME</div>
            <div className="column">SURNAME</div>
            <div className="column">EMAIL ADDRESS</div>
          </div>

          {attendees.map((attendee, index) => (
            <div key={index} className="attendees-row">
              <div className="column">{index + 1}</div>
              <div className="column">{attendee.name}</div>
              <div className="column">{attendee.surname}</div>
              <div className="column">{attendee.email}</div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default EventAttendeesPage;
