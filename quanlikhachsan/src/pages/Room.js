import React, { memo, useContext } from "react";
import { Link, Routes, Route , useLocation } from "react-router-dom";
import Nav from "react-bootstrap/Nav";
import Free from "../components/rooms/Free";
import Booked from "../components/rooms/Booked";
import Clean from "../components/rooms/Clean";
import All from "../components/rooms/All";
import StatusRoom from "../components/rooms/StatusRoom";
import DayCheckIn from "../components/rooms/DayCheckIn";
import { AppContext } from "../Context/AppContext";

function Room() {
  const { dataAllRoom } = useContext(AppContext);

  
  const countAllRoom = dataAllRoom.filter(function(count){
    if (count.status !==0 ) {
      return true;
    } else {
      return false;
    }
  }).length; 
  const countFreeRoom = dataAllRoom.filter(function(count){
    if (count.status === 1) {
      return true;
    } else {
      return false;
    }
  }).length; 
  const countBookedRoom = dataAllRoom.filter(function(count){
    if (count.status === 2) {
      return true;
    } else {
      return false;
    }
  }).length; 
  const countCleanRoom = dataAllRoom.filter(function(count){
    if (count.status === 3) {
      return true;
    } else {
      return false;
    }
  }).length; 

let url =useLocation()
// const UrlHover = () => {
//   if (url.pathname=="/room") {
//     return "hover-url";
//   } else if (url.pathname=="/free") {
//     return "hover-url";
//   } else if (url.pathname=="/booked") {
//     return "hover-url";
//   } else if (url.pathname=="/clean") {
//   return "hover-url";
//   }
// };
 
  return (
    // <!-- Begin Page Content -->
    <div className="container-fluid">
      {/* <!-- Page Heading --> */}
      <div className="card shadow mb-4">
        <div className="card-header py-3 d-flex justify-content-between">
          <h6 className="mt-2 font-weight-bold text-primary  ">
            Quản Lý Phòng{" "}
          </h6>

          <div className="">
            <Link
              type="button"
              to="/customer/add"
              className="btn btn-primary fw-bold"
            >
              + Thêm Khách Hàng
            </Link>
          </div>
        </div>

        <div className="card-body">
          <div className="table-responsive">
            <div className="sort-rooms d-flex justify-content-center my-2">
              {/* form search  */}
              <form action="/action_page.php">
                <div className="d-flex justify-content-between">
                  <div className="">
                    <label className="mr-3  ">Từ ngày : </label>
                    <input
                      className="status-room "
                      type="date"
                      id="start"
                      name="trip-start"
                      // value="2018-07-22"
                      min="2018-01-01"
                      max="2018-12-31"
                    />
                  </div>
                  <div className="ml-5">
                    <label className="mr-3 ">Đến ngày : </label>
                    <input
                      className="status-room "
                      type="date"
                      id="start"
                      name="trip-start"
                      // value="2018-07-22"
                      min="2018-01-01"
                      max="2018-12-31"
                    />
                  </div>

                  <input
                    className="submit-sort-room btn btn-primary pb-1 mb-2"
                    type="submit"
                    value="Submit"
                  />
                </div>
                <br></br>

                <div className="d-flex justify-content-start"></div>
              </form>
            </div>
            <hr />
            <DayCheckIn />
            <hr />
            <StatusRoom />
          </div>
        </div>
      </div>

      <div className="card shadow mb-4">
        <div className="card-header py-3">
          <Nav className="me-auto navbar_warapper btn-rooms">
            
            <Link className="btn-change-room nav-item nav-link " to="">
            <span className={(url.pathname==="/room")?"hover-url font-weight-bold":""}>All</span> <span className="circle-red "> {countAllRoom??0}</span>
            </Link>
            <Link className="btn-change-room nav-item nav-link hover-url" to="free">
            <span className={(url.pathname==="/room/free")?"hover-url font-weight-bold":""}>Trống</span>  <span className="circle-red  ">{countFreeRoom??0}</span>
            </Link>
            <Link className="btn-change-room nav-item nav-link " to="booked">
              <span className={(url.pathname==="/room/booked")?"hover-url font-weight-bold":""}>Đã đặt</span> <span className="circle-red">{countBookedRoom??0}</span>
            </Link>
            <Link className="btn-change-room nav-item nav-link " to="clean">
            <span className={(url.pathname==="/room/clean")?"hover-url font-weight-bold":""}> Dọn dẹp </span> <span className="circle-red">{countCleanRoom??0}</span>
            </Link>
          </Nav>
        </div>

        {/* content */}
        <Routes>
          <Route path="" element={<All />} />
          <Route path="free" element={<Free />} />
          <Route path="booked" element={<Booked />} />
          <Route path="clean" element={<Clean />} />
        </Routes>
        {/* content */}
      </div>
    </div>
    // <!-- /.container-fluid -->
  );
}

export default memo(Room);
