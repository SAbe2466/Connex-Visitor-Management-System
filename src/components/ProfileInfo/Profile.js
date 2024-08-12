import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState } from 'react';
import './Profile.css';
import my from '../images/my.png';

const ProfileInfo = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div className="conatainer mt-5">
      <button className=" btn btn-primary" onClick={handleShow}>
        Open Profile Modal
      </button>
      <div
        className={`modal fade ${show ? 'show d-block' : ''}`}
        tabIndex="-1"
        style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }}
      >
        <div className="modal-dialog">
          <div className="modal-content" style={{ borderRadius: '15px' }}>
            <div className="modal-header">
              <h5 className="modal-title">Profile Info</h5>
              <button
                type="button"
                className="btn-close"
                onClick={handleClose}
              ></button>
            </div>
            <div className="modal-body">
              <div className="text-center mb-4">
                <img
                  src={my}
                  alt="Profile"
                  className="rounded-circle img-thumbnail"
                />
              </div>
              <div className="profile-info">
                <p>
                  <strong>Name :</strong> John Doe
                </p>
                <p>
                  <strong>Email :</strong> johndoe@example.com
                </p>
                <p>
                  <strong>Status :</strong> Visitor
                </p>
                <p>
                  <strong>Purpose :</strong> Interview
                </p>
                <p>
                  <strong>Pass No :</strong>{' '}
                  <input
                    type="password"
                    className="form-control"
                    style={{ display: 'inline', width: '150px' }}
                  />
                </p>
              </div>
            </div>
            <div className="modal-footer d-flex justify-content-between">
              <button
                type="button"
                data-bs-dismiss="modal"
                className="btn btn-success w-45"
                // data-bs-dismiss="modal"
                onClick={handleClose}
              >
                Approve
              </button>
              <button
                type="button"
                data-bs-dismiss="modal"
                className="btn btn-danger w-45"
                onClick={handleClose}
              >
                Reject
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileInfo;
