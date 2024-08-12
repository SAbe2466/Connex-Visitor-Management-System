import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Registration.css';
import logo from '../images/Connex logo.jpg';

const Registration = () => {
  const [formData, setFormData] = useState({
    title: '',
    firstName: '',
    lastName: '',
    email: '',
    contactNumber: '',
    companyName: '',
    designation: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log(formData);
  };

  return (
    <div className="container mt-5">
      <div className="header-container text-center mb-4">
        <img src={logo} alt="Connex Logo" className="mb-2 logoimg" />
        <h2>Visitor Onboarding</h2>
      </div>
      <form onSubmit={handleSubmit} className="card p-4">
        <div className="row mb-3">
          <div className="col-3 d-flex">
            <select
              className="form-select"
              name="title"
              value={formData.title}
              onChange={handleChange}
            >
              <option value="">Title</option>
              <option value="Miss">Miss</option>
              <option value="Mr">Mr</option>
              <option value="Mrs">Mrs</option>
              <option value="Ms">Ms</option>
            </select>
          </div>
          <div className="col-4">
            <input
              type="text"
              className="form-control"
              placeholder="First Name"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
            />
          </div>
          <div className="col-5">
            <input
              type="text"
              className="form-control"
              placeholder="Last Name"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="row mb-3">
          <div className="col-6">
            <input
              type="email"
              className="form-control"
              placeholder="Email Address"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
          </div>
          <div className="col-6">
            <input
              type="text"
              className="form-control"
              placeholder="Contact Number"
              name="contactNumber"
              value={formData.contactNumber}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="row mb-3">
          <div className="col-6">
            <input
              type="text"
              className="form-control"
              placeholder="Company Name"
              name="companyName"
              value={formData.companyName}
              onChange={handleChange}
            />
          </div>
          <div className="col-6">
            <input
              type="text"
              className="form-control"
              placeholder="Designation"
              name="designation"
              value={formData.designation}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="row d-flex btnrow">
          <div className="col-6">
            <button type="button" className="btn btn-primary">
              Back
            </button>
          </div>
          <div className="col-6">
            <button type="button" className="btn btn-success">
              Submit
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Registration;
