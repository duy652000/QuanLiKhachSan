import React from 'react'

function UpdateCustomer() {
    return (
        <div className="card shadow mb-4">
          <div className="card-header py-3  d-flex justify-content-between">
            <h6 className="mt-2 font-weight-bold text-primary">Update Thông Tin Khách Hàng</h6>
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
              <label Htmlfor="exampleInputEmail1">Tên</label>
              <input
                type="text "
                className="form-control"
                id="fistName"
                placeholder="Fist name"
              />
            </div>

            <div className="form-group">
              <label Htmlfor="exampleInputEmail1">Họ</label>
              <input
                type="text "
                className="form-control"
                id="lastName"
                placeholder="Last name "
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
                id="numberTelephone"
                placeholder="Number telephone"
              />
            </div>
            <div className="form-group">
              <label Htmlfor="birthday">Birthday</label>
              <input
                type="date"
                className="form-control"
                id="birthday"
                placeholder="Birthday"
              />
              <br/>
              <div className="form-group">
                <label Htmlfor="exampleInputEmail1">CCCD</label>
                <input
                  type="text "
                  className="form-control"
                  id="CCCD"
                  placeholder="Căn cước công dân "
                />
              </div>
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

export default UpdateCustomer