import React from 'react';
import { NavLink } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
// import 'bootstrap-icons/font/bootstrap-icons.css';
import './sidebar.css';
import logo from '../images/Connex logo.jpg';

const Sidebar = () => {
  return (
    <div
      className="sidebar d-flex flex-column align-items-center pt-4"
      style={{ backgroundColor: '#e8f6d9', height: '100vh', width: '220px' }}
    >
      <div className="logo mb-5">
        <img src={logo} alt=" Connex logo" style={{ width: '150px' }} />
      </div>
      <NavLink
        to="/"
        className="btn btn-success mb-3 w-75 rounded-pill text-start"
        activeClassName="active"
      >
        <i className="bi bi-house-door-fill me-2"></i> Overview
      </NavLink>
      <NavLink
        to="/interviews"
        className="btn btn-success mb-3 w-75 rounded-pill text-start"
        activeClassName="active"
      >
        <i className="bi bi-person-lines-fill me-2"></i> Interviews
      </NavLink>
      <NavLink
        to="/meetings"
        className="btn btn-success mb-3 w-75 rounded-pill text-start"
        activeClassName="active"
      >
        <i className="bi bi-journal-bookmark-fill me-2"></i> Meetings
      </NavLink>
      <NavLink
        to="/sessions"
        className="btn btn-success mb-3 w-75 rounded-pill text-start"
        activeClassName="active"
      >
        <i className="bi bi-people-fill me-2"></i> Sessions
      </NavLink>
      <NavLink
        to="/event-overview"
        className="btn btn-success mb-3 w-75 rounded-pill text-start"
        activeClassName="active"
      >
        <i className="bi bi-calendar-event-fill me-2"></i> Events
      </NavLink>
      <NavLink
        to="/appointments"
        className="btn btn-success mb-3 w-75 rounded-pill text-start"
        activeClassName="active"
      >
        <i className="bi bi-calendar-check-fill me-2"></i> Appointments
      </NavLink>
    </div>
  );
};

export default Sidebar;
