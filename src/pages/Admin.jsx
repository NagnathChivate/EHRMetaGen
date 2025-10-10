// Admin.jsx
import "../assets/CSS/LeftSidebar.css";
import AdminSideLeft from "./Admin/AdminSideLeft";
import MasterPhysician from "./Admin/Billing/Practice Setup/Master Physician/master_physician";
import React, { useState } from "react";
import Scheduler from "./Admin/Billing/Schedular/Schedular";
import UserSetup from "./Admin/Billing/Practice Setup/User Setup/User_setup";

export default function Admin() {
  const [isOpen, setIsOpen] = useState(true); // sidebar visible by default

  return (
    <div className="ht_100">
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
      <section className="Right_container"  style={{ width: isOpen ? "85%" : "100%" }}>
       <button  className="toggle-btn"   onClick={() => setIsOpen(!isOpen)}>
                    {isOpen ? (<><i className="bi bi-x-lg"></i></>) : ( <><i className="bi bi-list"></i> </> )}
            </button>
        <h2>Dashboard Content</h2>
        <p>This is your main area where content will appear.</p>


      </section>
    </div>
  );
}
