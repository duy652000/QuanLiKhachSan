import React from "react";
import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <ul
      className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion"
      id="accordionSidebar"
    >
      {/* <!-- Sidebar - Brand --> */}
      <a
        className="sidebar-brand d-flex align-items-center justify-content-center"
        href="/"
      >
        <div className="sidebar-brand-icon rotate-n-15">
          <i className="fas fa-laugh-wink"></i>
        </div>
        <div className="sidebar-brand-text mx-3">
          SB Admin <sup>2</sup>
        </div>
      </a>

      {/* <!-- Divider --> */}
      <hr className="sidebar-divider my-0" />

      {/* <!-- Nav Item - Dashboard --> */}
      <li className="nav-item active">
        <a href="/" className="nav-link">
          <i className="fas fa-fw fa-tachometer-alt"></i> &nbsp;
          <span>Thống Kê</span>
        </a>
      </li>

      {/* <!-- Nav Item - Room --> */}
      <li className="nav-item">
        <a href="/room" className="nav-link">
          <i className="bi bi-door-closed"></i> &nbsp;
          <span>Quản Lý Đặt Phòng</span>
        </a>
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
            {/* <h6 className="collapse-header"> Dịch Vụ :</h6> */}
            <a className="collapse-item" href="/service">
              Quản lý dịch vụ
            </a>
            <a className="collapse-item" href="/Oder">
              Đặt dịch vụ
            </a>
          </div>
        </div>
      </li>

      {/* <!-- Nav Item - custom --> */}
      <li className="nav-item">
        <a href="/customer" className="nav-link">
          <i className="bi bi-person-plus"></i> &nbsp;
          <span>Quản Lý Khách Hàng</span>
        </a>
      </li>

    

      {/* <!-- Nav Item - bill --> */}
      <li className="nav-item">
        <a href="/room" className="nav-link">
          <i className="bi bi-receipt-cutoff"></i> &nbsp;
          <span>Quản Lý Hóa Đơn</span>
        </a>
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
