import "bootstrap-icons/font/bootstrap-icons.css";
import "../../assets/CSS/AdminSideLeft.css";
import { useState } from "react";

export default function AdminSideLeft({ setSelectedPage, selectedPage }) {
  const [activeTab, setActiveTab] = useState("EHR");
  const [activeSubTab, setActiveSubTab] = useState("");
  const [isOpen, setIsOpen] = useState(true); // ✅ added toggle state

  return (
    <div className="w100">
      {/* Tabs Header with Toggle */}
      <div className="w100">
        <ul className="nav nav-tabs maintab Ullink">
          <li className="nav-item">
            <button
              className={`nav-link ${activeTab === "EHR" ? "active" : ""}`}
              onClick={() => {
                setActiveTab("EHR");
                setActiveSubTab("");
                setSelectedPage("");
              }}
            >
              EHR
            </button>
          </li>
          <li className="nav-item">
            <button
              className={`nav-link ${activeTab === "Billing" ? "active" : ""}`}
              onClick={() => {
                setActiveTab("Billing");
                setActiveSubTab("");
                setSelectedPage("");
              }}
            >
              Billing
            </button>
          </li>
        </ul>        
      </div>

      {/* Conditional Sidebar Section */}
      {isOpen && (
        <div>
          {activeTab === "EHR" && 
              <div>EHR Active</div>
          }

          {activeTab === "Billing" && (
            <div>
              <ul className="nav flex-column nav-menu">
                {/* Billing Setup */}
                <li className="nav-item">
                  <a href="#"   className={`text-decoration-none ${ activeSubTab === "BillingSetup" ? "fw-bold text-primary"  : "" }`}  onClick={() => {
                      setActiveSubTab("BillingSetup"); setSelectedPage("");
                    }}>
                    Billing Setup
                  </a>
                </li>

                {/* Practice Setup */}
                <li className="nav-item">
                  <a href="#" className={`text-decoration-none ${activeSubTab === "PracticeSetup"? "fw-bold text-primary" : "" }`}
                    onClick={() => {
                      setActiveSubTab("PracticeSetup");
                      setSelectedPage("");
                    }}>
                    Practice Setup
                  </a>

                  {/* Sub-pages under Practice Setup */}
                  {activeSubTab === "PracticeSetup" && (
                    <ul className="nav flex-column sub-menu-ul">
                      <li>
                        <a
                          className={`text-decoration-none ${
                            selectedPage === "MasterPhysician"
                              ? "text-dark fw-semibold"
                              : "text-secondary"
                          }`}
                          onClick={() => setSelectedPage("MasterPhysician")}
                        >
                          Master Physician
                        </a>
                      </li>
                      <li>
                        <a
                          className={`text-decoration-none ${
                            selectedPage === "Scheduler"
                              ? "text-dark fw-semibold"
                              : "text-secondary"
                          }`}
                          onClick={() => setSelectedPage("Scheduler")}
                        >
                          Scheduler
                        </a>
                      </li>
                      <li>
                        <a
                          className={`text-decoration-none ${
                            selectedPage === "UserSetup"
                              ? "text-dark fw-semibold"
                              : "text-secondary"
                          }`}
                          onClick={() => setSelectedPage("UserSetup")}
                        >
                          User Setup
                        </a>
                      </li>
                    </ul>
                  )}
                </li>
              </ul>
              
            </div>
          )}
        </div>
      )}
    </div>
  );
}
