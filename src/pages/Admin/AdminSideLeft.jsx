import React, { useState } from "react";

export default function AdminSideLeft() {
  const [activeTab, setActiveTab] = useState("EHR"); // default active tab

  return (
    <div>
      {/* Tabs */}
      <ul className="nav nav-tabs">
        <li className="nav-item">
          <button
            className={`nav-link ${activeTab === "EHR" ? "active" : ""}`}
            onClick={() => setActiveTab("EHR")}
          >
            EHR
          </button>
        </li>
        <li className="nav-item">
          <button
            className={`nav-link ${activeTab === "Billing" ? "active" : ""}`}
            onClick={() => setActiveTab("Billing")}
          >
            Billing
          </button>
        </li>
      </ul>

      {/* Tab Content */}
      <div style={{ padding: "15px", border: "1px solid #dee2e6", borderTop: "none" }}>
        {activeTab === "EHR" && 
        <div>EHR Active</div>
        }
        {activeTab === "Billing" && 
        <div>
          Billing Active
        </div>}
      </div>
    </div>
  );
}
