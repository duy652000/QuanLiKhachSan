import React from 'react'
import { Route, Routes } from 'react-router-dom';
import AddRoom from '../components/roomManager/AddRoom';
import ShowRoom from '../components/roomManager/ShowRoom';
import UpdateRoom from '../components/roomManager/UpdateRoom';

function RoomManager() {
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
                  />
                  <div className="input-group-append">
                    <button className="btn btn-primary" type="button">
                      <i className="fas fa-search fa-sm"></i>
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
          <p className="mb-4"></p>
    
          {/* <ShowUser/> */}
    
          <Routes>
            <Route path="" element={<ShowRoom />} />
            <Route path="add" element={<AddRoom />} />
            <Route path="update/:id" element={<UpdateRoom />} />
          </Routes>
        </div>
        // <!-- /.container-fluid -->
      );
}

export default RoomManager