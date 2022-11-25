import React, { memo } from "react";
import { Link, Routes, Route } from "react-router-dom";
import Nav from "react-bootstrap/Nav";
import Free from "../components/rooms/Free";
import Booked from "../components/rooms/Booked";
import Clean from "../components/rooms/Clean";
import All from "../components/rooms/All";
import StatusRoom from "../components/rooms/StatusRoom";
import DayCheckIn from "../components/rooms/DayCheckIn";

function Room() {
  const dataall = "all";
  const datafree = "free";
  const databooked = "booked";
  const dataclean = "clean";

  
// get all room data 


// get free room data 


// get booked room data 


// get clean room data 






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
            <button type="button" className="btn btn-primary fw-bold">
              + Thêm Khách Hàng
            </button>
          </div>
        </div>

        <div className="card-body">
          <div className="table-responsive">
            <div className="sort-rooms d-flex justify-content-center my-2">
              {/* form search  */}
              <form action="/action_page.php">
                <div className="d-flex justify-content-between">
                  <div className="mr-5">
                    <label className="mr-3 font-weight-bold ">Từ ngày </label>
                    <input
                      className="status-room shadow"
                      type="date"
                      id="start"
                      name="trip-start"
                      // value="2018-07-22"
                      min="2018-01-01"
                      max="2018-12-31"
                    />
                  </div>
                  <div className="ml-5">
                    <label className="mr-3 font-weight-bold">Đến ngày </label>
                    <input
                      className="status-room shadow"
                      type="date"
                      id="start"
                      name="trip-start"
                      // value="2018-07-22"
                      min="2018-01-01"
                      max="2018-12-31"
                    />
                  </div>
                </div>
                <br></br>

                <div className="d-flex justify-content-between">
                  <input
                    className="submit-sort-room btn btn-primary"
                    type="submit"
                    value="Submit"
                  />
                  <div>
                    <label className="mr-3 font-weight-bold">Trạng thái</label>
                    <select className="select status-room shadow">
                      <option value="1">One</option>
                      <option value="2">Two</option>
                    </select>
                  </div>
                </div>
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
            <Link className="btn-change-room" to="">
              All <span className="circle-red"> 5</span>
            </Link>
            <Link className="btn-change-room" to="free">
              Trống <span className="circle-red">6</span>
            </Link>
            <Link className="btn-change-room" to="booked">
              Đã đặt <span className="circle-red">12</span>
            </Link>
            <Link className="btn-change-room" to="clean">
              Dọn dẹp <span className="circle-red"> 2</span>
            </Link>
          </Nav>
        </div>

        {/* content */}
        <Routes>
          <Route path="" element={<All dataAll={dataall} />} />
          <Route path="free" element={<Free dataFree={datafree} />} />
          <Route path="booked" element={<Booked dataBooked={databooked}/>} />
          <Route path="clean" element={<Clean dataClean={dataclean} />} />
        </Routes>
        {/* content */}
      </div>
    </div>
    // <!-- /.container-fluid -->
  );
}

export default memo(Room);
