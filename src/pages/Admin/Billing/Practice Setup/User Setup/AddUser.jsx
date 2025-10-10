import React, { useState } from "react";

// import "../../../../assets/CSS/AddUserPopup.css";
// import "../../../../../assets/CSS/"

export default function AddUser() {
  const [showPopup, setShowPopup] = useState(false);
  const [form, setForm] = useState({
    lastName: "",
    firstName: "",
    middleName: "",
    speciality: "",
    npi: "",
    federalId: "",
    specialityCode: "",
    title: "",
    signature: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowPopup(false);
    alert("User Added:\n" + JSON.stringify(form, null, 2));
  };

  return (
    <div>
      <button className="medcare-btn-rounded" onClick={() => setShowPopup(true)}>
        Add User
      </button>
      {showPopup && (
        <div className="adduser-popup-bg">
          <div className="adduser-popup">
            <h2>Add User</h2>
            <form onSubmit={handleSubmit}>
              <div className="adduser-form-rows-2col">
                <div className="adduser-form-row">
                  <div className="form-row">
                    <label>Last Name</label>
                    <input name="lastName" value={form.lastName} onChange={handleChange} required />
                  </div>
                  <div className="form-row">
                    <label>First Name</label>
                    <input name="firstName" value={form.firstName} onChange={handleChange} required />
                  </div>
                </div>
                <div className="adduser-form-row">
                  <div className="form-row">
                    <label>Middle Name</label>
                    <input name="middleName" value={form.middleName} onChange={handleChange} />
                  </div>
                  <div className="form-row">
                    <label>Speciality</label>
                    <input name="speciality" value={form.speciality} onChange={handleChange} />
                  </div>
                </div>
                <div className="adduser-form-row">
                  <div className="form-row">
                    <label>NPI</label>
                    <input name="npi" value={form.npi} onChange={handleChange} />
                  </div>
                  <div className="form-row">
                    <label>Federal Id</label>
                    <input name="federalId" value={form.federalId} onChange={handleChange} />
                  </div>
                </div>
                <div className="adduser-form-row">
                  <div className="form-row">
                    <label>Speciality Code</label>
                    <input name="specialityCode" value={form.specialityCode} onChange={handleChange} />
                  </div>
                  <div className="form-row">
                    <label>Title</label>
                    <input name="title" value={form.title} onChange={handleChange} />
                  </div>
                </div>
                <div className="adduser-form-row">
                  <div className="form-row">
                    <label>Signature</label>
                    <input name="signature" value={form.signature} onChange={handleChange} />
                  </div>
                  <div className="form-row" style={{visibility:'hidden'}}>{/* invisible to fill last col */}</div>
                </div>
              </div>
              <div className="form-actions">
                <button type="submit" className="medcare-btn-rounded">Save</button>
                <button type="button" className="medcare-btn-rounded" onClick={() => setShowPopup(false)}>
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
