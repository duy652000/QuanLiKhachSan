import moment from 'moment';
import React from 'react'
import Moment from 'react-moment';

function DetailsBill({dataDetailsBill}) {

  const dataBill = dataDetailsBill[0]?.id>0?dataDetailsBill[0]:[];
  const day_in = dataDetailsBill[1]>0?dataDetailsBill[1]:"";
  const day_out = dataDetailsBill[2]>0?dataDetailsBill[2]:"";


 
    return (
        <div
          // {/* modal */}
          className="modal fade text-dark"
          id="detailsbill"
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
             
             
    
                <div className="card-body">
                  <div className="row mb-4 ">
                    <div className="col-sm-6 text-dark d-flex align-items-start flex-column ">
                     
                      <div>
                      <span className='font-weight-bold'>Khách Hàng : </span> <span>{" "}
                        {dataBill?.firtname}{" "}
                        {dataBill?.lastname}</span>
                      </div>
                      <div>
                      <span className='font-weight-bold'>Nhận phòng :</span>{" "}
                        {moment.unix(day_in).format("DD-MM-YYYY")}

                        
                     
                      </div>
                      <div>
                      <span className='font-weight-bold'>Trả phòng :</span>{" "}
                        {moment.unix(day_out).format("DD-MM-YYYY")}
                        
                      
                      </div>
                      <div><span className='font-weight-bold'>Điện thoại : </span>{dataBill?.phone}</div>
                      <div><span className='font-weight-bold'>CCCD :  </span>{dataBill?.CCCD}</div>
                      


                    </div>
    
                    <div className="col-sm-6 text-dark d-flex align-items-end flex-column ">
                      <div>
                      <div><span className='font-weight-bold'>Mã hóa đơn :</span> {" "}
                         {dataBill?.id}
                         </div>
                      <div><span className='font-weight-bold'>Nhân Viên Lên Đơn : </span>{" "}
                         {dataBill?.name}
                         </div>
                         <div><span className='font-weight-bold'>Email :  </span>{dataBill?.email}</div>
                       
                         
                      </div>
                    </div>
                  </div>
                  <div className="row  ">
                    <div className="table-responsive">
                      <table className="table table-striped">
                        <thead>
                          <tr>
                            <th>Loại</th>
                            <th>Tên</th>
    
                            <th className="right">Giá</th>
                            <th className="center">Số Lượng</th>
                            <th className="right">Tổng Giá</th>
                          </tr>
                        </thead>
    
                        <tbody>
                          <tr>
                            <td className="left strong">Phòng</td>
                            <td className="left">
                            {dataBill?.name_room}
                            </td>
                            <td className="right">
                              {new Intl.NumberFormat("vi-VN", {
                                style: "currency",
                                currency: "VND",
                              }).format(dataBill?.price_room ?? 0)}
                            </td>
                            <td className="center">
                            {dataBill?.amount}
                            </td>
    
                            <td className="right">
                              {new Intl.NumberFormat("vi-VN", {
                                style: "currency",
                                currency: "VND",
                              }).format(dataBill?.price_room*dataBill?.amount ?? 0)}
                            </td>
                          </tr>
                          {dataBill?.service?.length > 0 &&
                            dataBill?.service.map((item) => ( 
                             <tr key={item?.id}>

                                
                             

                                <td className="left">Dịch vụ</td>
    
                                <td className="left">
                               {item?.name} 
                              
                                </td>
    
                                <td className="right">
                                  {new Intl.NumberFormat("vi-VN", {
                                    style: "currency",
                                    currency: "VND",
                                  }).format(item?.price ?? 0)}
                                </td>
    
                                <td className="center">
                                {item?.amount} 
                                </td>
    
                                <td className="right">
                                  {new Intl.NumberFormat("vi-VN", {
                                    style: "currency",
                                    currency: "VND",
                                  }).format(item?.price * item?.amount ?? 0)}
                                </td>
                              </tr>
                             ))} 
                        </tbody>
                      </table>
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
                            <td className="right">
                              {new Intl.NumberFormat("vi-VN", {
                                style: "currency",
                                currency: "VND",
                              }).format(dataBill?.total_room_rate ?? 0)}
                            </td>
                          </tr>
                          <tr>
                            <td className="left">
                              <strong>Tổng phí dịch vụ :</strong>
                            </td>
                            <td className="right">
                              {new Intl.NumberFormat("vi-VN", {
                                style: "currency",
                                currency: "VND",
                              }).format(dataBill?.total_service_fee ?? 0)}
                            </td>
                          </tr>
                          <tr>
                            <td className="left">
                              <strong>Tổng hóa đơn :</strong>
                            </td>
                            <td className="right">
                              {new Intl.NumberFormat("vi-VN", {
                                style: "currency",
                                currency: "VND",
                              }).format(dataBill?.total_money ?? 0)}
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
                 {/* </div> */}
    
               {/* body */}
    
                 {/* footer */}
             
    
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-dismiss="modal"
                >
                  Đóng
                </button>
              
              </div>
              {/* footer */}
            </div>
          </div>
        </div>
    
        // {/* modal */}
      );
}

export default DetailsBill