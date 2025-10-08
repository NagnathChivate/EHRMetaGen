import React from "react";
import "./DashboardPanel.css";

const DashboardPanel = () => {
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

  return (
    <div className="message-container my-4">
      {/* Messages Section */}
      <div className="hospital-card mb-4">
        <div className="hospital-card-header d-flex justify-content-between align-items-center">
          <h6 className="m-0 text-white">Messages</h6>
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
          <table className="table table-bordered hospital-table table-sm mb-0">
            <thead>
              <tr>
                <th>Pat.Name</th>
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

      {/* Open Visits Section */}
      <div className="hospital-card">
        <div className="hospital-card-header d-flex justify-content-between align-items-center">
          <h6 className="m-0 text-white">Open Visits</h6>
          <span className="text-white">All Locations</span>
        </div>
        <div className="table-responsive">
          <table className="table table-bordered hospital-table table-sm mb-0">
            <thead>
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
    </div>
  );
};

export default DashboardPanel;
