










// UserSetup.jsx
import React from "react";
import AddUser from "./AddUser";

export default function User() {
  return (
    <div className="setup-main">
      {/* --- Single Navbar Tab --- */}
      <div className="setup-navbar tab_bar">
        <button className="tabbtn setup-nav-btn active">Add User</button>
      </div>

      {/* --- Content --- */}
      <div className="setup-content">
        <AddUser />
      </div>
    </div>
  );
}
