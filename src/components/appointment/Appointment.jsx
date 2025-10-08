import React, { useState } from "react";
import { FaChevronUp, FaChevronDown } from "react-icons/fa";
import './Appointment.css';

const Appointment = () => {
  const [collapsed, setCollapsed] = useState(false);
  const [highlighted, setHighlighted] = useState(null);

  
  const appointments = [
    { id: 1, name: "Test Self Rs", type: "20 min Tes", status: "Confirmed", time: "08:00 AM", room: "101" },
    { id: 2, name: "PDF, EDIT1", type: "30 Mins", status: "Pending", time: "09:00 AM", room: "102" }];

  return (
    <div className="appointments-container my-4">
      <div className="appointments-header d-flex align-items-center justify-content-between px-3 py-2">
        <h6 className="mb-0 text-white">Appointments</h6>

        <div className="d-flex align-items-center gap-3">
          <div className="form-check m-0">
            <input className="form-check-input" type="checkbox" id="allLocations" />
            <label className="form-check-label text-white" htmlFor="allLocations"> All Locations</label>
          </div>
          <button
            className="btn btn-sm btn-light rounded-circle toggle-btn"
            onClick={() => setCollapsed(!collapsed)}>
          
            {collapsed ? <FaChevronDown /> : <FaChevronUp />}
          </button>
        </div>
      </div>

      {!collapsed && (
        <div className="table-responsive appointments-table">
          <table className="table table-bordered align-middle mb-0">
            <thead>
              <tr>
                <th>Name</th>
                <th>Type</th>
                <th>Status</th>
                <th>Time</th>
                <th>Rm#</th>
              </tr>
            </thead>
            <tbody>
              {appointments.map((a) => (
                <tr
                  key={a.id}
                  className={`appointments-row ${highlighted === a.id ? "highlighted" : ""}`}
                  onClick={() => setHighlighted(a.id)}
                >
                  <td>{a.name}</td>
                  <td>{a.type}</td>
                  <td>
                    <span
                      className={`badge ${
                        a.status === "Confirmed"
                          ? "bg-success"
                          : a.status === "Pending"
                          ? "bg-warning text-dark"
                          : "bg-secondary" }`}>
                      {a.status}
                    </span>
                  </td>
                  <td>{a.time}</td>
                  <td>{a.room}</td>
                </tr>
              ))}
              {appointments.length === 0 && (
                <tr>
                  <td colSpan="5" className="text-center text-muted"> No appointments found </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      )
      }
    </div>
  );
};

export default Appointment;
