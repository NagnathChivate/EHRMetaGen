import React, { useState, useEffect } from "react";
import "bootstrap-icons/font/bootstrap-icons.css";
import "../../assets/CSS/AdminSideLeft.css";

export default function AdminSideLeft({ setSelectedPage, selectedPage }) {
  const [activeTab, setActiveTab] = useState("EHR");
  const [activeSubTab, setActiveSubTab] = useState("");
  const [isSchedulerOpen, setIsSchedulerOpen] = useState(false);
  const [isOpen, setIsOpen] = useState(true);

  // ✅ Keep Scheduler submenu open if any scheduler page is active
  useEffect(() => {
    if (["AppointmentType", "Resource", "CancelledReason"].includes(selectedPage)) {
      setActiveSubTab("PracticeSetup");
      setIsSchedulerOpen(true);
    }
  }, [selectedPage]);

  return (
    <div className="w100">
      {/* Tabs Header */}
      <div className="w100">
        <ul className="nav nav-tabs maintab Ullink">
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
      </div>

      {/* Sidebar Section */}
      {isOpen && (
        <div className="sidebar-content mt-2">
          {activeTab === "EHR" && <div className="p-2">EHR Active</div>}

          {activeTab === "Billing" && (
            <div>
              <ul className="nav flex-column nav-menu">
                {/* Billing Setup */}
                <li className="nav-item">
                  <a
                    href="#"
                    className={`text-decoration-none ${activeSubTab === "BillingSetup" ? "fw-bold text-primary" : ""
                      }`}
                    onClick={() => {
                      setActiveSubTab("BillingSetup");
                      setSelectedPage("");
                    }}
                  >
                    Billing Setup
                  </a>
                </li>

                {/* Practice Setup */}
                <li className="nav-item">
                  <a
                    href="#"
                    className={`text-decoration-none ${activeSubTab === "PracticeSetup" ? "fw-bold text-primary" : ""
                      }`}
                    onClick={() => {
                      setActiveSubTab("PracticeSetup");
                      setSelectedPage("");
                    }}
                  >
                    Practice Setup
                  </a>

                  {/* Sub-pages under Practice Setup */}
                  {activeSubTab === "PracticeSetup" && (
                    <ul className="nav flex-column sub-menu-ul ms-3 mt-1">
                      <li>
                        <a
                          href="#"
                          className={`text-decoration-none ${selectedPage === "MasterPhysician"
                              ? "text-dark fw-semibold"
                              : "text-secondary"
                            }`}
                          onClick={() => setSelectedPage("MasterPhysician")}
                        >
                          Master Physician
                        </a>
                      </li>

                      {/* ✅ Scheduler Section with Toggle */}
                      <li>
                        <button
                          className={ `sidebar-content btn text-decoration-none ${["AppointmentType", "Resource", "CancelledReason"].includes(selectedPage)
                              ? "fw-bold text-dark"
                              : "text-secondary"
                            }`}
                          onClick={() => setIsSchedulerOpen(!isSchedulerOpen)}
                        >
                          Scheduler
                          <i
                            className={`bi ms-2 ${isSchedulerOpen ?"text-dark fw-semibold"  : "bi-chevron-right"
                              }`}
                          ></i>
                        </button>

                        {/* ✅ Scheduler Submenu */}
                        {isSchedulerOpen && (
                          <ul className="nav flex-column ms-3 mt-1">
                            <li>
                              <button
                                className={`btn text-decoration-none ${selectedPage === "AppointmentType"
                                    ? "text-dark fw-semibold"
                                    : "text-secondary"
                                   
                                  }`}
                                onClick={() => setSelectedPage("AppointmentType")}
                              >
                                Appointment Type
                              </button>
                            </li>
                            <li>
                              <button
                                className={`btn text-decoration-none ${selectedPage === "Resource"
                                    ? "fw-bold text-dark"
                                    : "text-secondary"
                                  }`}
                                onClick={() => setSelectedPage("Resource")}
                              >
                                Resource
                              </button>
                            </li>
                            <li>
                              <button
                                className={`btn text-decoration-none ${selectedPage === "CancelledReason"
                                    ? "fw-bold text-dark"
                                    : "text-secondary"
                                  }`}
                                onClick={() => setSelectedPage("CancelledReason")}
                              >
                                Cancelled Reason
                              </button>
                            </li>
                          </ul>
                        )}
                      </li>

                      {/* User Setup (Main Level) */}
                      <li className="nav-item mt-2">
                        <button
                          className={`btn text-decoration-none ${selectedPage === "UserSetup"
                              ? "fw-bold text-dark"
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
            </div>
          )}
        </div>
      )}
    </div>
  );
}
