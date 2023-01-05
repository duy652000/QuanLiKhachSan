import React, { useContext, useState } from "react";
import axios from "axios";
import { useEffect } from "react";
import moment from "moment";
import PulseLoader from "react-spinners/PulseLoader";
import { useMemo } from "react";
import { memo } from "react";
import { useCallback } from "react";
import { AppContext } from "../../Context/AppContext";

function PayRoomForm({ dataRoom }) {
  const token = JSON.parse(localStorage.getItem("token"));
  const [loadingData, setLoadingData] = useState(false);
  const [service, setService] = useState([]);

  const data = dataRoom;

  const idData = useMemo(() => data.id, [data]);
  const totalDate = (data?.day_out - data?.day_in) / 86400;

  //get all service in bill
  const getAllService = useCallback(
    async (id) => {
      let res = await axios.get(
        `http://localhost:8000/bill/billservice/id=${id}`,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setService(res?.data.service);
    },
    [token]
  );

  const { customerData, roomData, serviceData } = useContext(AppContext);

  const getDataRoom = roomData.filter(function (item) {
    if (item?.id === data?.room_id) {
      return item;
    }
  });
  const getCustomerData = customerData.filter(function (item) {
    if (item?.id === data?.client_id) {
      return item;
    }
  });
  const getServiceData = serviceData.filter(function (item) {
    if (item?.id === data?.service_id) {
      return item;
    }
  });

  const payBill = useCallback(
    async (id) => {
      let res = await axios.get(`http://localhost:8000/bill/pay/id=${id}`, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });
      window.location = "/room/clean";
      alert("Thanh toán thành công !");
    },
    [token]
  );

  function handlePay(e) {
    e.preventDefault();
    payBill(data?.id);
  }

  useEffect(() => {
    if (data?.room_id !== 0) {
      getAllService(data?.room_id);
    }
    setLoadingData(true);
    setTimeout(() => {
      setLoadingData(false);
      return;
    }, 5000);
  }, [data]);

  return (
    <div
      // {/* modal */}
      className="modal fade text-dark"
      id="OderRoomModal"
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
          {data.length === 0 ? (
            <PulseLoader
              className="justify-content-center hight-load load-spinner mt-4"
              color="#007bff"
              loading={loadingData}
              data-testid="loader"
              size={12}
              speedMultiplier={1}
            />
          ) : (
            // {/* header */}

            // {/* body */}

            // {/* <div className="card"> */}

            <div className="card-body">
              <div className="row mb-4 ">
                <div className="col-sm-6 text-dark d-flex align-items-start flex-column ">
                  <div>Mã KH : {data?.client_id}</div>
                  <div>
                    Khách Hàng : {getCustomerData[0]?.firtname}{" "}
                    {getCustomerData[0]?.lastname}
                  </div>
                  <div>
                    Nhận phòng :{" "}
                    {moment.unix(data?.day_in).format("DD-MM-YYYY")}
                  </div>
                  <div>
                    Trả phòng :{" "}
                    {moment.unix(data?.day_out).format("DD-MM-YYYY")}
                  </div>
                  <div>Điện thoại : {getCustomerData[0]?.phone}</div>
                </div>

                <div className="col-sm-6 text-dark d-flex align-items-end flex-column ">
                  <div>
                    <div>Mã hóa đơn : {data?.id}</div>
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
                        <td className="left">{getDataRoom[0]?.name_room}</td>
                        <td className="right">
                          {new Intl.NumberFormat("vi-VN", {
                            style: "currency",
                            currency: "VND",
                          }).format(getDataRoom[0]?.price ?? 0)}
                        </td>
                        <td className="center">{totalDate}</td>

                        <td className="right">
                          {new Intl.NumberFormat("vi-VN", {
                            style: "currency",
                            currency: "VND",
                          }).format(data?.total_room_rate ?? 0)}
                        </td>
                      </tr>
                      {service?.length > 0 &&
                        service.map((item) => (
                          <tr key={item?.id}>
                            <td className="left">Dịch vụ</td>

                            <td className="left">{item?.name}</td>

                            <td className="right">
                              {new Intl.NumberFormat("vi-VN", {
                                style: "currency",
                                currency: "VND",
                              }).format(item?.price ?? 0)}
                            </td>

                            <td className="center">{item?.amount}</td>

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
                          }).format(data.total_room_rate ?? 0)}
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
                          }).format(data.total_service_fee ?? 0)}
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
                          }).format(data.total_money ?? 0)}
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
            // {/* </div> */}

            // {/* body */}

            // {/* footer */}
          )}

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
              onClick={handlePay}
              className="btn btn-primary"
            >
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

export default memo(PayRoomForm);
