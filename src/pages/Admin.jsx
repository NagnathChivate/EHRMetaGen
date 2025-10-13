// Admin.jsx
import "../assets/CSS/LeftSidebar.css";
import AdminSideLeft from "./Admin/AdminSideLeft";
import MasterPhysician from "./Admin/Billing/Practice Setup/Master Physician/master_physician";
import React, { useState } from "react";
import Scheduler from "./Admin/Billing/Schedular/Schedular";
import UserSetup from "./Admin/Billing/Practice Setup/User Setup/User_setup";

export default function Admin() {
  const [isOpen, setIsOpen] = useState(true); // Sidebar visibility
  const [selectedPage, setSelectedPage] = useState(""); // Active page
  const [headerTitle, setHeaderTitle] = useState("Dashboard"); // Dynamic header

  return (
    <div className="ht_100 d-flex">
      {/* Sidebar */}
      {isOpen && (
        <section className="Leftsidebar">
          <AdminSideLeft
            setSelectedPage={setSelectedPage}
            selectedPage={selectedPage}
          />
        </section>
      )}

      {/* Right Container */}
      <section
        className="Right_container flex-grow-1 position-relative"
        style={{ width: isOpen ? "85%" : "100%" }}
      >
        {/* Sidebar Toggle Button */}
        <div className="menu_container">
          <button
            className="toggle-btn"
            onClick={() => setIsOpen(!isOpen)}
            title={isOpen ? "Hide Sidebar" : "Show Sidebar"}
          >
            <i className={`bi ${isOpen ? "bi-x-lg" : "bi-list"}`}></i>
          </button>
        </div>

        {/* Top Header */}
        <div className="top_container">
          <div className="header_TP mb-1 d-flex align-items-center border rounded-sm">
            <span>{headerTitle}</span>
          </div>

          {/* Dynamic Page Rendering */}
          {selectedPage === "MasterPhysician" && <MasterPhysician />}

          {selectedPage === "UserSetup" && (
            <UserSetup setHeaderTitle={setHeaderTitle} />
          )}
                  {selectedPage === "AppointmentType" && <AppointmentType />}
                   {selectedPage === "Resource" && <Resource />}
                  {selectedPage === "CancelledReason" && <CancelledReason />}

          {/* Default Dashboard */}
          {!selectedPage && (
            <div className="p-4">
              <h2>Admin Dashboard</h2>
              <p>Select a module from the sidebar to begin.</p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
