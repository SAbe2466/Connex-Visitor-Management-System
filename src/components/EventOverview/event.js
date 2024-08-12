import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './event.css';

const EventRecords = () => {
  return (
    <div className="container mt-5">
      <h2 className="mb-4">Event Records</h2>

      <div className="filter-buttons mb-4 d-flex justify-content-between align-items-center">
        <div className="input-group">
          <input
            type="text"
            className="form-control"
            placeholder="Search Visitor ID"
          />
          <button className="btn btn-outline-secondary" type="button">
            <i className="bi bi-calendar"></i> Date
          </button>
          <button className="btn btn-outline-secondary" type="button">
            Status
          </button>
          <button className="btn btn-outline-secondary" type="button">
            Filter
          </button>
        </div>
        <button className="btn btn-outline-primary">Export to Excel</button>
      </div>

      <div
        className="table-responsive"
        style={{ maxHeight: '400px', overflowY: 'auto' }}
      >
        <table className="table table-bordered align-middle">
          <thead>
            <tr>
              <th>
                <input type="checkbox" />
              </th>
              <th>Visitor ID</th>
              <th>Date</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Email</th>
              <th>Contact No</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <input type="checkbox" />
              </td>
              <td>#7676</td>
              <td>06/30/2022</td>
              <td>Ramesh</td>
              <td>Chaudhary</td>
              <td>abhds@hjk.com</td>
              <td>Lalitpur</td>
              <td>
                <span className=" btn btn-success status-completed">
                  Completed
                </span>
              </td>
            </tr>
            <tr>
              <td>
                <input type="checkbox" />
              </td>
              <td>#7676</td>
              <td>06/30/2022</td>
              <td>Ramesh</td>
              <td>Chaudhary</td>
              <td>dkuwhd@gyef.com</td>
              <td>Lalitpur</td>
              <td>
                <span className=" btn btn-warning status-pending">Pending</span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default EventRecords;
