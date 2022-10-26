import React from "react";
import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <ul
      className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion"
      id="accordionSidebar"
    >
      {/* <!-- Sidebar - Brand --> */}
      <Link
        className="sidebar-brand d-flex align-items-center justify-content-center"
        to="/"
      >
        <div className="sidebar-brand-icon rotate-n-15">
          <i className="fas fa-laugh-wink"></i>
        </div>
        <div className="sidebar-brand-text mx-3">
          SB Admin <sup>2</sup>
        </div>
      </Link>

      {/* <!-- Divider --> */}
      <hr className="sidebar-divider my-0" />

      {/* <!-- Nav Item - Dashboard --> */}
      <li className="nav-item active">
        <Link to="/" className="nav-link">
          <i className="fas fa-fw fa-tachometer-alt"></i> &nbsp;
          <span>Thống Kê</span>
        </Link>
      </li>

      {/* <!-- Nav Item - Room --> */}
      <li className="nav-item">
        <Link to="/room" className="nav-link">
          <i className="bi bi-door-closed"></i> &nbsp;
          <span>Quản Lý Đặt Phòng</span>
        </Link>
      </li>
        {/* <!-- Nav Item - Service --> */}
        <li className="nav-item">
        <a
          className="nav-link collapsed"
          href="#"
          data-toggle="collapse"
          data-target="#collapseTwo"
          aria-expanded="true"
          aria-controls="collapseTwo"
        >
          <i className="fas fa-fw fa-cog"></i>&nbsp;&nbsp;
          <span>Dịch Vụ</span>
        </a>
        <div
          id="collapseTwo"
          className="collapse"
          aria-labelledby="headingTwo"
          data-parent="#accordionSidebar"
        >
          <div className="bg-white py-2 collapse-inner rounded">
            <h6 className="collapse-header"> Dịch Vụ :</h6>
            <Link className="collapse-item" to="/Service">
              Quản lý dịch vụ
            </Link>
            <Link className="collapse-item" to="/Oder">
              Đặt dịch vụ
            </Link>
          </div>
        </div>
      </li>

      {/* <!-- Nav Item - custom --> */}
      <li className="nav-item">
        <Link to="/room" className="nav-link">
          <i className="bi bi-person-plus"></i> &nbsp;
          <span>Quản Lý Khách Hàng</span>
        </Link>
      </li>

    

      {/* <!-- Nav Item - bill --> */}
      <li className="nav-item">
        <Link to="/room" className="nav-link">
          <i className="bi bi-receipt-cutoff"></i> &nbsp;
          <span>Quản Lý Hóa Đơn</span>
        </Link>
      </li>
      {/* <!-- Nav Item - account --> */}
      <li className="nav-item">
        <a href="/user" className="nav-link">
          <i className="bi bi-people-fill"></i> &nbsp;
          <span>Quản Lý Tài Khoản</span>{" "}
        </a>
      </li>

      {/* <!-- Sidebar Toggler (Sidebar) --> */}
      <div className="text-center d-none d-md-inline">
        <button className="rounded-circle border-0" id="sidebarToggle"></button>
      </div>
    </ul>
  );
}

export default Sidebar;
