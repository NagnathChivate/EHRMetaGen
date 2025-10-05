import "../assets/CSS/LeftSidebar.css";
import AdminSideLeft from "./Admin/AdminSideLeft";
import React, { useState } from "react";

export default function Admin() {
  const [isOpen, setIsOpen] = useState(true); // sidebar visible by default

  return (
    <div className="ht_100">
      {/* Left Sidebar */}
      {isOpen && (
        <section className="Leftsidebar">
         <AdminSideLeft/>
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
