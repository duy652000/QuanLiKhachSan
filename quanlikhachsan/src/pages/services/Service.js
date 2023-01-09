import axios from "axios";
import React, { useState } from "react";
import { useMemo } from "react";
import { useCallback } from "react";
import { Link, Route, Routes } from "react-router-dom";
import AddService from "../../components/service/AddService";
import ShowService from "../../components/service/ShowService";
import UpdateService from "../../components/service/UpdateService";


function Service() {
  
  const token = useMemo(() => JSON.parse(localStorage.getItem("token")), []);
  const[dataInputSearch,setDataInputSearch] = useState("")
  //data state
  const [dataSearch,setDataSearch] = useState([])
  const [stateTrue,setStateTrue] = useState(false)

   //dữ liệu tìm kiếm
   const search = useCallback(async (data) => {
      let res = await axios.get(
        `http://localhost:8000/service/search?key=${data}`,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );
      res = await res.data.data
      setDataSearch(res);
      setStateTrue(true)
  }, [ token]);

  //xử lý hàm tìm kiếm nhân viên
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

        <h1 className="h3 mb-2 text-gray-800">Dịch Vụ</h1>

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
                //set data input vào state
                setDataInputSearch(data);
              }}
              
              value ={dataInputSearch==""?"":dataInputSearch}
            />
            <div className="input-group-append">
            {/* <Link type="button" >
                          <i className="bi bi-pencil hover-text black hover-text"></i>
                        </Link> */}
              <Link className="btn btn-primary" type="button" onClick={handleSearch}> 
                <i className="fas fa-search fa-sm"></i>
              </Link>
            </div>
          </div>
        </form>
        </div>

      </div>

      <p className="mb-4"></p>

      {/* <!-- DataTales Example --> */}
      {/* <ShowUser/> */}

      <Routes>
        <Route path="" element={<ShowService dataServiceSearch={[dataSearch,stateTrue]}/>} />
        <Route path="add" element={<AddService />} />
        <Route path="update/:id" element={<UpdateService />} />
      </Routes>
    </div>
    // <!-- /.container-fluid -->
  );
}

export default Service;
