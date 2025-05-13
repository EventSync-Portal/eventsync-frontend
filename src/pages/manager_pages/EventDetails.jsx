import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Edit, Trash2, ArrowLeft } from 'lucide-react';
import '../../css/manager_css/eventdetails.css';

function EventDetails() {
  const [events, setEvents] = useState([]);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [selectedEventIndex, setSelectedEventIndex] = useState(null);
  const [editedEvent, setEditedEvent] = useState({});

  // Simulated API call
  useEffect(() => {
    const fetchEvents = async () => {
      try {
        // Replace this URL with your backend endpoint (e.g., 'http://localhost:5000/api/events')
        const response = await axios.get('/api/events');
        setEvents(response.data);
      } catch (error) {
        console.error('Error fetching events:', error);

        // Dummy fallback data
        setEvents([
          {
            title: "TUT Soccer Cup 2025",
            date: "12 April 2025",
            time: "8:00 - 17:00",
            venue: "TUT eMalahleni Field",
            category: "Sports Tournament",
            capacity: 300,
            description: "Annual soccer tournament between faculties.",
          },
          {
            title: "Student Talent Night",
            date: "02 May 2025",
            time: "18:00 - 22:00",
            venue: "TUT eMalahleni Hall",
            category: "Entertainment",
            capacity: 500,
            description: "Talent show for students to showcase skills.",
          }
        ]);
      }
    };

    fetchEvents();
  }, []);

  const handleDelete = () => {
    const updatedEvents = [...events];
    updatedEvents.splice(selectedEventIndex, 1);
    setEvents(updatedEvents);
    setShowDeleteModal(false);
  };

  const handleEditSave = () => {
    const updatedEvents = [...events];
    updatedEvents[selectedEventIndex] = editedEvent;
    setEvents(updatedEvents);
    setShowEditModal(false);
  };

  return (
    <div className="event-details-container">
      <div className="event-header">
        <button className="back-button">
          <ArrowLeft size={20} />
        </button>
      </div>

      <h2 className="event-title">EVENTS DETAILS</h2>

      <div className="event-table">
        <div className="table-header">
          <div className="table-cell">Event Title</div>
          <div className="table-cell">Date</div>
          <div className="table-cell">Time</div>
          <div className="table-cell">Venue</div>
          <div className="table-cell">Category</div>
          <div className="table-cell">Capacity</div>
          <div className="table-cell">Action</div>
        </div>

        {events.map((event, index) => (
          <div className="table-row" key={index}>
            <div className="table-cell">{event.title}</div>
            <div className="table-cell">{event.date}</div>
            <div className="table-cell">{event.time}</div>
            <div className="table-cell">{event.venue}</div>
            <div className="table-cell">{event.category}</div>
            <div className="table-cell">{event.capacity}</div>
            <div className="table-cell action-buttons">
              <button
                className="edit-btn"
                onClick={() => {
                  setSelectedEventIndex(index);
                  setEditedEvent(event);
                  setShowEditModal(true);
                }}
              >
                <Edit size={14} /> EDIT
              </button>
              <button
                className="delete-btn"
                onClick={() => {
                  setSelectedEventIndex(index);
                  setShowDeleteModal(true);
                }}
              >
                <Trash2 size={14} /> DELETE
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Delete Modal */}
      {showDeleteModal && (
        <div className="modal-overlay">
          <div className="modal">
            <h3>Confirm Deletion</h3>
            <p>Are you sure you want to delete this event?</p>
            <div className="modal-buttons">
              <button className="confirm-btn" onClick={handleDelete}>Yes, Delete</button>
              <button className="cancel-btn" onClick={() => setShowDeleteModal(false)}>Cancel</button>
            </div>
          </div>
        </div>
      )}

      {/* Edit Modal */}
      {showEditModal && (
        <div className="modal-overlay">
          <div className="modal">
            <h3>Edit Event</h3>
            <div className="edit-form">
              <input
                type="text"
                placeholder="Title"
                value={editedEvent.title}
                onChange={(e) => setEditedEvent({ ...editedEvent, title: e.target.value })}
              />
              <input
                type="text"
                placeholder="Date"
                value={editedEvent.date}
                onChange={(e) => setEditedEvent({ ...editedEvent, date: e.target.value })}
              />
              <input
                type="text"
                placeholder="Time"
                value={editedEvent.time}
                onChange={(e) => setEditedEvent({ ...editedEvent, time: e.target.value })}
              />
              <input
                type="text"
                placeholder="Venue"
                value={editedEvent.venue}
                onChange={(e) => setEditedEvent({ ...editedEvent, venue: e.target.value })}
              />
              <input
                type="text"
                placeholder="Category"
                value={editedEvent.category}
                onChange={(e) => setEditedEvent({ ...editedEvent, category: e.target.value })}
              />
              <input
                type="number"
                placeholder="Capacity"
                value={editedEvent.capacity}
                onChange={(e) => setEditedEvent({ ...editedEvent, capacity: e.target.value })}
              />
              <textarea
                placeholder="Description"
                value={editedEvent.description}
                onChange={(e) => setEditedEvent({ ...editedEvent, description: e.target.value })}
              />
            </div>

            <div className="modal-buttons">
              <button className="confirm-btn" onClick={handleEditSave}>Save Changes</button>
              <button className="cancel-btn" onClick={() => setShowEditModal(false)}>Cancel</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default EventDetails;