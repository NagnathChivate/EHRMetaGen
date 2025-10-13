import React, { useState } from "react";
import "./PatientSearch.css"; // scoped CSS for this component only

const PatientSearch = () => {
  const patients = [
    { account: "22718", name: "Test 1, Reconcile Tea", address: "SCHENFCTADY, NY M4S 1C8" },
    { account: "23163", name: "Test 29556, TS1 NAJ HAUJ", address: "SCHENECTADY, NY 12345-5555" },
    { account: "223804", name: "Test Ap1, Patient1 Great Neck1", address: "New York, NY 10101" },
    { account: "23572", name: "Test Calim, Test Pat", address: "Boston, MA 02118" }
  ];

  const [searchBy, setSearchBy] = useState("");
  const [query, setQuery] = useState("");
  const [highlighted, setHighlighted] = useState(null);

  // filter logic
  const filtered = patients.filter((p) => {
    if (!query) return true;
    if (searchBy === "account") return p.account.includes(query);
    if (searchBy === "name") return p.name.toLowerCase().includes(query.toLowerCase());
    return true;
  });

  return (
    <div className="patient-search-container my-4">
      {/* Header */}
      <div className="patient-search-header p-2 text-white">
        <h6 className="mb-0">Patient Search</h6>
      </div>

      {/* Search Bar */}
      <div className="row g-2 my-3">
        <div className="col-md-4">
          <select
            className="form-select"
            value={searchBy}
            onChange={(e) => setSearchBy(e.target.value)}
          >
            <option value="">-- Select Search Criteria --</option>
            <option value="name">Name</option>
            <option value="account">Account #</option>
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
        <div className="col-md-3">
          <button className="btn btn-primary w-100">Search</button>
        </div>
      </div>

      {/* Table */}
      <div className="table-responsive patient-search-table">
        <table className="table table-bordered align-middle">
          <thead>
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
                className={`patient-row ${highlighted === p.account ? "highlighted" : ""}`}
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
  );
};

export default PatientSearch;
