import React from 'react'
import { Link, useNavigate } from "react-router-dom";


function UpdateBill() {
  return (
   
        <div className="card shadow mb-4">
          <div className="card-header py-3  d-flex justify-content-between">
            <h6 className="mt-2 font-weight-bold text-primary">Add Account</h6>
            <div className="">
              <Link type="button" to="/user" className="btn btn-primary fw-bold">
                <i className="bi bi-arrow-return-right"></i> Back
              </Link>
            </div>
          </div>
     
          <div className="card-body">
            <div className="table-responsive">
            <div class="container py-5">
         <div class="row">
             <div class="col-md-10 mx-auto">
                 <form>
                     <div class="form-group row">
                         <div class="col-sm-6">
                             <label for="inputFirstname">First name</label>
                             <input type="text" class="form-control" id="inputFirstname" placeholder="First name"/>
                         </div>
                         <div class="col-sm-6">
                             <label for="inputLastname">Last name</label>
                             <input type="text" class="form-control" id="inputLastname" placeholder="Last name"/>
                         </div>
                     </div>
                     <div class="form-group row">
                         <div class="col-sm-6">
                             <label for="inputAddressLine1">Address</label>
                             <input type="text" class="form-control" id="inputAddressLine1" placeholder="Street Address"/>
                         </div>
                         <div class="col-sm-6">
                             <label for="inputAddressLine2">Address (Line 2)</label>
                             <input type="text" class="form-control" id="inputAddressLine2" placeholder="Line 2"/>
                         </div>
                     </div>
                     <div class="form-group row">
                         <div class="col-sm-6">
                             <label for="inputCity">City</label>
                             <input type="text" class="form-control" id="inputCity" placeholder="City"/>
                         </div>
                         <div class="col-sm-3">
                             <label for="inputState">State</label>
                             <input type="text" class="form-control" id="inputState" placeholder="State"/>
                         </div>
                         <div class="col-sm-3">
                             <label for="inputPostalCode">Postal Code</label>
                             <input type="text" class="form-control" id="inputPostalCode" placeholder="Postal Code"/>
                         </div>
                     </div>
                     <div class="form-group row">
                         <div class="col-sm-6">
                             <label for="inputContactNumber">Contact Number</label>
                             <input type="number" class="form-control" id="inputContactNumber" placeholder="Contact Number"/>
                         </div>
                         <div class="col-sm-6">
                             <label for="inputWebsite">Website</label>
                             <input type="text" class="form-control" id="inputWebsite" placeholder="Website"/>
                         </div>
                     </div>
                     <button type="button" class="btn btn-primary px-4 float-right">Save</button>
                 </form>
             </div>
         </div>
     </div>
            </div>
          </div>
        </div>
      );
     }

export default UpdateBill