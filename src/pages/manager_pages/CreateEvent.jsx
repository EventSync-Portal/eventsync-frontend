import React, { useState } from 'react';
import axios from 'axios';
import { ArrowLeft, ChevronDown } from 'lucide-react';
import '../../css/manager_css/createvent.css';

function CreateEvent() {
  const [showPopup, setShowPopup] = useState(false);
  const [formData, setFormData] = useState({
    category: '',
    title: '',
    date: '',
    time: '',
    location: '',
    capacity: '',
    description: '',
  });

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async () => {
    // Validate that all fields are filled
    const allFieldsFilled = Object.values(formData).every(value => value.trim() !== '');
    if (!allFieldsFilled) {
      alert('Please fill in all fields before submitting.');
      return;
    }

    try {
      const response = await axios.post('/api/events', formData); // Replace with your backend URL
      console.log('Event created:', response.data);

      setShowPopup(true);
      setTimeout(() => {
        setShowPopup(false);
      }, 5000);
    } catch (error) {
      console.error('Error creating event:', error);
      alert('Failed to create event. Please try again.');
    }
  };

  return (
    <div className="create-event-container">
      <div className="create-event-header">
        <button className="back-button">
          <ArrowLeft size={20} />
        </button>
        <h2 className="create-event-title">CREATE EVENT</h2>
      </div>

      <div className="create-event-form">
        <div className="form-left">
          <label className="form-label">Event Category:</label>
          <div className="select-wrapper">
            <select
              className="form-input"
              name="category"
              value={formData.category}
              onChange={handleChange}
            >
              <option value="">Select an event type</option>
              <option>Sports</option>
              <option>Entertainment</option>
              <option>Workshop</option>
              <option>Graduation</option>
            </select>
            <ChevronDown className="select-icon" size={20} />
          </div>

          <label className="form-label">Title:</label>
          <input
            type="text"
            className="form-input"
            name="title"
            placeholder="Type title here..."
            value={formData.title}
            onChange={handleChange}
            required
          />

          <label className="form-label">Date:</label>
          <input
            type="date"
            className="form-input"
            name="date"
            value={formData.date}
            onChange={handleChange}
          />

          <label className="form-label">Time:</label>
          <input
            type="time"
            className="form-input"
            name="time"
            value={formData.time}
            onChange={handleChange}
          />

          <label className="form-label">Location:</label>
          <input
            type="text"
            className="form-input"
            name="location"
            placeholder="Type location here..."
            value={formData.location}
            onChange={handleChange}
          />
        </div>

        <div className="form-right">
          <label className="form-label">Capacity:</label>
          <input
            type="number"
            className="form-input"
            name="capacity"
            placeholder="Type capacity here..."
            value={formData.capacity}
            onChange={handleChange}
          />

          <label className="form-label">Description:</label>
          <textarea
            className="form-textarea"
            name="description"
            placeholder="Type description here..."
            value={formData.description}
            onChange={handleChange}
          ></textarea>

          <button className="submit-button" onClick={handleSubmit}>
            Submit
          </button>
        </div>
      </div>

      {/* Success Popup */}
      {showPopup && (
        <div className="popup-message">
          <div className="popup-content">
            <h3>🎉 Event Created Successfully!</h3>
            <p><strong>Category:</strong> {formData.category}</p>
            <p><strong>Title:</strong> {formData.title}</p>
            <p><strong>Date:</strong> {formData.date}</p>
            <p><strong>Time:</strong> {formData.time}</p>
            <p><strong>Location:</strong> {formData.location}</p>
            <p><strong>Capacity:</strong> {formData.capacity}</p>
            <p><strong>Description:</strong> {formData.description}</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default CreateEvent;
