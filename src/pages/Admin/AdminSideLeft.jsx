import React, { useState } from "react";
import "bootstrap-icons/font/bootstrap-icons.css";
import "../../assets/CSS/AdminSideLeft.css";

export default function AdminSideLeft({ selectedPage, setSelectedPage }) {
  const [activeTab, setActiveTab] = useState("EHR");
  const [activeSubTab, setActiveSubTab] = useState("");
  const [isSchedulerOpen, setIsSchedulerOpen] = useState(false);

  // Keep Scheduler submenu open if any Scheduler page is selected
  React.useEffect(() => {
    if (["AppointmentType", "Resource", "CancelledReason"].includes(selectedPage)) {
      setActiveSubTab("PracticeSetup");
      setIsSchedulerOpen(true);
    }
  }, [selectedPage]);

  return (
    <div style={{ minWidth: "250px" }}>
      {/* Tabs Header */}
      <ul className="nav nav-tabs mb-3">
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

      {/* Sidebar Content */}
      {activeTab === "EHR" && <div>EHR Active</div>}

      {activeTab === "Billing" && (
        <ul className="nav flex-column ms-1">
          {/* Billing Setup */}
          <li>
            <button
              className={`btn btn-link text-start ${
                activeSubTab === "BillingSetup" ? "fw-bold text-primary" : ""
              }`}
              onClick={() => {
                setActiveSubTab("BillingSetup");
                setSelectedPage("BillingSetup");
              }}
            >
              Billing Setup
            </button>
          </li>

          {/* Practice Setup */}
          <li>
            <button
              className={`btn btn-link text-start ${
                activeSubTab === "PracticeSetup" ? "fw-bold text-primary" : ""
              }`}
              onClick={() => setActiveSubTab("PracticeSetup")}
            >
              Practice Setup
            </button>

            {activeSubTab === "PracticeSetup" && (
              <ul className="nav flex-column ms-3 mt-1">
                <li>
                  <button
                    className={`btn btn-link text-start ${
                      selectedPage === "MasterPhysician"
                        ? "fw-bold text-dark"
                        : "text-secondary"
                    }`}
                    onClick={() => setSelectedPage("MasterPhysician")}
                  >
                    Master Physician
                  </button>
                </li>

                {/* Scheduler */}
                <li>
                  <button
                    className={`btn btn-link text-start ${
                      ["AppointmentType", "Resource", "CancelledReason"].includes(selectedPage)
                        ? "fw-bold text-dark"
                        : "text-secondary"
                    }`}
                    onClick={() => setIsSchedulerOpen(!isSchedulerOpen)}
                  >
                    Scheduler
                  </button>

                  {/* Scheduler Submenu */}
                  {isSchedulerOpen && (
                    <ul className="nav flex-column ms-3 mt-1">
                      <li>
                        <button
                          className={`btn btn-link text-start ${
                            selectedPage === "AppointmentType" ? "fw-bold text-dark" : "text-secondary"
                          }`}
                          onClick={() => setSelectedPage("AppointmentType")}
                        >
                          Appointment Type
                        </button>
                      </li>
                      <li>
                        <button
                          className={`btn btn-link text-start ${
                            selectedPage === "Resource" ? "fw-bold text-dark" : "text-secondary"
                          }`}
                          onClick={() => setSelectedPage("Resource")}
                        >
                          Resource
                        </button>
                      </li>
                      <li>
                        <button
                          className={`btn btn-link text-start ${
                            selectedPage === "CancelledReason" ? "fw-bold text-dark" : "text-secondary"
                          }`}
                          onClick={() => setSelectedPage("CancelledReason")}
                        >
                          Cancelled Reason
                        </button>
                      </li>
                    </ul>
                  )}
                </li>

                <li>
                  <button
                    className={`btn btn-link text-start ${
                      selectedPage === "UserSetup" ? "fw-bold text-dark" : "text-secondary"
                    }`}
                    onClick={() => setSelectedPage("UserSetup")}
                  >
                    User Setup
                  </button>
                </li>
              </ul>
            )}
          </li>
        </ul>
      )}
    </div>
  );
}
