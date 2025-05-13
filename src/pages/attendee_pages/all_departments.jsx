import React, { useState }from "react";
import AttendeeNavbar from '../../Components/navbar';
import AttendeeSidebar from '../../Components/sidebar';
import dummyDepartments from "../../dummyDepartments";
import '../../css/attendee_css/all_departments.css';

const AllDepartments = () => {

const [search, setSearch] = useState('');

  const filtered = dummyDepartments.filter((d) =>
    d.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <>
        <div className='attendee-departments-layout'>
            <AttendeeNavbar/>

            <div className='attendee-departments-side'>
                <AttendeeSidebar/>

                <div className='attendee-departments-content'>
                        <h1 className="a-departments-header">All Departments</h1>
                        <div className="department-grid-container">
                            <input
                                type="text"
                                placeholder="Search departments..."
                                value={search}
                                onChange={(e) => setSearch(e.target.value)}
                                className="search-input"
                            />

                        <div className="department-grid">
                            {filtered.map((dept) => (
                                <button key={dept.id} className="department-card">
                                    <img src={dept.profile} alt={`${dept.name} profile`} className="profile-pic" />
                                    <p className="dept-name">{dept.name}</p>
                                </button>
                            ))}
                            </div>
                        </div>

                </div>
            </div>
        </div>
    </>
  )
}
export default AllDepartments