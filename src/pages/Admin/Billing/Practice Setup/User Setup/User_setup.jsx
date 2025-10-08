import AddUser from "./AddUser";
import DocumentRight from "./DocumentRight";
import PasswordRuleSetup from "./PasswordRuleSetup";
import React, { useState } from "react";
import User from "./User";
import UserGroup from "./UserGroup";

const NAV_PAGES = [
  { label: "User", component: <User /> },
  { label: "User Group", component: <UserGroup /> },
  { label: "Document Right", component: <DocumentRight /> },
  { label: "Password Rule", component: <PasswordRuleSetup /> },
  { label: "Add User", component: <AddUser /> },
];

export default function UserSetup() {
  const [activeIdx, setActiveIdx] = useState(0);

  return (
    <div className="setup-main">
      {/* Left mini-nav inside User Setup */}
      <div className="setup-navbar tab_bar">
        {NAV_PAGES.map((item, idx) => (
          <button
            key={item.label}
            className={`tabbtn setup-nav-btn${activeIdx === idx ? " active" : ""}`}
            onClick={() => setActiveIdx(idx)}
          >
            {item.label}
          </button>
        ))}
      </div>

      {/* Content area on right */}
      <div className="setup-content">
        {NAV_PAGES[activeIdx].component}
      </div>
    </div>
  );
}
