import React from "react";
import { Route, Routes } from "react-router-dom";
import ShowUser from "../components/users/ShowUser";
import UpdateUser from "../components/users/UpdateUser";

function Custom() {

  return (
    // <!-- Begin Page Content -->
    <div className="container-fluid">
      {/* 
        <!-- Page Heading --> */}
      <h1 className="h3 mb-2 text-gray-800">Account</h1>
      <p className="mb-4"></p>

      {/* <!-- DataTales Example --> */}
      {/* <ShowUser/> */}
     

      <Routes>
        <Route path="" element={<ShowUser />} />
        <Route path="update" element={<UpdateUser /> } />
      </Routes>

    </div>
    // <!-- /.container-fluid -->
  );
}

export default Custom;
