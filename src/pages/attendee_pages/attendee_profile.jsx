import React , { useState } from "react";
import AttendeeNavbar from '../../Components/navbar';
import AttendeeSidebar from '../../Components/sidebar';
import dummyAttendee from "../../dummyAttendee";
import '../../css/attendee_css/attendee_profile.css';

const AttendeeProfile = () => {

    const [user, setUser] = useState(dummyAttendee);
  const [toastVisible, setToastVisible] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser(prev => ({ ...prev, [name]: value }));
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const imageURL = URL.createObjectURL(file);
      setUser(prev => ({ ...prev, profile: imageURL }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setToastVisible(true);
    setTimeout(() => setToastVisible(false), 3000);
  };

  return (
    <>
    
    <div className='attendee-profile-layout'>
            <AttendeeNavbar/>

            <div className='attendee-profile-side'>
                <AttendeeSidebar/>

                <div className='attendee-profile-content'>

                     <div className="profile-page">
                            <h2 className="a-profile-heading">My Profile</h2>
                        <form onSubmit={handleSubmit} className="profile-form">
                            <div className="a-profile-pic-section">
                                <img src={user.profile} alt="Profile" className="profile-pic" /><br/>

                            <label htmlFor="fileUpload" className="custom-upload-btn">
                                Choose Photo
                            </label>
                            <input
                                type="file"
                                id="fileUpload"
                                accept="image/*"
                                onChange={handleImageChange}
                                style={{ display: "none" }} // hide the real file input
                            />
                            </div>

                            <div className="form-group">
                                <label>Name:</label><br/>
                                <input name="name" value={user.name} onChange={handleChange} required />
                            </div>

                            <div className="form-group">
                                <label>Surname:</label><br/>
                                <input name="surname" value={user.surname} onChange={handleChange} required/>
                            </div>

                            <div className="form-group">
                                <label>Student Number:</label><br/>
                                <input name="studentNumber" value={user.studentNumber} onChange={handleChange} required />
                            </div>

                            <div className="form-group">
                                <label>Email:</label><br/>
                                <input name="email" value={user.email} onChange={handleChange} required />
                            </div>

                        <button type="submit" className="a-save-btn" >Save Changes</button>
                    </form>

                    {toastVisible && <div className="toast">Changes saved</div>}
                    </div>

                </div>
            </div>
    </div>

    </>
  )
}
export default AttendeeProfile