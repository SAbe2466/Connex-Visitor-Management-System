import React from 'react';
import { NavLink } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './sidebar.css';
import logo from '../images/Connex logo.jpg';

const Sidebar = () => {
  return (
    <div
      className="sidebar d-flex flex-column align-items-center pt-4"
      style={{ backgroundColor: '#e8f6d9', height: '100%', width: '220px', position:'fixed' }}
    >
      <div className="logo mb-5">
        <img src={logo} alt=" Connex logo" style={{ width: '150px' }} />
      </div>
      <NavLink
        to="/overview"
        className="btn btn-success mb-3 w-75 rounded-pill text-start"
        activeClassName="active"
      >
        <i className="bi bi-house-door-fill me-2"></i> Overview
      </NavLink>
      <NavLink
        to="/interview"
        className="btn btn-success mb-3 w-75 rounded-pill text-start"
        activeClassName="active"
      >
        <i className="bi bi-person-lines-fill me-2"></i> Interviews
      </NavLink>
      <NavLink
        to="/meeting"
        className="btn btn-success mb-3 w-75 rounded-pill text-start"
        activeClassName="active"
      >
        <i className="bi bi-journal-bookmark-fill me-2"></i> Meetings
      </NavLink>
      <NavLink
        to="/session"
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
        <i className="bi bi-calendar-event-fill me-2 "></i> Events
      </NavLink>
      <NavLink
        to="/appointment"
        className="btn btn-success mb-3 w-75 rounded-pill text-start"
        activeClassName="active"
      >
        <i className="bi bi-calendar-check-fill me-2"></i> Appointments
      </NavLink>
    </div>
  );
};

export default Sidebar;
