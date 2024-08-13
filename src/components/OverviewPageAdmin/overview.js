import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './overview.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import Sidebar from '../Sidebar/sidebar';
import meeting from '../images/meeting.png';
import session from '../images/session.png';
import service from '../images/services.png';
import interview from '../images/interview.png';

const Overview = () => {

const handleMeeting = () => {
    alert("Meeting");
}
const handleInterview = () => {
    alert("Interview");
}
const handleService= () => {
    alert("Service");
}
const handleSession = () => {
    alert("Session");
}
  return (
    <>
    <Sidebar />
    <div className="overviewPage ">
      <div className="row">
        <div className="container optionpagecard" onClick={handleMeeting}>
          <img src={meeting} alt="meetings" className="cardimages" />
          <h4 className="text-center">Meetings</h4>
        </div>

        <div className="container optionpagecard" onClick={handleInterview}>
          <img src={interview} alt="interviews" className="cardimages" />
          <h4 className="text-center">Interviews</h4>
        </div>

        <div className="container optionpagecard " onClick={handleSession}>
          <img src={session} alt="sessions" className="cardimages" />
          <h4 className="text-center">Sessions</h4>
        </div>

        <div className="container optionpagecard" onClick={handleService}>
          <img src={service} alt="services" className="cardimages" />
          <h4 className="text-center">Services</h4>
        </div>
      </div>
      <div className="row ">
        <div className="container-lg mt-5">
          <h2 className="mb-4">Newly Registered</h2>

          <div className="filter-buttons mb-5 d-flex justify-content-between align-items-center">
            <div className="input-group ">
              <nav>     
                <input
                  type="text"
                  className="form-control"
                  placeholder="Search Visitor ID"
                />
              </nav>
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
            <button
              className="btn p-1
             ms-3 btn-outline-primary"
            >
              Export to Excel
            </button>
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
                    <span className="btn btn-success status-accepted">
                      Accepted
                    </span>
                  </td>
                </tr>
                <tr>
                  <td>
                    <input type="checkbox" />
                  </td>
                  <td>#7676</td>
                  <td>09/24/2022</td>
                  <td>Abe</td>
                  <td>San</td>
                  <td>dkuwhd@gyef.com</td>
                  <td>Hatton</td>
                  <td>
                    <span className="btn btn-warning status-pending">
                      Pending
                    </span>
                  </td>
                </tr>
                <tr>
                  <td>
                    <input type="checkbox" />
                  </td>
                  <td>#7675</td>
                  <td>06/25/2022</td>
                  <td>Rivindu</td>
                  <td>Chandhana</td>
                  <td>abhds@hk.com</td>
                  <td>Hatton</td>
                  <td>
                    <span className="btn btn-danger status-declined">
                      Declined
                    </span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div></>
  );
};

export default Overview;
