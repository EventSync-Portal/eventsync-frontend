import React, { useState } from "react";
import '../../css/admin_css/calendar.css';

const Schedul = () => {
  const [schedule, setSchedule] = useState([
    {
      building: "Building 18",
      day: "Monday",
      startTime: "08:00",
      endTime: "10:00",
      className: "Math 101",
      room: "Algebra Module",
      professor: "Dr. Smith",
    },
    {
      building: "Building 16G01",
      day: "Monday",
      startTime: "10:00",
      endTime: "12:00",
      className: "Chemistry 101",
      room: "Organic Chem Module",
      professor: "Dr. Johnson",
    },
  ]);

  const buildings = ["Building 18", "Building 16G01", "Building 15G01"];
  const [selectedBuilding, setSelectedBuilding] = useState(buildings[0]);

  const [editingSlot, setEditingSlot] = useState(null);
  const [formData, setFormData] = useState({
    className: "",
    room: "",
    professor: ""
  });

  const timeSlots = [
    "08:00", "09:00", "10:00", "11:00", "12:00",
    "13:00", "14:00", "15:00", "16:00", "17:00", "18:00"
  ];

  const daysOfWeek = [
    "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"
  ];

  const handleBuildingChange = (e) => {
    setSelectedBuilding(e.target.value);
  };

  const getClassForTimeSlot = (day, time) => {
    const classesForBuilding = schedule.filter(
      (c) => c.building === selectedBuilding && c.day === day
    );

    for (const classItem of classesForBuilding) {
      const [startHour, startMin] = classItem.startTime.split(":").map(Number);
      const [endHour, endMin] = classItem.endTime.split(":").map(Number);
      const [slotHour, slotMin] = time.split(":").map(Number);

      const startTime = startHour * 60 + startMin;
      const endTime = endHour * 60 + endMin;
      const slotTime = slotHour * 60 + slotMin;
      const nextSlotTime = slotTime + 60;

      if (
        (slotTime >= startTime && slotTime < endTime) ||
        (nextSlotTime > startTime && slotTime < startTime)
      ) {
        return classItem;
      }
    }

    return null;
  };

  const handleAddClick = (day, time) => {
    setEditingSlot({ day, time });
    setFormData({ className: "", room: "", professor: "" });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    const newClass = {
      building: selectedBuilding,
      day: editingSlot.day,
      startTime: editingSlot.time,
      endTime: getNextTime(editingSlot.time),
      className: formData.className,
      room: formData.room,
      professor: formData.professor,
    };

    setSchedule([...schedule, newClass]);
    setEditingSlot(null);
  };

  const getNextTime = (time) => {
    const index = timeSlots.indexOf(time);
    return timeSlots[index + 1] || "19:00";
  };

  return (
    <div className="schedul-display">
      <div className="building-dropdown">
        <label htmlFor="building-select">Select Building: </label>
        <select id="building-select" value={selectedBuilding} onChange={handleBuildingChange}>
          {buildings.map((building) => (
            <option key={building} value={building}>{building}</option>
          ))}
        </select>
      </div>

      {daysOfWeek.map((day) => (
        <div className="schedul-day" key={day}>
          <h3 className="day-title">{day}</h3>
          <table className="schedul-table">
            <thead>
              <tr>
                <th>Time</th>
                <th>Course</th>
              </tr>
            </thead>
            <tbody>
              {timeSlots.map((time, index) => {
                const nextTime = getNextTime(time);
                const classItem = getClassForTimeSlot(day, time);

                return (
                  <tr key={time} className={classItem ? "has-class" : "free-slot"}>
                    <td>{time} - {nextTime}</td>
                    <td>
                      {classItem ? (
                        <div className="class-card">
                          <strong>Course: {classItem.className}</strong><br />
                          Module: {classItem.room}<br />
                          Prof: {classItem.professor}<br />
                          Time: {classItem.startTime} - {classItem.endTime}
                        </div>
                      ) : editingSlot?.day === day && editingSlot?.time === time ? (
                        <form onSubmit={handleFormSubmit} className="edit-form">
                          <input
                            type="text"
                            placeholder="Course Name"
                            value={formData.className}
                            onChange={(e) => setFormData({ ...formData, className: e.target.value })}
                            required
                          />
                          <input
                            type="text"
                            placeholder="Module Name"
                            value={formData.room}
                            onChange={(e) => setFormData({ ...formData, room: e.target.value })}
                            required
                          />
                          <input
                            type="text"
                            placeholder="Professor"
                            value={formData.professor}
                            onChange={(e) => setFormData({ ...formData, professor: e.target.value })}
                            required
                          />
                          <button type="submit">Save</button>
                        </form>
                      ) : (
                        <span className="free-text" onClick={() => handleAddClick(day, time)}>
                          + Add Class
                        </span>
                      )}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      ))}
    </div>
  );
};

export default Schedul;
