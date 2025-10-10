// import AddUser from "./AddUser";
// import DocumentRight from "./DocumentRight";
// import PasswordRuleSetup from "./PasswordRuleSetup";
// import React, { useState } from "react";
// import User from "./User";
// import UserGroup from "./UserGroup";

// const NAV_PAGES = [
//   { label: "User", component: <User /> },
//   { label: "User Group", component: <UserGroup /> },
//   { label: "Document Right", component: <DocumentRight /> },
//   { label: "Password Rule", component: <PasswordRuleSetup /> },
//   { label: "Add User", component: <AddUser /> },
// ];

// export default function UserSetup() {
//   const [activeIdx, setActiveIdx] = useState(0);

//   return (
//     <div className="setup-main">
//       {/* Left mini-nav inside User Setup */}
//       <div className="setup-navbar tab_bar">
//         {NAV_PAGES.map((item, idx) => (
//           <button
//             key={item.label}
//             className={`tabbtn setup-nav-btn${activeIdx === idx ? " active" : ""}`}
//             onClick={() => setActiveIdx(idx)}
//           >
//             {item.label}
//           </button>
//         ))}
//       </div>

//       {/* Content area on right */}
//       <div className="setup-content">
//         {NAV_PAGES[activeIdx].component}
//       </div>
//     </div>
//   );
// }



// User_setup.jsx
import React, { useState, useEffect } from "react";
import AddUser from "./AddUser";
import DocumentRight from "./DocumentRight";
import PasswordRuleSetup from "./PasswordRuleSetup";
import UserGroup from "./UserGroup";

// --- Main Navigation Tabs ---
const NAV_PAGES = [
  { label: "User", key: "user" },
  { label: "User Group", key: "userGroup" },
  { label: "Document Right", key: "documentRight" },
  { label: "Password Rule", key: "passwordRule" },
];

export default function User_setup({ setHeaderTitle }) {
  const [activeMainTab, setActiveMainTab] = useState("user");

  // ✅ Update header title dynamically in Admin.jsx when tab changes
  useEffect(() => {
    const currentTab = NAV_PAGES.find((tab) => tab.key === activeMainTab);
    if (currentTab && setHeaderTitle) {
      setHeaderTitle(currentTab.label);
    }
  }, [activeMainTab, setHeaderTitle]);

  return (
    <div className="setup-main">
      {/* --- Main Navbar --- */}
      <div className="setup-navbar tab_bar">
        {NAV_PAGES.map((item) => (
          <button
            key={item.key}
            className={`tabbtn setup-nav-btn${
              activeMainTab === item.key ? " active" : ""
            }`}
            onClick={() => setActiveMainTab(item.key)}
          >
            {item.label}
          </button>
        ))}
      </div>

      {/* --- Main Content --- */}
      <div className="setup-content">
        {activeMainTab === "user" && <AddUser />}
        {activeMainTab === "userGroup" && <UserGroup />}
        {activeMainTab === "documentRight" && <DocumentRight />}
        {activeMainTab === "passwordRule" && <PasswordRuleSetup />}
      </div>
    </div>
  );
}