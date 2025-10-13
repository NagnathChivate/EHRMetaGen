import "../assets/CSS/LeftSidebar.css";
import React, { useState } from "react";

// Sidebar Component
import AdminSideLeft from "./Admin/AdminSideLeft";

// Sub-pages
import MasterPhysician from "./Admin/sub-pages/master_physician";
import AppointmentType from "./Admin/sub-pages/shedular-sub-pages/appointment_type";
import CancelledReason from "./Admin/sub-pages/shedular-sub-pages/cancelled_reason";
import UserSetup from "./Admin/sub-pages/user_setup";
import Resource from "./Admin/sub-pages/shedular-sub-pages/Resource";

export default function Admin() {
  const [isOpen, SetIsOpen] = useState(true); // sidebar visible
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
        className="Right_container flex-grow-1 p-4"
        style={{ width: isOpen ? "85%" : "100%" }}
      >
        {/* Render Subpages */}
        {selectedPage === "MasterPhysician" && <MasterPhysician />}
        {selectedPage === "AppointmentType" && <AppointmentType />}
        {selectedPage === "Resource" && <Resource />}
        {selectedPage === "CancelledReason" && <CancelledReason />}
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
