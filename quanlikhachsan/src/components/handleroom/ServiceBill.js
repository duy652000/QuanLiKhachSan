import moment from "moment";
import React, { useCallback, useState } from "react";
import { useContext } from "react";
import { memo } from "react";
import { AppContext } from "../../Context/AppContext";

function ServiceBill({ dataServiceRoom }) {
  const data = dataServiceRoom;
  const { customerData, roomData, serviceData } = useContext(AppContext);

  const getCustomerData = customerData.filter(function (item) {
    if (item?.id === data?.client_id) {
      return item;
    }
  });

  return (
    <div
      // {/* modal */}
      className="modal fade text-dark"
      id="ServiceBillModal"
      tabIndex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-lg">
        <div className="modal-content">
          {/* header */}
          <div className="modal-header">
            <strong>Thông Tin Dịch Vụ</strong>
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
                  <span className="font-weight-bold">Mã KH :</span>{" "}
                  {data?.client_id}
                </div>
                <div>
                  <span className="font-weight-bold">Khách Hàng :</span>{" "}
                  {getCustomerData[0]?.firtname} {getCustomerData[0]?.lastname}
                </div>
                <div>
                  <span className="font-weight-bold"> Nhận phòng :</span>{" "}
                  {moment.unix(data?.day_in).format("DD-MM-YYYY")}
                </div>
                <div>
                  <span className="font-weight-bold">Trả phòng :</span>{" "}
                  {moment.unix(data?.day_out).format("DD-MM-YYYY")}
                </div>
                <div>
                  <span className="font-weight-bold">Điện thoại : </span>{" "}
                  {getCustomerData[0]?.phone}
                </div>
              </div>

              <div className="col-sm-6 text-dark d-flex align-items-end flex-column ">
                <div>
                  <div>
                    <span className="font-weight-bold">Mã hóa đơn : </span>
                    {data?.id}
                  </div>
                </div>
              </div>
            </div>
            <div className="line-page mb-3"></div>
            <strong>Thông Tin Thêm Dịch Vụ</strong>
            <div className="line-page mt-3 mb-5"></div>



            <div className="row d-flex justify-content-around">


              <div className="col-sm-4  d-flex align-item-end">
                <label className="col-sm-4 " htmlFor="inputLastname">
                  Tên dv
                </label>
                <select id="nameService" className="form-control col-sm-8">
                  {" "}
                  Tên khách hàng :<option>Dịch Vụ</option>
                </select>
              </div>


              <div className="row col-sm-4 d-flex">

              <label className="col-sm-4 align-content-center" htmlFor="inputLastname">
                  Giá dv
                </label>
                <input
                  disabled={true}
                  type="text"
                  className="form-control bg-white col-sm-6"
                  id="giadv"
                  placeholder="Điền giá dịch vụ ..."
                />
              </div>


              <div className="row col-sm-3 d-flex">

              <label className="col-sm-7 align-content-center" htmlFor="inputLastname">
                  Số lượng
                </label>
                <input
                 
                  type="number"
                  min={1}
                  className="form-control bg-white col-sm-4"
                  id="sldv"
                  placeholder="Điền giá số lượng...."
                />
              </div>
            </div>

            <div className="row mt-5 ">
              <div className="table-responsive">
                <table className="table table-striped">
                  <thead>
                    <tr>
                      <th>Tên</th>

                      <th className="right">Giá</th>
                      <th className="center">Số Lượng</th>
                      <th className="right">Tổng Giá</th>
                    </tr>
                  </thead>

                  <tbody>
                    <tr>
                      <td className="left"></td>
                      <td className="right"></td>
                      <td className="center"></td>
                      <td className="right">{data?.total_room_rate}</td>
                    </tr>
                    {/* {data.length > 0 &&
                      data.map((service) => (
                        <tr key={getServiceData[0]?.id}>
                          <td className="left">Dịch vụ</td>
                          <td className="left">
                            {getServiceData[0]?.name_service}
                          </td>
                          <td className="right">{getServiceData[0]?.price}</td>
                          <td className="center">{}</td>
                          <td className="right">{data?.total_service_fee}</td>
                        </tr>
                      ))} */}
                  </tbody>
                </table>
              </div>
            </div>
            <br />

            <div className="line-page mb-3"></div>
            <strong>Thông Tin Tổng</strong>
            <div className="line-page mt-3 mb-4"></div>

            <div className="row mt-4">
              <div className="col-lg-4 col-sm-5"></div>

              <div className="col-lg-5 col-sm- ml-auto">
                <table className="table table-clear">
                  <tbody>
                    <tr>
                      <td className="left">
                        <strong>Tổng phí phòng : </strong>
                      </td>
                      <td className="right">
                        {/* {details[0].total_room_rate==""?data.total_room_rate:details[0].total_room_rate} */}
                      </td>
                    </tr>
                    <tr>
                      <td className="left">
                        <strong>Tổng phí dịch vụ :</strong>
                      </td>
                      <td className="right">{data.total_service_fee}</td>
                    </tr>
                    <tr>
                      <td className="left">
                        <strong>Tổng hóa đơn :</strong>
                      </td>
                      <td className="right">
                        {/* {details[0].total_money==""?data.total_money:details[0].total_money} */}
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
          {/* )} */}

          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-secondary"
              data-dismiss="modal"
            >
              Đóng
            </button>
            <button
              type="button"
              className="btn btn-primary "
              //   onClick={handleChangeRoom}
            >
              Đổi Phòng
            </button>
          </div>
          {/* footer */}
        </div>
      </div>
    </div>

    // {/* modal */}
  );
}

export default memo(ServiceBill);
