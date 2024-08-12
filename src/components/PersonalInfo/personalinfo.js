import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import './personalinfo.css';
import my from '../images/my.png';

const PersonalInfo = () => {
  return (
    <div className="mt-5">
      <h2 className="text-center"> Profile Information</h2>
      <div className="row">
        <div className="col-md-4 d-flex justify-content-center">
          <div className="card p-3 ">
            <div className="text-center">
              <img
                src={my}
                alt="Profile"
                className="rounded-circle img-fluid mb-3 profilemy"
              />
              <p className="mb-1">
                <strong>Username :</strong>Abe sutha
              </p>
              <p className="mb-1">
                <strong>Email :</strong> abe@example.com
              </p>
              <p className="mb-1">
                <strong>Contact No :</strong> +716069649
              </p>
              <div className="container-sm">QR code</div>
              {/* <div className='container-md'>..............</div> */}
            </div>
          </div>
        </div>
        <div className="col-md-8">
          <div className="card p-3 mb-3" style={{ borderRadius: '20px' }}>
            <p className="mb-1">
              <strong>Contact :</strong> Contact Information
            </p>
          </div>
          <div className="card p-3 mb-3" style={{ borderRadius: '20px' }}>
            <p className="mb-1">
              <strong>Check-in :</strong> Time of Check-in
            </p>
          </div>
          <div className="card p-3 mb-3" style={{ borderRadius: '20px' }}>
            <p className="mb-1">
              <strong>Button Used :</strong> Button Action
            </p>
          </div>
          <div className="card p-3 mb-3" style={{ borderRadius: '20px' }}>
            <p className="mb-1">
              <strong>Check-out :</strong> Time of Check-out
            </p>
          </div>
          {/* <div className="card p-3 mb-3" style={{ borderRadius: '20px' }}>
            <p className="mb-1">
              <strong>QR-Code :</strong> QR Code Information
            </p>
          </div> */}
          {/* <div
            className="card  p-5"
            style={{ borderRadius: '20px' }}
          >
            <p className="mb-1 ">
              <strong>Feedback :</strong> User Feedback
            </p>
          </div> */}
          <div className="form-floating">
            <textarea
              className="form-control"
              placeholder="Leave a comment here"
              id="floatingTextarea"
            ></textarea>
            <label for="floatingTextarea">Comments</label>
          </div>
        </div>
      </div>
      <div className="row justify-content-center mt-5 ms-5">
        <button type="button" className="btn btn-info btn-lg col-6 ">
          Previous Records
        </button>
      </div>
    </div>
  );
};
export default PersonalInfo;
