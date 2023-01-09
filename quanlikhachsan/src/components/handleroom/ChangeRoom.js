import axios from "axios";
import moment from "moment";
import React, { useCallback, useMemo, useState } from "react";
import { useContext } from "react";
import { memo } from "react";
import { AppContext } from "../../Context/AppContext";

function ChangeRoom({ dataRoomChange }) {
  //lấy dữ liệu token
  const token = useMemo(() => JSON.parse(localStorage.getItem("token")), []);

  const data = dataRoomChange;

  const { customerData, roomData } = useContext(AppContext);
  const [newDataRoom, setNewDataRoom] = useState([]);
  const [details, setDetails] = useState({
    bill: "",
    room: "",
    total_room_rate: "",
    total_money: "",
  });

  const totalDate =
    moment.unix(data?.day_out).format("DD") -
      moment.unix(data?.day_in).format("DD") >
    0
      ? moment.unix(data?.day_out).format("DD") -
        moment.unix(data?.day_in).format("DD")
      : 1;

      //filter dữ liệu từ dữ liệu tổng
  const getDataRoom = roomData.filter(function (item) {
    if (item?.id === data?.room_id) {
      return item;
    }
  });

    //filter dữ liệu từ dữ liệu tổng
  const getDataNewRoom = useCallback(
    (newName) => {
      const dataNew = roomData.filter(function (item) {
        if (item?.name_room === newName) {
          return item;
        }
      });
      setNewDataRoom(dataNew);

      setDetails({
        bill: data?.id,
        room: dataNew[0]?.id,
        total_room_rate: totalDate * dataNew[0]?.price,
        total_money: data?.total_service_fee + totalDate * dataNew[0]?.price,
      });
    },
    [data]
  );
  //filter dữ liệu từ dữ liệu tổng
  const getCustomerData = customerData.filter(function (item) {
    if (item?.id === data?.client_id) {
      return item;
    }
  });
  //filter dữ liệu từ dữ liệu tổng
  const roomDataFree = roomData.filter(function (item) {
    if (item?.status === 1 && item?.price == getDataRoom[0]?.price) {
      return item;
    }
  });

  const handleChangeRoom = (e) => {
    e.preventDefault();
    changeRoomBill(details);
  };

  //hàm thay đổi phòng của bill
  const changeRoomBill = useCallback(
    async (details) => {
      let res = await axios.post(
        `http://localhost:8000/bill/changeroom`,
        details,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );

      res = await res.data.data;
      window.location.reload("/room/checkin");
      alert("Đổi phòng thành công !");
    },
    [token]
  );

  //

  ////////////////////

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
                  <span className="font-weight-bold">Điện thoại : </span>
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
            <strong>Thông Tin Đổi Phòng</strong>
            <div className="line-page mt-3 mb-4"></div>

            <div className="row mb-4 d-flex mt-2">
              <div className="col-sm-5 text-dark d-flex align-items-center flex-column ">
                <div>
                  <div>
                    <span className="font-weight-bold">Tên Phòng : </span>{" "}
                    {getDataRoom[0]?.name_room}
                  </div>
                  <div>
                    <span className="font-weight-bold ">Mã Phòng : </span>{" "}
                    {getDataRoom[0]?.id}{" "}
                  </div>
                  <div>
                    <span className="font-weight-bold">Giá Phòng : </span>
                    {new Intl.NumberFormat("vi-VN", {
                      style: "currency",
                      currency: "VND",
                    }).format(getDataRoom[0]?.price)}
                  </div>
                  <div>
                    <span className="font-weight-bold">Loại Phòng : </span>{" "}
                    {getDataRoom[0]?.typ_room}{" "}
                  </div>
                  <div>
                    <span className="font-weight-bold">Sức chứa : </span>{" "}
                    {getDataRoom[0]?.capacity}
                  </div>
                </div>
              </div>

              <div className="col-sm-1 text-dark d-flex align-items-center flex-column ">
                <div>
                  <br />
                  <br />

                  <div>
                    <i className="bi bi-arrow-right"></i>
                  </div>
                  <div></div>
                </div>
              </div>

              <div className="col-sm-5 text-dark d-flex align-items-center flex-column ">
                <div>
                  <div className="d-flex">
                    <div className="font-weight-bold">Tên Phòng :</div>
                    <div className="col-sm d-flex justify-content-around">
                      <select
                        id="room"
                        className=" col-sm-12 border border-dark rounded "
                        onChange={(e) => {
                          const selectIdCustomer = e.target.value;
                          getDataNewRoom(selectIdCustomer);
                        }}
                        defaultValue={"DEFAULT"}
                      >
                        <option value="DEFAULT" disabled>
                          Tên phòng
                        </option>
                        {roomDataFree.map((item) => (
                          <option key={item?.id}>{item?.name_room}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div>
                    <span className="font-weight-bold">Mã Phòng :</span>{" "}
                    {newDataRoom[0]?.id}
                  </div>
                  <div>
                    <span className="font-weight-bold">Giá Phòng : </span>
                    {new Intl.NumberFormat("vi-VN", {
                      style: "currency",
                      currency: "VND",
                    }).format(newDataRoom[0]?.price ?? 0)}
                  </div>
                  <div>
                    <span className="font-weight-bold">Loại Phòng : </span>
                    {newDataRoom[0]?.typ_room}
                  </div>
                  <div>
                    <span className="font-weight-bold">Sức chứa : </span>
                    {newDataRoom[0]?.capacity}
                  </div>
                </div>
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
                        {new Intl.NumberFormat("vi-VN", {
                          style: "currency",
                          currency: "VND",
                        }).format(
                          (details.total_room_rate == ""
                            ? data.total_room_rate
                            : details.total_room_rate) ?? 0
                        )}
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
                        }).format(
                          (details.total_money == ""
                            ? data.total_money
                            : details.total_money) ?? 0
                        )}
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
              onClick={handleChangeRoom}
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

export default memo(ChangeRoom);
