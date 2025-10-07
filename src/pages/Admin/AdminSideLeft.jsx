import React, { useState } from "react";

export default function AdminSideLeft({ setSelectedPage, selectedPage }) {
  const [activeTab, setActiveTab] = useState("EHR");
  const [activeSubTab, setActiveSubTab] = useState("");

  return (
    <div style={{ minWidth: "250px" }}>
      <ul className="nav nav-tabs">
        <li className="nav-item">
          <button
            className={`nav-link ${activeTab === "EHR" ? "active" : ""}`}
            onClick={() => {
              setActiveTab("EHR");
              setActiveSubTab("");
              setSelectedPage("");
            }}
          >
            EHR
          </button>
        </li>
        <li className="nav-item">
          <button
            className={`nav-link ${activeTab === "Billing" ? "active" : ""}`}
            onClick={() => {
              setActiveTab("Billing");
              setActiveSubTab("");
              setSelectedPage("");
            }}
          >
            Billing
          </button>
        </li>
      </ul>
      <div style={{ padding: "15px", border: "1px solid #dee2e6", borderTop: "none" }}>
        {activeTab === "EHR" && <div>EHR Active</div>}
        {activeTab === "Billing" && (
          <div>
            <ul className="nav flex-column ms-3">
              <li className="nav-item">
                <button
                  className={`btn btn-link text-start text-decoration-none ${activeSubTab === "BillingSetup" ? "fw-bold text-primary" : ""}`}
                  onClick={() => {
                    setActiveSubTab("BillingSetup");
                    setSelectedPage(""); // Don't show special page
                  }}
                >
                  Billing Setup
                </button>
              </li>
              <li className="nav-item">
                <button
                  className={`btn btn-link text-start text-decoration-none ${activeSubTab === "PracticeSetup" ? "fw-bold text-primary" : ""}`}
                  onClick={() => {
                    setActiveSubTab("PracticeSetup");
                    setSelectedPage("");
                  }}
                >
                  Practice Setup
                </button>
                {/* Show Practice Setup sub-pages */}
                {activeSubTab === "PracticeSetup" && (
                  <ul className="nav flex-column ms-4 mt-1">
                    <li>
                      <button
                        className={`btn btn-link text-start w-100 py-1 px-0 text-decoration-none text-primary${selectedPage === "MasterPhysician" ? " text-dark" : "text-secondary"}`}
                        onClick={() => setSelectedPage("MasterPhysician")}
                      >
                        Master Physician
                      </button>
                    </li>
                    <li>
                      <button
                        className={`btn btn-link text-start w-100 py-1 text-decoration-none text-primary px-0 ${selectedPage === "Scheduler" ? " text-dark" : "text-secondary"}`}
                        onClick={() => setSelectedPage("Scheduler")}
                      >
                        Scheduler
                      </button>
                    </li>
                     <li>
                      <button
                        className={`btn btn-link text-start w-100 py-1 text-decoration-none text-primary px-0 ${selectedPage === "UserSetup" ? " text-dark" : "text-secondary"}`}
                        onClick={() => setSelectedPage("UserSetup")}
                      >
                        User Setup
                      </button>
                    </li>
                  </ul>
                )}
              </li>
              {/* User Setup as its own option */}
              {/* <li className="nav-item mt-3">
                <button
                  className={`btn btn-link text-start w-100 ${selectedPage === "UserSetup" ? "fw-bold text-dark" : ""}`}
                  onClick={() => { setSelectedPage("UserSetup"); setActiveSubTab(""); }}
                >
                  User Setup
                </button>
              </li> */}
            </ul>
            {activeSubTab === "BillingSetup" && (
              <div className="mt-3">Billing Setup Content</div>
            )}
            {/* No content for special sub-pages */}
          </div>
        )}
      </div>
    </div>
  );
}
