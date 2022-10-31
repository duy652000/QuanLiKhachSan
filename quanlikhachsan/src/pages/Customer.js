import React from 'react'
import {Route,Routes} from "react-router-dom"
import AddCustomer from '../components/customer/AddCustomer';
import ShowCustomer from '../components/customer/ShowCustomer';
import UpdateCustomer from '../components/customer/UpdateCustomer';


function Customer() {
  return (
    // <!-- Begin Page Content -->
    <div className="container-fluid">
      {/* 
        <!-- Page Heading --> */}
      <h1 className="h3 mb-2 text-gray-800">Khách Hàng</h1>
      <p className="mb-4"></p>

      {/* <!-- DataTales Example --> */}
      {/* <ShowUser/> */}
     

      <Routes>
        <Route path="" element={<ShowCustomer/>} />
        <Route path="add" element={<AddCustomer/>} />
        <Route path="update" element={<UpdateCustomer/> } />
      </Routes>

    </div>
    // <!-- /.container-fluid -->
  );
}

export default Customer