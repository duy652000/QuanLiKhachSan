import jwtDecode from "jwt-decode";
import moment from "moment";
import React from "react";
import { useState } from "react";
import { useContext, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../assets/images/logoNavbar.png";
import { AppContext } from "../Context/AppContext";

function Sidebar({openSideBar,setOpenSideBar}) {
  const { role } = useContext(AppContext);
  const roleAccount = role;

  const history = useNavigate();
  function timeOut() {
    if (!localStorage.getItem("token")) {
      history("/login");
    } else {
      const token = localStorage.getItem("token");
      const timeOutdecoded = jwtDecode(token);
      const timeLogOut = moment
        .unix(timeOutdecoded.exp)
        .format("YYYY-MM-DD HH:mm:ss");
        

      const timeOut = Date.parse(timeLogOut);
      
      return timeOut;
    }
  }

  useEffect(() => {
    timeOut();

    var Logout = function () {
      if (
        Date.parse(moment(Date.now()).format("YYYY-MM-DD HH:mm:ss")) >=
        timeOut()
      ) {
        alert("Hết thời gian đăng nhập !");
        localStorage.clear("token");
        history("/login");
      }
    };
    Logout();
    const myInterval = setInterval(Logout, 1000);
    return () => {
      clearInterval(myInterval);
    };
  }, []);

  return (
    <ul
      className={`navbar-nav bg-gradient-primary sidebar sidebar-dark accordion ${openSideBar && "toggled"}`  }
      id="accordionSidebar"
    >
      {/* <!-- Sidebar - Brand --> */}
      <Link
        className="sidebar-brand d-flex align-items-center justify-content-center"
        to={"/"}
      >
        <div className="sidebar-brand-icon rotate-n-15">
          <img src={logo} alt="Logo" className="logo-navbar" />
        </div>
        <div className="sidebar-brand-text mx-2">Hotel manager</div>
      </Link>

      {/* <!-- Divider --> */}
      <hr className="sidebar-divider my-0" />

      {roleAccount === 1 ? (
        //admin

        <>
          {/* <!-- Nav Item - Dashboard --> */}
          <li className="nav-item active">
            <Link to={"/"} className="nav-link">
              <i className="fas fa-fw fa-tachometer-alt"></i> &nbsp;
              <span>Giờ Quốc Tế</span>
            </Link>
          </li>

          {/* <!-- Nav Item - Statistic --> */}
          <li className="nav-item active">
            <Link to={"/statistic"} className="nav-link">
              <i className="bi bi-clipboard2-pulse"></i> &nbsp;
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

          
          {/* <!-- Bill - Nav Item  --> */}
          <li className="nav-item">
            <Link to="/bill" className="nav-link">
              <i className="bi bi-receipt"></i> &nbsp;
              <span>Quản Lý Hóa Đơn </span>{" "}
            </Link>
          </li>

          {/* <!-- Nav Item - Service --> */}
          <li className="nav-item">
            <Link to="/service" className="nav-link">
              <i className="fas fa-fw fa-cog"></i> &nbsp;
              <span>Quản lý dịch vụ</span>
            </Link>
          </li>

          {/* <!--Customer - Nav Item  --> */}
          <li className="nav-item">
            <Link to="/customer" className="nav-link">
              <i className="bi bi-file-earmark-person"></i> &nbsp;
              <span>Quản Lý Khách Hàng</span>
            </Link>
          </li>

          {/* <!-- Room Manager - Nav Item --> */}
          <li className="nav-item">
            <Link to="/room-manager" className="nav-link">
              <i className="bi bi-building"></i> &nbsp;
              <span>Quản Lý Phòng</span>
            </Link>
          </li>

          {/* <!-- User - Nav Item  --> */}
          <li className="nav-item">
            <Link to="/user" className="nav-link">
              <i className="bi bi-people-fill"></i> &nbsp;
              <span>Quản Lý Tài Khoản</span>{" "}
            </Link>
          </li>

           

          {/* {roleAdmin(roleAccount)} */}
          {/* <!-- Sidebar Toggler (Sidebar) --> */}
        </>
      ) : roleAccount === 2 ? (
        <>
          {/* <!-- Nav Item - Dashboard --> */}
          <li className="nav-item active">
            <Link to={"/"} className="nav-link">
              <i className="fas fa-fw fa-tachometer-alt"></i> &nbsp;
              <span>Giờ Quốc Tế</span>
            </Link>
          </li>
          {/* <!-- Nav Item - Room --> */}
          <li className="nav-item">
            <Link to="/room" className="nav-link">
              <i className="bi bi-door-closed"></i> &nbsp;
              <span>Quản Lý Đặt Phòng</span>
            </Link>
          </li>
          {/* <!--Customer - Nav Item  --> */}
          <li className="nav-item">
            <Link to="/customer" className="nav-link">
              <i className="bi bi-file-earmark-person"></i> &nbsp;
              <span>Quản Lý Khách Hàng</span>
            </Link>
          </li>
        </>
      ) : (
        <>
        {/* <!-- Nav Item - Dashboard --> */}
        <li className="nav-item active">
            <Link to={"/"} className="nav-link">
              <i className="fas fa-fw fa-tachometer-alt"></i> &nbsp;
              <span>Giờ Quốc Tế</span>
            </Link>
          </li>
          {/* <!-- Nav Item - Room --> */}
          <li className="nav-item">
            <Link to="/room" className="nav-link">
              <i className="bi bi-door-closed"></i> &nbsp;
              <span>Quản Lý Dọn Dẹp</span>
            </Link>
          </li>
        </>
      )}

      <div className="text-center d-none d-md-inline">
        <button className="rounded-circle border-0" id="sidebarToggle" onClick={()=>{setOpenSideBar(!openSideBar)}}></button>
      </div>
    </ul>
  );
}

export default Sidebar;
