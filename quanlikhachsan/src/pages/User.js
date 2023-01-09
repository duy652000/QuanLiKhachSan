import axios from "axios";
import React, { useCallback, useState } from "react";
import { Link, Route, Routes } from "react-router-dom";
import AddUser from "../components/users/AddUser";
import ShowUser from "../components/users/ShowUser";
import UpdateUser from "../components/users/UpdateUser";

function Account() {

//dữ liệu từ token
  const token = JSON.parse(localStorage.getItem("token"));
  //dữ liệu từ form input search
  const[dataInputSearch,setDataInputSearch] = useState("")
  //dữ liệu search được từ db trả về
  const [dataSearch,setDataSearch] = useState([])
  
  const [stateTrue,setStateTrue] = useState(false)

   //dữ liệu từ api search trả về
   const search = useCallback(async (data) => {
      let res = await axios.get(
        `http://localhost:8000/search?key=${data}`,
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

  // xử lý search
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

<h1 className="h3 mb-2 text-gray-800">Tài khoản</h1>

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
     
     

      <Routes>
        <Route path="*" element={<ShowUser dataUserSearch={[dataSearch,stateTrue]}/>} />
        <Route path="add/*" element={<AddUser />} />
        <Route path="update/:id/*" element={<UpdateUser/> } />
      </Routes>

    </div>
    // <!-- /.container-fluid -->
  );
}

export default Account;
