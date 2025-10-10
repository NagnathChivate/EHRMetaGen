import React, { useState } from "react";

export default function AppointmentType() {
  const [showPopup, setShowPopup] = useState(false);
  const [appointmentTypes, setAppointmentTypes] = useState([]);
  const [formData, setFormData] = useState({
    type: "",
    duration: "",
    maxPerDay: "",
  });

  // Handle input change
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle form submit
  const handleSubmit = (e) => {
    e.preventDefault();
    const newAppointment = {
      id: Date.now(),
      type: formData.type,
      duration: formData.duration,
      maxPerDay: formData.maxPerDay,
    };
    setAppointmentTypes([...appointmentTypes, newAppointment]);
    setShowPopup(false);
    setFormData({ type: "", duration: "", maxPerDay: "" });
  };

  // Handle Delete
  const handleDelete = (id) => {
    setAppointmentTypes(appointmentTypes.filter((item) => item.id !== id));
  };

  return (
    <div className="p-3 d-inline">
      {/* ✅ Header Section — left-aligned, one line */}
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h5 className="m-0">Appointment Type</h5>
        <button
          className="btn btn-primary"
          onClick={() => setShowPopup(true)}
        >
          <i className="bi bi-plus-lg me-1"></i> Add 
        </button>
      </div>

      {/* ✅ Table Section */}
      {appointmentTypes.length > 0 ? (
        <div className="table-responsive">
          <table className="table table-bordered table-striped align-middle text-center">
            <thead className="table-primary">
              <tr>
                <th>#</th>
                <th>Appointment Type</th>
                <th>Duration (min)</th>
                <th>Max Per Day</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {appointmentTypes.map((item, index) => (
                <tr key={item.id}>
                  <td>{index + 1}</td>
                  <td>{item.type}</td>
                  <td>{item.duration}</td>
                  <td>{item.maxPerDay}</td>
                  <td>
                    <button
                      className="btn btn-sm btn-danger"
                      onClick={() => handleDelete(item.id)}
                    >
                      <i className="bi bi-trash"></i> Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <div className="border p-3 rounded bg-light text-center">
          <p className="m-0 text-secondary">No appointment types added yet.</p>
        </div>
      )}

      {/* ✅ Popup Modal */}
      {showPopup && (
        <div
          className="position-fixed top-0 start-0 w-100 h-100 d-flex justify-content-center align-items-center"
          style={{
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            zIndex: 1050,
          }}
        >
          <div
            className="bg-white p-4 rounded shadow"
            style={{ width: "400px" }}
          >
            <h4 className="mb-3 text-center">Add Appointment Type</h4>

            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label className="form-label">Appointment Type</label>
                <input
                  type="text"
                  name="type"
                  className="form-control"
                  value={formData.type}
                  onChange={handleChange}
                  placeholder="e.g. General Consultation"
                  required
                />
              </div>

              <div className="mb-3">
                <label className="form-label">Duration (minutes)</label>
                <input
                  type="number"
                  name="duration"
                  className="form-control"
                  value={formData.duration}
                  onChange={handleChange}
                  placeholder="e.g. 30"
                  required
                />
              </div>

              <div className="mb-3">
                <label className="form-label">Max Appointments per Day</label>
                <input
                  type="number"
                  name="maxPerDay"
                  className="form-control"
                  value={formData.maxPerDay}
                  onChange={handleChange}
                  placeholder="e.g. 10"
                  required
                />
              </div>

              <div className="d-flex justify-content-end gap-2">
                <button
                  type="button"
                  className="btn btn-secondary"
                  onClick={() => setShowPopup(false)}
                >
                  Cancel
                </button>
                <button type="submit" className="btn btn-primary">
                  Save
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

