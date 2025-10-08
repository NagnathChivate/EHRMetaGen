import React, { useState } from "react";

export default function AppointmentType() {
  const [showPopup, setShowPopup] = useState(false);
  const [formData, setFormData] = useState({
    type: "",
    duration: "",
    maxPerDay: "",
  });

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Saved Appointment Type:", formData);
    setShowPopup(false);
    setFormData({ type: "", duration: "", maxPerDay: "" });
  };

  return (
    <div>
      <div className="d-flex justify-content-between mb-3">
        <h2>Appointment Type</h2>
        <button className="btn btn-primary" onClick={() => setShowPopup(true)}>
          + Add Appointment Type
        </button>
      </div>

      <div className="border p-3 rounded bg-light">
        <p>No appointment types added yet.</p>
      </div>

      {showPopup && (
        <div
          className="fixed inset-0 d-flex justify-content-center align-items-center"
          style={{ background: "rgba(0,0,0,0.5)" }}
        >
          <div className="bg-white p-4 rounded shadow" style={{ width: "400px" }}>
            <h4 className="mb-3">Add Appointment Type</h4>
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                name="type"
                placeholder="Appointment Type"
                className="form-control mb-2"
                value={formData.type}
                onChange={handleChange}
                required
              />
              <input
                type="number"
                name="duration"
                placeholder="Duration (minutes)"
                className="form-control mb-2"
                value={formData.duration}
                onChange={handleChange}
                required
              />
              <input
                type="number"
                name="maxPerDay"
                placeholder="Max Allowed per Day"
                className="form-control mb-3"
                value={formData.maxPerDay}
                onChange={handleChange}
                required
              />
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
