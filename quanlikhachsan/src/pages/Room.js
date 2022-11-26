import React, { memo } from "react";
import { Link, Routes, Route } from "react-router-dom";
import Nav from "react-bootstrap/Nav";
import Free from "../components/rooms/Free";
import Booked from "../components/rooms/Booked";
import Clean from "../components/rooms/Clean";
import All from "../components/rooms/All";
import StatusRoom from "../components/rooms/StatusRoom";
import DayCheckIn from "../components/rooms/DayCheckIn";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";

function Room() {
  const [dataAllRoom, setDataAllRoom] = useState([]);
  const [dataFreeRoom, setDataFreeRoom] = useState([]);
  const [dataBookedRoom, setDataBookedRoom] = useState([]);
  const [dataCleanRoom, setDataCleanRoom] = useState([]);

  const [dataCountAllRoom, setDataCountAllRoom] = useState([]);
  const [dataCountFreeRoom, setDataCountFreeRoom] = useState([]);
  const [dataCountBookedRoom, setDataCountBookedRoom] = useState([]);
  const [dataCountCleanRoom, setDataCountCleanRoom] = useState([]);

  const history = useNavigate();
  const token = JSON.parse(localStorage.getItem("token"));

  // get all room data
  ///////////get infor
  const getDataAllRoom = async () => {
    try {
      //await here
      let res = await axios.get("http://localhost:8000/room/getlist", {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });
      let count = await res.data.total;
      setDataCountAllRoom(count);
      res = await res.data.data;
      setDataAllRoom(res);
    } catch (error) {
      localStorage.clear("token");
      history("/login");
      alert("Hết phiên đăng nhập");
    }
  };
  ///////////////

  // get free room data
  const getDataFreeRoom = async () => {
    try {
      //await here
      let res = await axios.get(
        "http://localhost:8000/room/filter?status_room=1",
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );
      let count = await res.data.client.length;
      setDataCountFreeRoom(count);

      res = await res.data.client;

      setDataFreeRoom(res);
    } catch (error) {}
  };

  // get booked room data
  const getDataBookedRoom = async () => {
    try {
      //await here
      let res = await axios.get(
        "http://localhost:8000/room/filter?status_room=2",
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );
      let count = await res.data.client.length;
      setDataCountBookedRoom(count);
      res = await res.data.client;

      setDataBookedRoom(res);
    } catch (error) {}
  };

  // get clean room data
  const getDataCleanRoom = async () => {
    try {
      //await here
      let res = await axios.get(
        "http://localhost:8000/room/filter?status_room=3",
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );
      let count = await res.data.client.length;

      setDataCountCleanRoom(count);
      res = await res.data.client;

      setDataCleanRoom(res);
    } catch (error) {
      
    }
  };

  ///////////

  useEffect(() => {
    getDataAllRoom();
    getDataFreeRoom();
    getDataBookedRoom();
    getDataCleanRoom();
  }, [token]);

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
            <Link type="button" to="/customer/add" className="btn btn-primary fw-bold">
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

                <div className="d-flex justify-content-start">
                  
                 
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
              All <span className="circle-red"> {dataCountAllRoom}</span>
            </Link>
            <Link className="btn-change-room" to="free">
              Trống <span className="circle-red">{dataCountFreeRoom}</span>
            </Link>
            <Link className="btn-change-room" to="booked">
              Đã đặt <span className="circle-red">{dataCountBookedRoom}</span>
            </Link>
            <Link className="btn-change-room" to="clean">
              Dọn dẹp <span className="circle-red">{dataCountCleanRoom}</span>
            </Link>
          </Nav>
        </div>

        {/* content */}
        <Routes>
          <Route path="" element={<All dataAll={dataAllRoom} />} />
          <Route path="free" element={<Free dataFree={dataFreeRoom} />} />
          <Route
            path="booked"
            element={<Booked dataBooked={dataBookedRoom} />}
          />
          <Route path="clean" element={<Clean dataClean={dataCleanRoom} />} />
        </Routes>
        {/* content */}
      </div>
    </div>
    // <!-- /.container-fluid -->
  );
}

export default memo(Room);
