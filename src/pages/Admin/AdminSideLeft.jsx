import "bootstrap-icons/font/bootstrap-icons.css";
import "../../assets/CSS/AdminSideLeft.css";
import React, { useState } from "react";

export default function AdminSideLeft({ setSelectedPage, selectedPage }) {
  const [activeTab, setActiveTab] = useState("EHR");
  const [activeSubTab, setActiveSubTab] = useState("");
  const [isOpen, setIsOpen] = useState(true); // ✅ added toggle state

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

      {/* Conditional Sidebar Section */}
      {isOpen && (
        <div>
          {activeTab === "EHR" && 
              <div>EHR Active</div>
          }

          {activeTab === "Billing" && (
            <div>
              <ul className="nav flex-column ms-3">
                {/* Billing Setup */}
                <li className="nav-item">
                  <button
                    className={`btn btn-link text-start text-decoration-none ${
                      activeSubTab === "BillingSetup"
                        ? "fw-bold text-primary"
                        : ""
                    }`}
                    onClick={() => {
                      setActiveSubTab("BillingSetup");
                      setSelectedPage("");
                    }}
                  >
                    Billing Setup
                  </button>
                </li>

                {/* Practice Setup */}
                <li className="nav-item">
                  <button
                    className={`btn btn-link text-start text-decoration-none ${
                      activeSubTab === "PracticeSetup"
                        ? "fw-bold text-primary"
                        : ""
                    }`}
                    onClick={() => {
                      setActiveSubTab("PracticeSetup");
                      setSelectedPage("");
                    }}
                  >
                    Practice Setup
                  </button>

                  {/* Sub-pages under Practice Setup */}
                  {activeSubTab === "PracticeSetup" && (
                    <ul className="nav flex-column ms-4 mt-1">
                      <li>
                        <button
                          className={`btn btn-link text-start w-100 py-1 px-0 text-decoration-none ${
                            selectedPage === "MasterPhysician"
                              ? "text-dark fw-semibold"
                              : "text-secondary"
                          }`}
                          onClick={() => setSelectedPage("MasterPhysician")}
                        >
                          Master Physician
                        </button>
                      </li>
                      <li>
                        <button
                          className={`btn btn-link text-start w-100 py-1 px-0 text-decoration-none ${
                            selectedPage === "Scheduler"
                              ? "text-dark fw-semibold"
                              : "text-secondary"
                          }`}
                          onClick={() => setSelectedPage("Scheduler")}
                        >
                          Scheduler
                        </button>
                      </li>
                      <li>
                        <button
                          className={`btn btn-link text-start w-100 py-1 px-0 text-decoration-none ${
                            selectedPage === "UserSetup"
                              ? "text-dark fw-semibold"
                              : "text-secondary"
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

              {/* {activeSubTab === "BillingSetup" && (
                <div className="mt-3">Billing Setup Content</div>
              )} */}
            </div>
          )}
        </div>
      )}
    </div>
  );
}
