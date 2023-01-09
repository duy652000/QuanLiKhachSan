import axios from "axios";
import React from "react";
import { useState } from "react";
import { useCallback } from "react";
import { Link, Route, Routes } from "react-router-dom";
import AddRoom from "../components/roomManager/AddRoom";
import ShowRoom from "../components/roomManager/ShowRoom";
import UpdateRoom from "../components/roomManager/UpdateRoom";

function RoomManager() {
  //lấy dữ liệu token
  const token = JSON.parse(localStorage.getItem("token"));
  // lấy dữ liệu từ form
  const [dataInputSearch, setDataInputSearch] = useState("");
  //lẫy dữ liệu search từ db xuống
  const [dataSearch, setDataSearch] = useState([]);
  const [stateTrue, setStateTrue] = useState(false);

  //hàm lấy dữ liệu search
  const search = useCallback(
    async (data) => {
      let res = await axios.get(
        `http://localhost:8000/room/search?key=${data}`,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );
      res = await res.data.data;
      setDataSearch(res);
      setStateTrue(true);
    },
    [token]
  );

  //xử lý search
  const handleSearch = (e) => {
    e.preventDefault();
    search(dataInputSearch);
  };

  return (
    // <!-- Begin Page Content -->
    <div className="container-fluid">
      {/* 
               <!-- Page Heading --> */}
      <div className="d-flex justify-content-between ">
        <h1 className="h3 mb-2 text-gray-800">Phòng</h1>

        {/* <!-- Topbar Search --> */}
        <div>
          <form className="d-none d-sm-inline-block form-inline mr-auto ml-md-3 my-2 my-md-0 mw-100 navbar-search ">
            <div className="input-group">
              <input
                type="text"
                className="form-control border-0 small"
                placeholder="Tìm kiếm ......"
                aria-label="Search"
                aria-describedby="basic-addon2"
                onChange={(e) => {
                  const data = e.target.value;
                  setDataInputSearch(data);
                }}
                value={dataInputSearch == "" ? "" : dataInputSearch}
              />
              <div className="input-group-append">
                <Link
                  className="btn btn-primary"
                  type="button"
                  onClick={handleSearch}
                >
                  <i className="fas fa-search fa-sm"></i>
                </Link>
              </div>
            </div>
          </form>
        </div>
      </div>
      <p className="mb-4"></p>

      {/* <ShowUser/> */}

      <Routes>
        <Route
          path=""
          element={<ShowRoom dataRoomSearch={[dataSearch, stateTrue]} />}
        />
        <Route path="add" element={<AddRoom />} />
        <Route path="update/:id" element={<UpdateRoom />} />
      </Routes>
    </div>
    // <!-- /.container-fluid -->
  );
}

export default RoomManager;
