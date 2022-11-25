import React, { memo } from "react";
import { Link, Routes, Route } from "react-router-dom";
import Nav from "react-bootstrap/Nav";
import Free from "../components/rooms/Free";
import Booked from "../components/rooms/Booked";
import Clean from "../components/rooms/Clean";
import All from "../components/rooms/All";

function Room() {
 

  return (
    // <!-- Begin Page Content -->
    <div className="container-fluid">
      {/* <!-- Page Heading --> */}

      {/* <!-- DataTales Example --> */}
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
              <form action="/action_page.php">
                <div className="d-flex justify-content-between">
                  <div className="mr-5">
                    <label className="mr-3 font-weight-bold ">
                      Từ ngày{" "}
                    </label>
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
                    <label className="mr-3 font-weight-bold" >
                      Đến ngày{" "}
                    </label>
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
                    <label
                      className="mr-3 font-weight-bold"
                      
                    >
                      Trạng thái
                    </label>
                    <select className="select status-room shadow">
                      <option value="1">One</option>
                      <option value="2">Two</option>
                      <option value="3">Three</option>
                      <option value="4">Four</option>
                      <option value="5">Five</option>
                      <option value="6">Six</option>
                      <option value="7">Seven</option>
                      <option value="8">Eight</option>
                    </select>
                  </div>
                </div>
              </form>
            </div>
            <hr />
            <div>
              <p className="">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-gear-fill"
                  viewBox="0 0 16 16"
                >
                  <path d="M9.405 1.05c-.413-1.4-2.397-1.4-2.81 0l-.1.34a1.464 1.464 0 0 1-2.105.872l-.31-.17c-1.283-.698-2.686.705-1.987 1.987l.169.311c.446.82.023 1.841-.872 2.105l-.34.1c-1.4.413-1.4 2.397 0 2.81l.34.1a1.464 1.464 0 0 1 .872 2.105l-.17.31c-.698 1.283.705 2.686 1.987 1.987l.311-.169a1.464 1.464 0 0 1 2.105.872l.1.34c.413 1.4 2.397 1.4 2.81 0l.1-.34a1.464 1.464 0 0 1 2.105-.872l.31.17c1.283.698 2.686-.705 1.987-1.987l-.169-.311a1.464 1.464 0 0 1 .872-2.105l.34-.1c1.4-.413 1.4-2.397 0-2.81l-.34-.1a1.464 1.464 0 0 1-.872-2.105l.17-.31c.698-1.283-.705-2.686-1.987-1.987l-.311.169a1.464 1.464 0 0 1-2.105-.872l-.1-.34zM8 10.93a2.929 2.929 0 1 1 0-5.86 2.929 2.929 0 0 1 0 5.858z" />
                </svg>
                &nbsp;<span> Số ngày báo trước check in :</span>{" "}
                <span className=""> 5 </span>
              </p>
              <p className="">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-gear-fill"
                  viewBox="0 0 16 16"
                >
                  <path d="M9.405 1.05c-.413-1.4-2.397-1.4-2.81 0l-.1.34a1.464 1.464 0 0 1-2.105.872l-.31-.17c-1.283-.698-2.686.705-1.987 1.987l.169.311c.446.82.023 1.841-.872 2.105l-.34.1c-1.4.413-1.4 2.397 0 2.81l.34.1a1.464 1.464 0 0 1 .872 2.105l-.17.31c-.698 1.283.705 2.686 1.987 1.987l.311-.169a1.464 1.464 0 0 1 2.105.872l.1.34c.413 1.4 2.397 1.4 2.81 0l.1-.34a1.464 1.464 0 0 1 2.105-.872l.31.17c1.283.698 2.686-.705 1.987-1.987l-.169-.311a1.464 1.464 0 0 1 .872-2.105l.34-.1c1.4-.413 1.4-2.397 0-2.81l-.34-.1a1.464 1.464 0 0 1-.872-2.105l.17-.31c.698-1.283-.705-2.686-1.987-1.987l-.311.169a1.464 1.464 0 0 1-2.105-.872l-.1-.34zM8 10.93a2.929 2.929 0 1 1 0-5.86 2.929 2.929 0 0 1 0 5.858z" />
                </svg>
                &nbsp; <span> Số ngày báo trước check in :</span>
                <span className=""> 5 </span>
              </p>
            </div>
            <hr />
            <div className="d-flex justify-content-around">
              <div>
                <button type="button" className="btn btn-primary">
                  
                </button>
                <span> : Trống</span>
              </div>
              <div>
                <button type="button" className="btn btn-warning">
                  
                </button>
                <span> : Đã đặt</span>
              </div>
              <div>
                <button type="button" className="btn btn-danger">
                  
                </button>
                <span> : Cần dọn dẹp</span>
              </div>
             
            </div>
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
          <Route path="" element={<All/>} />
          <Route path="free" element={<Free data />} />
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
