import React from "react";
import { Route, Routes } from "react-router-dom";
import AddBill from "../components/bill/AddBill";
import UpdateBill from "../components/bill/UpdateBill";
import ShowBill from "../components/bill/ShowBill";

function Bill() {
    return (
        // <!-- Begin Page Content -->
        <div className="container-fluid">
          {/* 
            <!-- Page Heading --> */}
          <h1 className="h3 mb-2 text-gray-800">Bills</h1>
          <p className="mb-4"></p>
    
          {/* <!-- DataTales Example --> */}
         
         
    
          <Routes>
            <Route path="*" element={<ShowBill />} />
            <Route path="add/*" element={<AddBill />} />
            <Route path="update/:id/*" element={<UpdateBill/> } />
          </Routes>
    
        </div>
        // <!-- /.container-fluid -->
      );
}

export default Bill