import React, { useState } from 'react';
import AttendeeNavbar from '../../Components/navbar';
import AttendeeSidebar from '../../Components/sidebar';
import dummyAttendee from '../../dummyAttendee';
import '../../css/attendee_css/attendee_register.css'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const AttendeeRegistration = () => {

const [formData, setFormData] = useState(dummyAttendee);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
  e.preventDefault();
  toast.success('Registration Submitted!', {
    position: 'top-right',
    autoClose: 3000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
  });
};


  return (
    <>
    <ToastContainer />
        <div className='attendee-register-layout'>
            <AttendeeNavbar/>

            <div className='attendee-register-side'>
                <AttendeeSidebar/>

                <div className='attendee-register-content'>

            <div className="attendee-form-container">
                        <h2 className='a-reg-form-header'>Event Registration Form</h2>
                    <form onSubmit={handleSubmit}>

                        <div className="a-form-group">
                            <label htmlFor="firstName" className='a-reg-label'>First Name: </label>
                            <input
                                type="text"
                                id="firstName"
                                name="firstName"
                                className='a-reg-input'
                                value={formData.firstName}
                                onChange={handleChange}
                                placeholder="Enter your first name"
                                required
                            />
                        </div>

                        <div className="a-form-group">
                            <label htmlFor="lastName" className='a-reg-label'>Last Name: </label>
                            <input
                                type="text"
                                id="lastName"
                                name="lastName"
                                className='a-reg-input'
                                value={formData.lastName}
                                onChange={handleChange}
                                placeholder="Enter your last name"
                                required
                            />
                        </div>

                        <div className="a-form-group">
                            <label htmlFor="studentNumber" className='a-reg-label'>Student Number: </label>
                            <input
                                type="text"
                                id="studentNumber"
                                name="studentNumber"
                                className='a-reg-input'
                                value={formData.studentNumber}
                                onChange={handleChange}
                                placeholder="Enter your student number"
                                required
                            />
                        </div>

                        <div className="a-form-group">
                            <label htmlFor="email" className='a-reg-label'>Student Email: </label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                className='a-reg-input'
                                value={formData.email}
                                onChange={handleChange}
                                placeholder="Enter your student email"
                                required
                            />
                        </div>

                        <div className="a-form-group">
                            <label htmlFor="dietaryNeeds" className='a-reg-label'>Dietary Needs: </label>
                            <select
                                id="dietaryNeeds"
                                name="dietaryNeeds"
                                className='a-reg-input'
                                value={formData.dietaryNeeds}
                                onChange={handleChange}
                                required
                            >
                            <option value="none">None</option>
                            <option value="vegetarian">Vegetarian</option>
                            <option value="vegan">Vegan</option>
                            <option value="gluten-free">Gluten-Free</option>
                            <option value="dairy-free">Dairy-Free</option>
                            <option value="halal">Halal</option>
                            <option value="kosher">Kosher</option>
                            <option value="other">Other</option>
                            </select>
                        </div>

                    <button type="submit" className='a-reg-btn'>Register</button>
                </form>
            </div>

                </div>
            </div>
        </div>
    </>
  )
}
export default AttendeeRegistration