import "../assets/CSS/LeftSidebar.css";
import AdminSideLeft from "./Admin/AdminSideLeft";
import React, { useState } from "react";

export default function Admin() {
  const [isOpen, setIsOpen] = useState(true); // sidebar visible by default
  const [selectedPage, setSelectedPage] = useState(""); // which sub-page is open

  return (
    <div className="ht_100 d-flex">
      {/* Left Sidebar */}
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
        className="Right_container flex-grow-1"
        style={{ width: isOpen ? "85%" : "100%" }}
      >
        {/* Toggle Sidebar Button (optional, uncomment if needed) */}
        {/* 
        <button className="toggle-btn" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? (
            <i className="bi bi-x-lg"></i>
          ) : (
            <i className="bi bi-list"></i>
          )}
        </button>
        */}

        {/* Conditional Rendering of Subpages */}
        {selectedPage === "MasterPhysician" && <MasterPhysician />}
        {selectedPage === "Scheduler" && <Scheduler />}
        {selectedPage === "UserSetup" && <UserSetup />}

        {/* Default Dashboard */}
        {!selectedPage && (
          <>
            <h2>Dashboard Content</h2>
            <p>This is your main area where content will appear.</p>
          </>
        )}
      </section>
    </div>
  );
}
