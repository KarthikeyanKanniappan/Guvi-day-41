import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFaceLaughWink,
  faGaugeHigh,
} from "@fortawesome/free-solid-svg-icons";

const Sidebar = () => {
  return (
    <ul
      className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion"
      id="accordionSidebar"
    >
      {/* <!-- Sidebar - Brand --> */}
      <Link
        className="sidebar-brand d-flex align-items-center justify-content-center"
        to="/portal/dashboard"
      >
        <div className="sidebar-brand-icon rotate-n-15">
          <FontAwesomeIcon icon={faFaceLaughWink} size="3x" />
        </div>
        <div className="sidebar-brand-text mx-3">
          SB Admin <sup>2</sup>
        </div>
      </Link>
      {/* <!-- Divider --> */}
      <hr className="sidebar-divider my-0" />
      {/* <!-- Nav Item - Dashboard --> */}
      <li className="nav-item active">
        <Link className="nav-link" to="/portal/dashboard">
          <span className="d-flex justify-content-center align-items-center">
            <FontAwesomeIcon icon={faGaugeHigh} size="2x" />
          </span>
          <span className="d-flex justify-content-center align-items-center">
            Dashboard
          </span>
        </Link>
      </li>
      {/* <!-- Divider --> */}
      <li className="nav-item active">
        <Link className="nav-link" to="/portal/Users">
          <i className="fas fa-fw fa-tachometer-alt"></i>
          <span>Users</span>
        </Link>
      </li>
      {/* <!-- Divider --> */}

      <li className="nav-item active">
        <Link className="nav-link" to="/portal/Products">
          <i className="fas fa-fw fa-tachometer-alt"></i>
          <span>Products</span>
        </Link>
      </li>
      {/* <!-- Divider --> */}
      {/* <!-- Nav Item - Utilities Collapse Menu --> */}
    </ul>
  );
};

export default Sidebar;
