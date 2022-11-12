import React from "react";
import { Route, Routes } from "react-router-dom";
import AddUser from "../components/users/AddUser";
import ShowUser from "../components/users/ShowUser";
import UpdateUser from "../components/users/UpdateUser";

function Account() {

  return (
    // <!-- Begin Page Content -->
    <div className="container-fluid">
      {/* 
        <!-- Page Heading --> */}
      <h1 className="h3 mb-2 text-gray-800">Account</h1>
      <p className="mb-4"></p>


      <form>
  {/* <!-- Email input --> */}
  <div class="form-outline mb-4">
    <input type="email" id="form2Example1" className="form-control" />
    <label className="form-label" htmlFor="form2Example1">Email address</label>
  </div>

  {/* <!-- Password input --> */}
  <div class="form-outline mb-4">
    <input type="password" id="form2Example2" class="form-control" />
    <label class="form-label" htmlFor="form2Example2">Password</label>
  </div>

  {/* <!-- 2 column grid layout for inline styling --> */}
  <div class="row mb-4">
    <div class="col d-flex justify-content-center">
      {/* <!-- Checkbox --> */}
   
    </div>

    <div class="col">
      {/* <!-- Simple link --> */}

    </div>
  </div>

  {/* <!-- Submit button --> */}
  <button type="button" class="btn btn-primary btn-block mb-4">Sign in</button>

</form>
  
      {/* <Routes>
        <Route path="" element={<ShowUser />} />
        <Route path="add" element={<AddUser />} />
        <Route path="update" element={<UpdateUser /> } />
      </Routes> */}


    </div>
    // <!-- /.container-fluid -->
  );
}

export default Account;
