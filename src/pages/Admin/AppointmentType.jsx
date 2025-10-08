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
    console.log("Appointment Data Saved:", formData);
    setShowPopup(false);
  };

  return (
    <div>
      {/* Header */}
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold">Appointment Type</h1>
        <button
          onClick={() => setShowPopup(true)}
          className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
        >
          + Add Appointment Type
        </button>
      </div>

      {/* Placeholder list */}
      <div className="border rounded-lg p-4 bg-gray-50">
        <p>No appointment types added yet.</p>
      </div>

      {/* Popup */}
      {showPopup && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-40 z-50">
          <div className="bg-white rounded-lg shadow-lg w-96 p-6">
            <h3 className="text-lg font-semibold mb-4">
              Add Appointment Type
            </h3>

            <form onSubmit={handleSubmit} className="space-y-3">
              <div>
                <label className="block text-sm font-medium mb-1">
                  Appointment Type
                </label>
                <input
                  type="text"
                  name="type"
                  value={formData.type}
                  onChange={handleChange}
                  className="w-full border rounded-lg px-3 py-2"
                  placeholder="e.g., Consultation"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-1">
                  Duration (minutes)
                </label>
                <input
                  type="number"
                  name="duration"
                  value={formData.duration}
                  onChange={handleChange}
                  className="w-full border rounded-lg px-3 py-2"
                  placeholder="30"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-1">
                  Max Allowed per Day
                </label>
                <input
                  type="number"
                  name="maxPerDay"
                  value={formData.maxPerDay}
                  onChange={handleChange}
                  className="w-full border rounded-lg px-3 py-2"
                  placeholder="10"
                />
              </div>

              <div className="flex justify-end gap-3 mt-4">
                <button
                  type="button"
                  onClick={() => setShowPopup(false)}
                  className="px-4 py-2 bg-gray-200 rounded-lg hover:bg-gray-300"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
                >
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
