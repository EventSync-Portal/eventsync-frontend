import React, { useState } from "react";
import AttendeeNavbar from '../../Components/navbar';
import AttendeeSidebar from '../../Components/sidebar';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import '../../css/attendee_css/attendee_feedback.css'

const questions = [
  "Rate your overall satisfaction with the event",
  "How well was the event organised and planned?",
  "The speakers engaged well with the audience",
  "The venue was comfortable.",
  "The event was well organized."
];

const AttendeeFeedback = () => {

const [responses, setResponses] = useState({});
  const [suggestion, setSuggestion] = useState("");

  const handleChange = (question, value) => {
    setResponses({ ...responses, [question]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Feedback submitted:", responses, suggestion);
    toast.success("Feedback sent!");
  };

  return (
    <>
    
    <div className='attendee-feedback-layout'>
            <AttendeeNavbar/>

            <div className='attendee-feedback-side'>
                <AttendeeSidebar/>

                <div className='attendee-feedback-content'>

                    <div className="a-feedback-form-container">

                        <form className="feedback-form" onSubmit={handleSubmit}>
                            <h2 className="a-feedback-form-heading">Event Feedback</h2>
                            <p className="a-feedback-form-exp">Rate your satisfaction with the event on a scale of 1 to 5 (1 being very dissatisfied and 5 being very satisfied).</p>
                                {questions.map((q, idx) => (
                                        <div className="a-feedback-question" key={idx}>
                                        <p className="a-question-text">{q}</p>
                                        <div className="likert-scale">
                                            {[1, 2, 3, 4, 5].map((num) => (
                                        <label key={num} className="likert-option">
                                            <span>{num}</span>
                                                <input
                                                type="radio"
                                                name={`q${idx}`}
                                                value={num}
                                                onChange={() => handleChange(q, num)}
                                                required
                                        />
                                            </label>
                                    ))}
                                            </div>
                                                </div>
                                                    ))}

                            <div className="suggestion-box">
                            <label className="sugg-label">Suggestions for Improvement</label> <br/>
                                <textarea
                                value={suggestion}
                                onChange={(e) => setSuggestion(e.target.value)}
                                rows={6}
                                className="sugg-inp-area"
                                placeholder="Share your thoughts..."
                            />
                            </div>

                            <button className='a-feedback-btn' type="submit">Submit Feedback</button>
      <ToastContainer />
    </form>
                    </div>

                </div>
            </div>
    </div>
    
    </>
  )
}
export default AttendeeFeedback