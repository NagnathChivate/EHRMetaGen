import "../assets/CSS/LeftSidebar.css";
import AdminSideLeft from "./Admin/AdminSideLeft";
import MasterPhysician from "./Admin/sub-pages/master_physician";
import Scheduler from "./Admin/sub-pages/schedular";
import UserSetup from "./Admin/sub-pages/user_setup";
import React, { useState } from "react";

export default function Admin() {
  const [isOpen, setIsOpen] = useState(true); // sidebar visible by default
  const [selectedPage, setSelectedPage] = useState(""); // which sub-page is open

  return (
    <div className="ht_100 d-flex">
      {/* Left Sidebar */}
      {isOpen && (
        <section className="Leftsidebar">
          <AdminSideLeft setSelectedPage={setSelectedPage} selectedPage={selectedPage} />
        </section>
      )}

      {/* Right Container */}
      <section className="Right_container flex-grow-1" style={{ width: isOpen ? "85%" : "100%" }}>
        <button className="toggle-btn" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? (<><i className="bi bi-x-lg"></i></>) : (<><i className="bi bi-list"></i></>)}
        </button>
        
        {selectedPage === "MasterPhysician" && <MasterPhysician />}
        {selectedPage === "Scheduler" && <Scheduler />}
        {selectedPage === "UserSetup" && <UserSetup />}
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
