import React from 'react'

function AddCustomer() {
    return (
        <div className="card shadow mb-4">
          <div className="card-header py-3  d-flex justify-content-between">
            <h6 className="mt-2 font-weight-bold text-primary">Thêm Thông Tin Khách Hàng</h6>
            <div className="">
              <a type="button" href="/customer" className="btn btn-primary fw-bold">
              <i class="bi bi-arrow-return-right"></i> Back
              </a>
            </div>
          </div>
    
          
    
          <div className="card-body">
            <div className="table-responsive">
              <form className="ml-1">
                <div className="form-group">
                  <label Htmlfor="exampleInputEmail1">Tên đăng nhập</label>
                  <input
                    type="text "
                    className="form-control"
                    id="exampleInputEmail1"
                    placeholder="name "
                  />
                </div>
                <div className="form-group">
                  <label Htmlfor="exampleInputEmail1">Email</label>
                  <input
                    type="email"
                    className="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    placeholder="Enter email"
                  />
                </div>
                <div className="form-group">
                  <label Htmlfor="telephone number">Số điện thoại</label>
                  <input
                    type="text"
                    className="form-control"
                    id=""
                    placeholder="number telephone"
                  />
                </div>
                <div className="form-group">
                  <label Htmlfor="exampleInputPassword1">Password</label>
                  <input
                    type="password"
                    className="form-control"
                    id="exampleInputPassword1"
                    placeholder="Password"
                  />
                </div>
                <div className="form-group">
                  <label Htmlfor="Status">Trạng thái</label>
                  <br />
                  <select type="select " className="form-control">
                    <option>Ẩn</option>
                    <option>Kích hoạt</option>
                  </select>
                </div>
    
                <label Htmlfor="Status">Vai trò</label>
    
                <div className="form-group form-check ml-1">
                  <input
                    type="checkbox"
                    className="form-check-input"
                    id="exampleCheck1"
                  />
                  <label className="form-check-label" Htmlfor="exampleCheck1">
                    admin
                  </label>
                </div>
    
                <div className="form-group form-check ml-1">
                  <input
                    type="checkbox"
                    className="form-check-input"
                    id="exampleCheck1"
                  />
                  <label className="form-check-label" Htmlfor="exampleCheck1">
                    user
                  </label>
                </div>
    
                <div className="form-group form-check ml-1">
                  <input
                    type="checkbox"
                    className="form-check-input"
                    id="exampleCheck1"
                  />
                  <label className="form-check-label" Htmlfor="exampleCheck1">
                    manager
                  </label>
                </div>
    
                <button type="submit" className="btn btn-primary">
                  Lưu
                </button>
              </form>
            </div>
          </div>
        </div>
      );
}

export default AddCustomer