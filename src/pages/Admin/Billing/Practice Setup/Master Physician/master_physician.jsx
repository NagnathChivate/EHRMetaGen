import React, { useState } from 'react';
import '../../../../../assets/CSS/Master_physician.css'


const MasterPhysician = ({ toggleSidebar }) => {
  const [showModal, setShowModal] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [physicians, setPhysicians] = useState([]);
  
  // Handle menu toggle
  const handleMenuClick = () => {
    if (toggleSidebar && typeof toggleSidebar === 'function') {
      toggleSidebar();
    } else {
      console.log('toggleSidebar function not available');
    }
  };
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    gender: '',
    dateOfBirth: '',
    phoneNumber: '',
    email: '',
    officeAddress: '',
    specialization: '',
    qualification: '',
    experience: '',
    license: '',
    consultationHours: '',
    status: 'Active'
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newPhysician = {
      id: Date.now(),
      name: `${formData.firstName} ${formData.lastName}`,
      specialization: formData.specialization,
      experience: formData.experience,
      email: formData.email,
      status: formData.status
    };
    setPhysicians([...physicians, newPhysician]);
    setShowModal(false);
    resetForm();
  };

  const resetForm = () => {
    setFormData({
      firstName: '',
      lastName: '',
      gender: '',
      dateOfBirth: '',
      phoneNumber: '',
      email: '',
      officeAddress: '',
      specialization: '',
      qualification: '',
      experience: '',
      license: '',
      consultationHours: '',
      status: 'Active'
    });
  };

  const handleCancel = () => {
    setShowModal(false);
    resetForm();
  };

  const filteredPhysicians = physicians.filter(physician =>
    physician.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    physician.specialization.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="master-physician-container">
      <div className="physician-header">
        <div className="header-left">
          <button className="menu-btn" onClick={handleMenuClick}>
            <span className="menu-icon">☰</span>
          </button>
          <h1 className="page-title">Master Physician</h1>
        </div>
      </div>

      <div className="physician-content">
        <div className="search-add-section">
          <div className="search-box">
            <span className="search-icon">🔍</span>
            <input
              type="text"
              placeholder="Search Physician..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="search-input"
            />
          </div>
          <button className="add-physician-btn" onClick={() => setShowModal(true)}>
            <span className="user-plus-icon">👤+</span>
            Add Physician
          </button>
        </div>

        <div className="physician-table-container">
          <table className="physician-table">
            <thead>
              <tr>
                <th>Name</th>
                <th>Specialization</th>
                <th>Experience</th>
                <th>Email</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {filteredPhysicians.length > 0 ? (
                filteredPhysicians.map((physician) => (
                  <tr key={physician.id}>
                    <td>{physician.name}</td>
                    <td>{physician.specialization}</td>
                    <td>{physician.experience}</td>
                    <td>{physician.email}</td>
                    <td>{physician.status}</td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="5" className="no-records">
                    No physician records found
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>

      {showModal && (
        <div className="modal-overlay">
          <div className="modal-container">
            <div className="modal-header">
              <h2>Add Physician</h2>
              <button className="close-btn" onClick={handleCancel}>✕</button>
            </div>

            <form onSubmit={handleSubmit} className="physician-form">
              <div className="form-row">
                <input
                  type="text"
                  name="firstName"
                  placeholder="First Name"
                  value={formData.firstName}
                  onChange={handleInputChange}
                  className="form-input"
                  required
                />
                <input
                  type="text"
                  name="lastName"
                  placeholder="Last Name"
                  value={formData.lastName}
                  onChange={handleInputChange}
                  className="form-input"
                  required
                />
              </div>

              <div className="form-row">
                <select
                  name="gender"
                  value={formData.gender}
                  onChange={handleInputChange}
                  className="form-input"
                  required
                >
                  <option value="">Select Gender</option>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                  <option value="Other">Other</option>
                </select>
                <div className="date-input-wrapper">
                  <input
                    type="text"
                    name="dateOfBirth"
                    placeholder="dd-mm-yyyy"
                    value={formData.dateOfBirth}
                    onChange={handleInputChange}
                    className="form-input"
                    required
                  />
                  <span className="calendar-icon">📅</span>
                </div>
              </div>

              <div className="form-row">
                <input
                  type="tel"
                  name="phoneNumber"
                  placeholder="Phone Number"
                  value={formData.phoneNumber}
                  onChange={handleInputChange}
                  className="form-input"
                  required
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="form-input"
                  required
                />
              </div>

              <div className="form-row">
                <input
                  type="text"
                  name="officeAddress"
                  placeholder="Office Address"
                  value={formData.officeAddress}
                  onChange={handleInputChange}
                  className="form-input"
                  required
                />
                <input
                  type="text"
                  name="specialization"
                  placeholder="Specialization / Department"
                  value={formData.specialization}
                  onChange={handleInputChange}
                  className="form-input"
                  required
                />
              </div>

              <div className="form-row">
                <input
                  type="text"
                  name="qualification"
                  placeholder="Qualification"
                  value={formData.qualification}
                  onChange={handleInputChange}
                  className="form-input"
                  required
                />
                <input
                  type="text"
                  name="experience"
                  placeholder="Years of Experience"
                  value={formData.experience}
                  onChange={handleInputChange}
                  className="form-input"
                  required
                />
              </div>

              <div className="form-row">
                <input
                  type="text"
                  name="license"
                  placeholder="License / NPI Number"
                  value={formData.license}
                  onChange={handleInputChange}
                  className="form-input"
                  required
                />
                <input
                  type="text"
                  name="consultationHours"
                  placeholder="Consultation Hours"
                  value={formData.consultationHours}
                  onChange={handleInputChange}
                  className="form-input"
                  required
                />
              </div>

              <div className="form-row-single">
                <select
                  name="status"
                  value={formData.status}
                  onChange={handleInputChange}
                  className="form-input"
                  required
                >
                  <option value="Active">Active</option>
                  <option value="Inactive">Inactive</option>
                </select>
              </div>

              <div className="form-actions">
                <button type="button" className="cancel-btn" onClick={handleCancel}>
                  Cancel
                </button>
                <button type="submit" className="save-btn">
                  Save Physician


                  
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default MasterPhysician;