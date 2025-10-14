import "./Dashboard.css";
import React, { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

const Dashboard = () => {
  const patients = [
    { account: "22718", name: "Test 1, Reconcile Tea", address: "SCHENFCTADY, NY M4S 1C8" },
    { account: "23163", name: "Test 29556, TS1 NAJ HAUJ", address: "SCHENECTADY, NY 12345-5555" },
    { account: "223804", name: "Test Ap1, Patient1 Great Neck1", address: "New York, NY 10101" },
    { account: "23572", name: "Test Calim, Test Pat", address: "Boston, MA 02118" },
  ];

  const [searchBy, setSearchBy] = useState("");
  const [query, setQuery] = useState("");
  const [highlighted, setHighlighted] = useState(null);
  const [collapsed, setCollapsed] = useState(false);

  // Filter logic
  const filtered = patients.filter((p) => {
    if (!query) return true;
    if (searchBy === "account") return p.account.includes(query);
    if (searchBy === "name") return p.name.toLowerCase().includes(query.toLowerCase());
    return true;
  });

  const appointments = [
    { id: 1, name: "Test Self Rs", type: "20 min Tes", status: "Confirmed", time: "08:00 AM", room: "101" },
    { id: 2, name: "PDF, EDIT1", type: "30 Mins", status: "Pending", time: "09:00 AM", room: "102" },
  ];

  const messages = [
    { name: "PDF, EDIT1", subject: "Bad Phone Number", from: "Portal", date: "09/30/2025" },
    { name: "Duderino,", subject: "Patient Does Not Want texts", from: "Portal", date: "09/29/2025" },
    { name: "Header 1,", subject: "Bad Phone Number", from: "Portal", date: "09/29/2025" },
    { name: "PDF, EDIT1", subject: "Bad Phone Number", from: "Portal", date: "09/29/2025" },
    { name: "Duderino,", subject: "Patient Does Not Want texts", from: "Portal", date: "09/28/2025" },
  ];

  const visits = [
    { name: "Pink3, 15v612", diagnosis: "-----", apptType: "-----", date: "09/30/2025 03:29 PM" },
    { name: "Emma, Watson T", diagnosis: "-----", apptType: "-----", date: "09/30/2025 02:47 PM" },
    { name: "Madhumala, ECRfile2", diagnosis: "10 previous pregnanci", apptType: "-----", date: "09/30/2025 02:17 PM" },
    { name: "Header 1, Footer 1", diagnosis: "-----", apptType: "10mins Both", date: "09/29/2025 08:11 AM" },
    { name: "Husband, John", diagnosis: "-----", apptType: "-----", date: "09/29/2025 07:39 AM" },
  ];

  const documentData = [
    { name: "Emma, Watson T", docType: "Questionnaire Result", queue: "Doctorslump", date: "09/29/2025" },
    { name: "Emma, Watson T", docType: "Patient Sign Header", queue: "Doctorslump", date: "09/29/2025" },
    { name: "Emma, Watson T", docType: "U1 with sign", queue: "Doctorslump", date: "09/29/2025" },
    { name: "Emma, Watson T", docType: "U2", queue: "Doctorslump", date: "09/29/2025" },
    { name: "Duderino, E", docType: "MM11", queue: "Doctorslump", date: "09/29/2025" },
  ];

  return (
    <div className="ht_100">

      {/* Patient Search */}
      <div className="table-section">
        <div className="main-heading">Patient Search</div>

        <div className="row g-2 my-3 px-3">
          <div className="col-md-4">
            <select className="form-select" value={searchBy} onChange={(e) => setSearchBy(e.target.value)}>
              <option value="">-- Select Search Criteria --</option>
              <option value="name">Name</option>
              <option value="account">Account</option>
            </select>
          </div>
          <div className="col-md-5">
            <input
              type="text"
              className="form-control"
              placeholder={searchBy ? `Search by ${searchBy}` : "Search For"}
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
          </div>
          <div className="col-md-2">
            <button className="btn btn-primary w-100">Search</button>
          </div>
        </div>

        <div className="table-responsive">
          <table className="table table-bordered align-middle">
            <thead className="table-subheading">
              <tr>
                <th>Account #</th>
                <th>Name</th>
                <th>Address</th>
              </tr>
            </thead>
            <tbody>
              {filtered.map((p) => (
                <tr
                  key={p.account}
                  className={highlighted === p.account ? "highlighted" : ""}
                  onClick={() => setHighlighted(p.account)}
                >
                  <td>{p.account}</td>
                  <td>{p.name}</td>
                  <td>{p.address}</td>
                </tr>
              ))}
              {filtered.length === 0 && (
                <tr>
                  <td colSpan="3" className="text-center text-muted">
                    No records found
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* Appointments */}
      <div className="table-section">
        <div className="main-heading d-flex justify-content-between align-items-center">
          <span>Appointments</span>
          <div className="d-flex align-items-center gap-3">
            <div className="form-check m-0">
              <input className="form-check-input" type="checkbox" id="allLocations" />
              <label className="form-check-label text-white" htmlFor="allLocations">
                All Locations
              </label>
            </div>
            <button className="btn btn-sm btn-light rounded-circle toggle-btn" onClick={() => setCollapsed(!collapsed)}>
              {collapsed ? <FaChevronDown /> : <FaChevronUp />}
            </button>
          </div>
        </div>

        {!collapsed && (
          <div className="table-responsive">
            <table className="table table-bordered align-middle mb-0">
              <thead className="table-subheading">
                <tr>
                  <th>Name</th>
                  <th>Type</th>
                  <th>Status</th>
                  <th>Time</th>
                  <th>Rm#</th>
                </tr>
              </thead>
              <tbody>
                {appointments.map((a) => (
                  <tr key={a.id} onClick={() => setHighlighted(a.id)} className={highlighted === a.id ? "highlighted" : ""}>
                    <td>{a.name}</td>
                    <td>{a.type}</td>
                    <td>
                      <span
                        className={`badge ${
                          a.status === "Confirmed"
                            ? "bg-success"
                            : a.status === "Pending"
                            ? "bg-warning text-dark"
                            : "bg-secondary"
                        }`}
                      >
                        {a.status}
                      </span>
                    </td>
                    <td>{a.time}</td>
                    <td>{a.room}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>

      {/* Messages */}
      <div className="table-section">
        <div className="main-heading d-flex justify-content-between align-items-center">
          <span>Messages</span>
          <div>
            <label className="me-3 text-white">
              <input type="checkbox" className="form-check-input me-1" /> Priority Order
            </label>
            <label className="text-white">
              <input type="checkbox" className="form-check-input me-1" /> Show unread only
            </label>
          </div>
        </div>

        <div className="table-responsive">
          <table className="table table-bordered table-sm mb-0">
            <thead className="table-subheading">
              <tr>
                <th>Pat. Name</th>
                <th>Subject</th>
                <th>From</th>
                <th>Date</th>
              </tr>
            </thead>
            <tbody>
              {messages.map((msg, index) => (
                <tr key={index}>
                  <td>{msg.name}</td>
                  <td>{msg.subject}</td>
                  <td>{msg.from}</td>
                  <td>{msg.date}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Open Visits */}
      <div className="table-section">
        <div className="main-heading d-flex justify-content-between align-items-center">
          <span>Open Visits</span>
          <span className="text-white">All Locations</span>
        </div>

        <div className="table-responsive">
          <table className="table table-bordered table-sm mb-0">
            <thead className="table-subheading">
              <tr>
                <th>Name</th>
                <th>Diagnosis</th>
                <th>Appt Type</th>
                <th>Date</th>
              </tr>
            </thead>
            <tbody>
              {visits.map((visit, index) => (
                <tr key={index}>
                  <td>{visit.name}</td>
                  <td>{visit.diagnosis}</td>
                  <td>{visit.apptType}</td>
                  <td>{visit.date}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Documents */}
      <div className="table-section">
        <div className="main-heading">Documents</div>

        <div className="table-responsive">
          <table className="table table-bordered mb-0">
            <thead className="table-subheading">
              <tr>
                <th>Name</th>
                <th>Doc Type</th>
                <th>Queue</th>
                <th>Date</th>
              </tr>
            </thead>
            <tbody>
              {documentData.map((doc, index) => (
                <tr key={index}>
                  <td>{doc.name}</td>
                  <td>{doc.docType}</td>
                  <td>{doc.queue}</td>
                  <td>{doc.date}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

    </div>
  );
};

export default Dashboard;
