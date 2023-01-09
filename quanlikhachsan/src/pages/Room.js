import React, { memo, useContext } from "react";
import { Link, Routes, Route, useLocation } from "react-router-dom";
import Nav from "react-bootstrap/Nav";
import Free from "../components/rooms/Free";
import Booked from "../components/rooms/Booked";
import Clean from "../components/rooms/Clean";

import StatusRoom from "../components/rooms/StatusRoom";
import DayCheckIn from "../components/rooms/DayCheckIn";
import { AppContext } from "../Context/AppContext";
import CheckIn from "../components/rooms/CheckIn";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import { useCallback } from "react";
import { useMemo } from "react";
import { faL } from "@fortawesome/free-solid-svg-icons";
import All from "../components/rooms/All";

function Room() {
  let dataNow = new Date().toLocaleDateString();

  let url = useLocation();
  const { dataAllRoom, dataCheckInRoom, dataCleanRoom, role } =
    useContext(AppContext);
  const accountRole = role;
  const [itemFree, setItemFree] = useState([]);
  const [itemBooked, setItemBooked] = useState([]);
  const [itemClean, setItemClean] = useState([]);
  const [itemCheckIn, setItemCheckIn] = useState([]);
  const [error, setError] = useState([]);
  const [isNullCheckIn, setIsNullCheckIn] = useState(false);
  const [isNullClean, setIsNullClean] = useState(false);
  const [dayIn, setDayIn] = useState("");
  const [dayOut, setDayOut] = useState("");



  const getStatusRoom = useCallback((url) => {
    if (url.pathname === "/room/free") {
      setDetailDay({ status_room: 1, status_bill: 1 });
    } else if (url.pathname === "/room/booked") {
      setDetailDay({ status_room: 4, status_bill: 1 });
    } else if (url.pathname === "/room/checkin") {
      setDetailDay({ status_room: 2, status_bill: 1 });
    } else if (url.pathname === "/room/clean") {
      setDetailDay({ status_room: 3, status_bill: 1 });
    }
  }, []);

  const token = useMemo(() => JSON.parse(localStorage.getItem("token")), []);

  useEffect(() => {
    if (url.pathname === "/room/booked") {
      setItemFree([]);
      
     
    }
    getStatusRoom(url);
    setDetailDay((details) => ({ from: "", to: "", ...details }));
  }, [url]);

  const [detailDay, setDetailDay] = useState({
    from: "",
    to: "",
    status_room: "",
    status_bill: "",
  });

  //call api
  const filterDate = useCallback(async () => {
    try {
      let res = await axios.get(
        `http://localhost:8000/room/filter?from=${detailDay.from}&to=${detailDay.to}&status_room=${detailDay.status_room}&status_bill=${detailDay.status_bill}`,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );
      res = await res.data.Rom;
      setDayIn(detailDay.from)
      setDayOut(detailDay.to)

      if (url.pathname === "/room/free") {
        setItemFree(res);
      

      } else if (url.pathname === "/room/booked") {
        setItemBooked(res);
        
       
      } else if (url.pathname === "/room/checkin") {
        setIsNullCheckIn(res ? false : true);
        setItemCheckIn(res);
       
      } else if (url.pathname === "/room/clean") {
        setIsNullClean(res ? false : true);
        setItemClean(res);
      }
      setError("");
    } catch (error) {
      setError(JSON.parse(error.response.data));
    }
  }, [detailDay, token]);
  const countAllRoom = dataAllRoom.length;
  const countCheckInRoom = dataCheckInRoom.length;
  const countCleanRoom = dataCleanRoom.length;

  const countFreeRoom = itemFree.filter(function (item) {
    if (item[0]?.id) {
      return true;
    } else return false;
  }).length;

  const countBookedRoom = itemBooked.filter(function (item) {
    if (item[0]?.id) {
      return true;
    } else return false;
  }).length;

  // const countFreeRoom = itemFree.flat().length
  // const countBookedRoom = itemBooked.flat().length

 

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
            {(url.pathname === "/room/free" ||
              url.pathname === "/room/booked" 
              // ||
              // url.pathname === "/room/checkin" ||
              // url.pathname === "/room/clean"
              ) && (
              <div className="  my-2 mr-5 ml-5">
                {/* form search  */}
                {/* <form onSubmit={handleFilterDate}> */}
                <div className="row m-auto">
                  <div className="col-sm d-flex justify-content-end">
                    <div>
                      <label className="mr-3 font-weight-bold">Từ ngày :</label>
                      <input
                        className="status-room border border-dark rounded"
                        type="date"
                        id="start"
                        min={dataNow}
                        name="trip-start"
                        onChange={(e) => {
                          setDetailDay({
                            ...detailDay,
                            from: e.target.value,
                          });
                        }}
                        value={detailDay?.from}
                      />
                    </div>
                  </div>

                  <div className="col-sm d-flex justify-content-end">
                    <div>
                      <label className="mr-3 font-weight-bold">
                        Đến ngày :
                      </label>
                      <input
                        className="status-room border border-dark rounded"
                        min={dataNow}
                        type="date"
                        id="start"
                        name="trip-start"
                        onChange={(e) => {
                          setDetailDay({
                            ...detailDay,
                            to: e.target.value,
                          });
                        }}
                        value={detailDay?.to}
                      />
                    </div>
                  </div>

                  <div className="col-sm d-flex justify-content-center">
                    <button
                      className=" btn btn-primary"
                      // type="button"
                      onClick={filterDate}
                      // value="Submit"
                    >
                      Tìm Kiếm
                    </button>
                  </div>
                </div>
                <div className="row m-auto">
                  <div className="col-sm d-flex justify-content-end">
                    <div>
                      <p className="mr-1 text-danger">{error?.from}</p>
                    </div>
                  </div>

                  <div className="col-sm d-flex justify-content-end ">
                    <div>
                      <p className="mr-1 text-danger">{error?.to}</p>
                    </div>
                  </div>
                  <div className="col-sm d-flex justify-content-end"></div>
                </div>

                <br></br>
                {/* </form> */}
              </div>
            )}
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
            {accountRole === 3 ? (
              <>
                <Link
                  className="btn-change-room nav-item nav-link hover-url"
                  to="/room"
                >
                  <span
                    className={
                      url.pathname === "/room"
                        ? "hover-url font-weight-bold"
                        : ""
                    }
                  >
                    Tất cả
                  </span>{" "}
                  <span className="circle-red ">{countAllRoom ?? 0}</span>
                </Link>

                <Link className="btn-change-room nav-item nav-link " to="clean">
                  <span
                    className={
                      url.pathname === "/room/clean"
                        ? "hover-url font-weight-bold"
                        : ""
                    }
                  >
                    {" "}
                    Dọn dẹp{" "}
                  </span>{" "}
                  <span className="circle-red">{countCleanRoom ?? 0}</span>
                </Link>
              </>
            ) : (
              <>
                <Link
                  className="btn-change-room nav-item nav-link hover-url"
                  to="/room"
                >
                  <span
                    className={
                      url.pathname === "/room"
                        ? "hover-url font-weight-bold"
                        : ""
                    }
                  >
                    Tất cả
                  </span>{" "}
                  <span className="circle-red ">{countAllRoom ?? 0}</span>
                </Link>

                <Link
                  className="btn-change-room nav-item nav-link hover-url"
                  to="free"
                >
                  <span
                    className={
                      url.pathname === "/room/free"
                        ? "hover-url font-weight-bold"
                        : ""
                    }
                  >
                    Trống
                  </span>{" "}
                  <span className="circle-red  ">{countFreeRoom ?? 0}</span>
                </Link>

                <Link
                  className="btn-change-room nav-item nav-link "
                  to="booked"
                >
                  <span
                    className={
                      url.pathname === "/room/booked"
                        ? "hover-url font-weight-bold"
                        : ""
                    }
                  >
                    Đã đặt
                  </span>{" "}
                  <span className="circle-red">{countBookedRoom ?? 0}</span>
                </Link>

                <Link
                  className="btn-change-room nav-item nav-link "
                  to="checkin"
                >
                  <span
                    className={
                      url.pathname === "/room/checkin"
                        ? "hover-url font-weight-bold"
                        : ""
                    }
                  >
                    {" "}
                    Đang ở{" "}
                  </span>{" "}
                  <span className="circle-red">{countCheckInRoom ?? 0}</span>
                </Link>
                <Link className="btn-change-room nav-item nav-link " to="clean">
                  <span
                    className={
                      url.pathname === "/room/clean"
                        ? "hover-url font-weight-bold"
                        : ""
                    }
                  >
                    {" "}
                    Dọn dẹp{" "}
                  </span>{" "}
                  <span className="circle-red">{countCleanRoom ?? 0}</span>
                </Link>
              </>
            )}
          </Nav>
        </div>

        {/* content */}
        <Routes>
          <Route path="*" element={<All />} />

          <Route path="free" element={<Free dataSortFree={[itemFree ,dayIn,dayOut]} />} />
          <Route
            path="booked"
            element={<Booked dataSortBooked={itemBooked} />}
          />
          <Route
            path="checkin"
            element={<CheckIn dataSortCheckIn={[itemCheckIn, isNullCheckIn]} />}
          />

          <Route
            path="clean"
            element={<Clean dataSortClean={[itemClean, isNullClean]} />}
          />
        </Routes>
        {/* content */}
      </div>
    </div>
    // <!-- /.container-fluid -->
  );
}

export default memo(Room);
