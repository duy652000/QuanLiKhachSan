import moment from "moment";
import React from "react";
import { memo } from "react";
import { useContext } from "react";
import { AppContext } from "../../Context/AppContext";

function ProfileBill({ idDataRoom }) {
  const data = idDataRoom;
  const { customerData } = useContext(AppContext);
  const getCustomerData = customerData.filter(function (item) {
    if (item?.id === data?.client_id) {
      return item;
    }
  });
  console.log("getCustomerData",idDataRoom)

  return (
    <div
      // {/* modal */}
      className="modal fade text-dark"
      id="ProFileRoomModal"
      tabIndex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog ">
        <div className="modal-content">
          {/* header */}
          <div className="modal-header">
            <strong>Thông Tin Khách Hàng</strong>
            <button
              type="button"
              className="btn btn-secondary"
              data-dismiss="modal"
            >
              Đóng
            </button>
          </div>

          <div className="card-body">
            <div className=" text-dark  ">
              <div className=" d-flex justify-content-around">
                <span className="col-sm font-weight-bold">Mã khách hàng :</span>
                <span className="col-sm">{data?.client_id}</span>
              </div>

              <div className=" d-flex justify-content-around ">
                <span className="col-sm font-weight-bold">
                  {" "}
                  Tên khách Hàng:
                </span>
                <span className="col-sm">
                  {getCustomerData[0]?.firtname} {getCustomerData[0]?.lastname}
                </span>
              </div>

              <div className=" d-flex justify-content-around ">
                <span className="col-sm font-weight-bold"> Điện thoại :</span>
                <span className="col-sm">{getCustomerData[0]?.phone}</span>
              </div>

              <div className=" d-flex justify-content-around ">
                <span className="col-sm font-weight-bold"> CCCD :</span>
                <span className="col-sm">{getCustomerData[0]?.CCCD}</span>
              </div>
              <div className="line-page mt-2 mb-2"></div>
              <div className=" d-flex justify-content-around ">
                <span className="col-sm font-weight-bold">
                  {" "}
                  Ngày nhận phòng :
                </span>
                <span className="col-sm">
                  {moment.unix(data?.day_in).format("DD-MM-YYYY")}
                </span>
              </div>

              <div className=" d-flex justify-content-around ">
                <span className="col-sm font-weight-bold">
                  {" "}
                  Ngày trả phòng :
                </span>
                <span className="col-sm">
                  {moment.unix(data?.day_out).format("DD-MM-YYYY")}
                </span>
              </div>
            </div>

            <div className="line-page mt-2 mb-2"></div>


            <div className=" text-dark  ">
              <div className=" d-flex justify-content-around">
                <span className="col-sm font-weight-bold">Tổng giá phòng :</span>
                <span className="col-sm">
                {new Intl.NumberFormat("vi-VN", {
                            style: "currency",
                            currency: "VND",
                          }).format(data?.total_room_rate?? 0)}
                </span>
              </div>

              <div className=" d-flex justify-content-around ">
                <span className="col-sm font-weight-bold">
                  {" "}
                  Tổng giá dịch vụ:
                </span>
                <span className="col-sm">
                {new Intl.NumberFormat("vi-VN", {
                            style: "currency",
                            currency: "VND",
                          }).format(data?.total_service_fee ?? 0)}
               
                </span>
              </div>

              <div className=" d-flex justify-content-around ">
                <span className="col-sm font-weight-bold">
                  {" "}
                  Tổng tiền :
                </span>
                <span className="col-sm">
                {new Intl.NumberFormat("vi-VN", {
                            style: "currency",
                            currency: "VND",
                          }).format(data?.total_money ?? 0)}
               
                </span>
              </div>
            </div>



          </div>

          <div className="modal-footer"></div>
          {/* footer */}
        </div>
      </div>
    </div>

    // {/* modal */}
  );
}

export default memo(ProfileBill);
