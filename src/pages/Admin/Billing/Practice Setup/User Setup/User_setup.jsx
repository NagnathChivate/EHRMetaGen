import "../../../assets/CSS/User_setup.css";
import AddUser from "./AddUser";
import DocumentRight from "./DocumentRight";
import PasswordRuleSetup from "./PasswordRuleSetup";
import React, { useState } from "react";
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
      <div className="setup-navbar">
        {NAV_PAGES.map((item, idx) => (
          <button
            className={`setup-nav-btn${activeIdx === idx ? ' active' : ''}`}
            onClick={() => setActiveIdx(idx)}
            key={item.label}
          >
            {item.label}
          </button>
        ))}
      </div>
      <div className="setup-content">
        {NAV_PAGES[activeIdx].component}
      </div>
    </div>
  );
}
