

import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../../../../assets/CSS/AddUser.css"

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
    <>
    
      {/* 🌟 Main UI */}
      <div className="container py-4 text-center">
        <button
          className="btn btn-primary rounded-pill px-4"
          onClick={() => setShowPopup(true)}
        >
          Add User
        </button>

        {showPopup && (
          <div className="custom-modal-bg">
            <div className="custom-modal">
              <div className="modal-header  text-white rounded-top">
                <h5 className="modal-title">Add User</h5>
                <button
                  type="button"
                  className="btn-close btn-close-white"
                  onClick={() => setShowPopup(false)}
                ></button>
              </div>

              <form onSubmit={handleSubmit}>
                <div className="modal-body p-4">
                  <div className="row g-3">
                    <div className="col-md-6">
                      <label className="form-label">Last Name</label>
                      <input
                        type="text"
                        className="form-control"
                        name="lastName"
                        value={form.lastName}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div className="col-md-6">
                      <label className="form-label">First Name</label>
                      <input
                        type="text"
                        className="form-control"
                        name="firstName"
                        value={form.firstName}
                        onChange={handleChange}
                        required
                      />
                    </div>

                    <div className="col-md-6">
                      <label className="form-label">Middle Name</label>
                      <input
                        type="text"
                        className="form-control"
                        name="middleName"
                        value={form.middleName}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="col-md-6">
                      <label className="form-label">Speciality</label>
                      <input
                        type="text"
                        className="form-control"
                        name="speciality"
                        value={form.speciality}
                        onChange={handleChange}
                      />
                    </div>

                    <div className="col-md-6">
                      <label className="form-label">NPI</label>
                      <input
                        type="text"
                        className="form-control"
                        name="npi"
                        value={form.npi}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="col-md-6">
                      <label className="form-label">Federal Id</label>
                      <input
                        type="text"
                        className="form-control"
                        name="federalId"
                        value={form.federalId}
                        onChange={handleChange}
                      />
                    </div>

                    <div className="col-md-6">
                      <label className="form-label">Speciality Code</label>
                      <input
                        type="text"
                        className="form-control"
                        name="specialityCode"
                        value={form.specialityCode}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="col-md-6">
                      <label className="form-label">Title</label>
                      <input
                        type="text"
                        className="form-control"
                        name="title"
                        value={form.title}
                        onChange={handleChange}
                      />
                    </div>

                    <div className="col-md-6">
                      <label className="form-label">Signature</label>
                      <input
                        type="text"
                        className="form-control"
                        name="signature"
                        value={form.signature}
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                </div>

                <div className="modal-footer d-flex justify-content-end p-3">
                  <button type="submit" className="btn rounded-pill px-4">
                    Save
                  </button>
                  <button
                    type="button"
                    className="btn rounded-pill px-4 ms-2"
                    onClick={() => setShowPopup(false)}
                  >
                    Cancel
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}
      </div>
    </>
  );
}