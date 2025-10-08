import React, { useState } from "react";

export default function BillingSection({ setActivePage }) {
  const [showSchedulerMenu, setShowSchedulerMenu] = useState(false);

  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">Billing Section</h2>

      {/* Scheduler Dropdown */}
      <div className="relative inline-block w-64">
        <button
          onClick={() => setShowSchedulerMenu(!showSchedulerMenu)}
          className="w-full bg-blue-600 px-4 py-2 rounded-lg flex justify-between items-center hover:bg-blue-700"
        >
          Scheduler
          <span>{showSchedulerMenu ? "▲" : "▼"}</span>
        </button>

        {showSchedulerMenu && (
          <div className="absolute left-0 mt-2 w-full bg-white border rounded-lg shadow-lg z-10">
            <button
              onClick={() => setActivePage("appointment")}
              className="block w-full text-left px-4 py-2 hover:bg-blue-50"
            >
              Appointment Type
            </button>
            <button
              onClick={() => setActivePage("resource")}
              className="block w-full text-left px-4 py-2 hover:bg-blue-50"
            >
              Resource
            </button>
            <button
              onClick={() => setActivePage("cancelled")}
              className="block w-full text-left px-4 py-2 hover:bg-blue-50"
            >
              Cancelled Reason
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
