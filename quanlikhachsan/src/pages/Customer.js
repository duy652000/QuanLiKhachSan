import axios from "axios";
import React, { useCallback, useState } from "react";
import { Link, Route, Routes } from "react-router-dom";
import AddCustomer from "../components/customer/AddCustomer";
import ShowCustomer from "../components/customer/ShowCustomer";
import UpdateCustomer from "../components/customer/UpdateCustomer";

function Customer() {
  //lấy dữn liệu token
  const token = JSON.parse(localStorage.getItem("token"));
  //data search của input
  const[dataInputSearch,setDataInputSearch] = useState("")
  // data search api
  const [dataSearch,setDataSearch] = useState([])
  const [stateTrue,setStateTrue] = useState(false)

   //gọi api tìm kiếm
   const search = useCallback(async (data) => {
      let res = await axios.get(
        `http://localhost:8000/client/search?key=${data}`,
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
  }, [token]);

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
        <h1 className="h3 mb-2 text-gray-800">Khách hàng</h1>

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
                value ={dataInputSearch==""?"":dataInputSearch}
              />
              <div className="input-group-append">
              <Link className="btn btn-primary" type="button" onClick={handleSearch}> 
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
        <Route path="" element={<ShowCustomer dataCustomerSearch={[dataSearch,stateTrue]}/>} />
        <Route path="add" element={<AddCustomer />} />
        <Route path="update/:id" element={<UpdateCustomer />} />
      </Routes>
    </div>
    // <!-- /.container-fluid -->
  );
}

export default Customer;
