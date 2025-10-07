import React, { useState } from 'react';
// Adjust the path if your User_setup.css is elsewhere
import '../../../assets/CSS/User_setup.css';

// Import sub-page components
import User from './user-setup-sub-pages/User';
import UserGroup from './user-setup-sub-pages/UserGroup';
import DocumentRight from './user-setup-sub-pages/DocumentRight';
import PasswordRuleSetup from './user-setup-sub-pages/PasswordRuleSetup';
import AddUser from './user-setup-sub-pages/AddUser';

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
