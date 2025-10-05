import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './RecordTable.css'; // CSS for Ubuntu font and custom colors
import "../App.css";


const records = [
  { test: '001 ALLERGEN', cpt: '86003, 99203', modifiers: '11, 22, 33, 44', lab: 'Internal Lab' },
  { test: '10-HYDROXYCARBAMAZEPINE', cpt: '99200', modifiers: '', lab: 'Internal Lab' },
  { test: '17-HYDROXYPROGESTERONE, LC/MS/MS', cpt: '12345, 99206, 78300, 70547, 70496', modifiers: '', lab: 'Internal Lab' },
  { test: '2,5-HEXANEDIONE, URINE (UNHYDROLYZED)', cpt: '01111, 47656, 02222', modifiers: '', lab: 'Internal Lab', isHighlighted: true },
  { test: '3A-ANDROSTANEDIOL GLUCURONIDE', cpt: '99245', modifiers: '', lab: 'Internal Lab' },
  { test: '5-FLUCYTOSINE', cpt: '12345, 75571', modifiers: '', lab: 'Internal Lab' }
  // ...add more rows as needed
];

const Record_table = () => (
  <div className="container mt-3 ubuntu-bold">
    <div className="record-table-header rounded px-2 py-2 mb-2 d-flex justify-content-between align-items-center">
      <span className="fw-bold fs-5" style={{ color: 'white' }}>Test Master</span>
      <div>
        <button className="btn btn-secondary btn-sm">Inactive</button>
        <button className="btn btn-primary btn-sm ms-2">Add</button>
      </div>
    </div>
    <div className="row mb-2">
      <div className="col-md-2"><select className="form-select"><option>Internal Lab</option></select></div>
      <div className="col-md-2"><select className="form-select"><option>Show All</option></select></div>
      <div className="col-md-2"><input className="form-control" placeholder="Test" /></div>
      <div className="col-md-2"><input className="form-control" placeholder="Modifier" /></div>
      <div className="col-md-2"><input className="form-control" placeholder="CPT Code" /></div>
      <div className="col-md-2"><button className="btn btn-info w-100">Search</button></div>
    </div>
    <table className="table record-table">
      <thead>
        <tr className="table-header-row">
          <th>Test</th>
          <th>CPT Codes</th>
          <th>Modifiers</th>
          <th>Lab</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {records.map((row, idx) => (
          <tr
            key={idx}
            className={
              row.isHighlighted
                ? 'orange-row'
                : idx % 2 === 0
                  ? 'blue-row'
                  : 'white-row'
            }
          >
            <td>{row.test}</td>
            <td>{row.cpt}</td>
            <td>{row.modifiers}</td>
            <td>{row.lab}</td>
            <td>
              <span className="text-danger" style={{ fontWeight: 'bold', fontSize: 20, cursor: 'pointer' }}>
                &times;
              </span>
            </td>
          </tr>
        ))}
      </tbody>
    </table>


    <p className='ubuntu-bold'>Lorem ipsum dolor sit amet consectetur adipisicing elit. A tempora veritatis molestias, deserunt alias cumque, molestiae provident corrupti assumenda quisquam ab fugiat sit, voluptate corporis eius! Tempore natus cumque odit?</p>
   
  </div>
);

export default Record_table;
