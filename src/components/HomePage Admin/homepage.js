import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState } from 'react';
import './homepage.css';
import CONNEX from '../images/CONNEX png.png';

const HomePage = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
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
    <div>
      <div className="container justify-content-center align-items-center">
        <div className="col-12">
          <div>
            <img src={CONNEX} alt="Connex" className="img-fluid " />
            <h1 className="text-center"> Visitor Management System</h1>
            <h1 className="text-center">Admin Portral</h1>
          </div>
          <form onSubmit={handleSubmit} childrenlassName=" card p-4">
            <div className="row mb-3">
              <div className="row p-3 input-group-lg">
                <input
                  className="form-control"
                  placeholder="e-mail "
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>
              <div className="row p-3 input-group-lg">
                <input
                  className="form-control"
                  placeholder="Password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="row">
              <button type="button" className="btn btn-primary btn-lg">
                Login
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
