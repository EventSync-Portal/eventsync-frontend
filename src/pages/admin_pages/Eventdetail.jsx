import React from 'react';
import '../../css/admin_css/EventDetail.css';
import { FaArrowLeft } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const EventDetail = () => {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate('/event');
  };

  return (
    <div className="event-detail-container">
      <div className="top-bar">
        <FaArrowLeft className="back-icon" onClick={handleBack} />
      </div>

      <div className="event-info">
        <table className="event-table">
          <tbody>
            <tr>
              <th>Date:</th>
              <td>22 May 2025</td>
            </tr>
            <tr>
              <th>Start Time:</th>
              <td>08:00</td>
            </tr>
            <tr>
              <th>End Time:</th>
              <td>12:00</td>
            </tr>
            <tr>
              <th>Location:</th>
              <td>Building 18</td>
            </tr>
            <tr>
              <th>Description:</th>
              <td>
                We would like to formally apply for the use of your venue to host our Annual Graduation Ceremony.
                This event is a significant milestone in the academic journey of our students, marking the successful
                completion of their studies.
              </td>
            </tr>
            <tr>
              <th>Event Details:</th>
              <td>
                Expected Attendance: [Number of Graduates, Staff, and Guests]
              </td>
            </tr>
            <tr>
              <th>Purpose:</th>
              <td>
                The ceremony aims to celebrate and acknowledge the academic achievement of our students.
                We hope for your positive response.
              </td>
            </tr>
          </tbody>
        </table>

        <div className="button-group">
          <button className="approve" onClick={handleBack}>Approve</button>
          <button className="reject" onClick={handleBack}>Reject</button>
        </div>
      </div>
    </div>
  );
};

export default EventDetail;
