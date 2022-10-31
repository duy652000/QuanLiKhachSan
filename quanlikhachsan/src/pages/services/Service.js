import React from "react";
import {Route,Routes} from "react-router-dom"
import AddService from "../../components/service/AddService";
import ShowService from "../../components/service/ShowService";
import UpdateService from "../../components/service/UpdateService";
function Service() {

  
  return (
    // <!-- Begin Page Content -->
    <div className="container-fluid">
      {/* 
        <!-- Page Heading --> */}
      <h1 className="h3 mb-2 text-gray-800">Dịch Vụ</h1>
      <p className="mb-4"></p>

      {/* <!-- DataTales Example --> */}
      {/* <ShowUser/> */}
     

      <Routes>
        <Route path="" element={<ShowService />} />
        <Route path="add" element={<AddService />} />
        <Route path="update" element={<UpdateService /> } />
      </Routes>

    </div>
    // <!-- /.container-fluid -->
  );
}

export default Service;
