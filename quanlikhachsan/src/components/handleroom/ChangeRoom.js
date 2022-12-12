import React from 'react'

function ChangeRoom() {
 
    return (
        <div
          // {/* modal */}
          className="modal fade text-dark"
          id="ChangeRoomModal"
          tabIndex="-1"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-lg">
            <div className="modal-content">
              {/* header */}
              <div className="modal-header">
                <strong>Thông Tin Hóa Đơn</strong>
                <button
                  type="button"
                  className="close"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              {/* {!data ? (
              
                <PulseLoader
              className="justify-content-center hight-load load-spinner mt-4"
              color="#007bff"
              loading={loadingData}
              data-testid="loader"
              size={12}
              speedMultiplier={1}
            />
          ):( */}
    
              {/* header */}
    
              {/* body */}
    
             {/* <div className="card"> */}
    
              <div className="card-body">
                <div className="row mb-4 ">
                  <div className="col-sm-6 text-dark d-flex align-items-start flex-column ">
                    <div>Mã KH : </div>
                    <div>
                      Khách Hàng : 
                    </div>
                    <div>
                      Nhận phòng :
                    </div>
                    <div>
                      Trả phòng : 
                    </div>
                    <div>Điện thoại :</div>
                  </div>
    
                  <div className="col-sm-6 text-dark d-flex align-items-end flex-column ">
                    <div>
                      <div>Mã hóa đơn : </div>
                    </div>
                  </div>
                </div>
               
    
                <div className="row">
                  <div className="col-lg-4 col-sm-5"></div>
    
                  <div className="col-lg-5 col-sm- ml-auto">
                    <table className="table table-clear">
                      <tbody>
                        <tr>
                          <td className="left">
                            <strong>Tổng phí phòng : </strong>
                          </td>
                          <td className="right"></td>
                        </tr>
                        <tr>
                          <td className="left">
                            <strong>Tổng phí dịch vụ :</strong>
                          </td>
                          <td className="right"></td>
                        </tr>
                        <tr>
                          <td className="left">
                            <strong>Tổng hóa đơn :</strong>
                          </td>
                          <td className="right"></td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
               {/* </div> */}
    
               {/* body */}
    
               {/* footer */}
          {/* )} */}
    
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-dismiss="modal"
                >
                  Đóng
                </button>
                <button type="button"  className="btn btn-primary">
                  Thanh Toán
                </button>
              </div>
              {/* footer */}
            </div>
          </div>
        </div>
    
        // {/* modal */}
      );
  
}

export default ChangeRoom