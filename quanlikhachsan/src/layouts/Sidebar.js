import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from '../assets/images/logoNavbar.png';
import jwtDecode from "jwt-decode";
import moment from "moment";


function Sidebar() {
  const history = useNavigate();
 

  function timeOut (){
    if (!localStorage.getItem("token")) {
       history("/login");
     }
     else{
       const token =localStorage.getItem("token");
       const timeOutdecoded = jwtDecode(token);
       const timeLogOut = moment.unix(timeOutdecoded.exp).format("YYYY-MM-DD hh:mm:ss")
       const  timeOut = Date.parse(timeLogOut)
       return timeOut
     }
   }

  
  useEffect(() => {
    timeOut();    
      var Logout = function () {
        if(Date.parse(moment(Date.now()).format("YYYY-MM-DD hh:mm:ss"))>=timeOut()){
            alert("Hết thời gian đăng nhập !")
            localStorage.clear("token")
            history("/login")  
          }
        };
        Logout();
        const myInterval = setInterval(Logout, 1000);
        return()=>{
          clearInterval(myInterval)
        }
  },[]);



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
        <img src={logo} alt="Logo" className="logo-navbar" />
        </div>
        <div className="sidebar-brand-text mx-2">
          Hotel manager
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
            {/* <h6 className="collapse-header"> Dịch Vụ :</h6> */}
            <Link className="collapse-item" to="/service">
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
        <Link to="/customer" className="nav-link">
          <i className="bi bi-person-plus"></i> &nbsp;
          <span>Quản Lý Khách Hàng</span>
        </Link>
      </li>

      {/* <!-- Nav Item - bill --> */}
      {/* <li className="nav-item">
        <Link to="/bill" className="nav-link">
          <i className="bi bi-receipt-cutoff"></i> &nbsp;
          <span>Quản Lý Hóa Đơn</span>
        </Link>
      </li> */}
      {/* <!-- Nav Item - account --> */}
      <li className="nav-item">
        <Link to="/user" className="nav-link">
          <i className="bi bi-people-fill"></i> &nbsp;
          <span>Quản Lý Tài Khoản</span>{" "}
        </Link>
      </li>

      

      {/* <!-- Sidebar Toggler (Sidebar) --> */}
      <div className="text-center d-none d-md-inline">
        <button className="rounded-circle border-0" id="sidebarToggle"></button>
      </div>
    </ul>
  );
}

export default Sidebar;
