import moment from "moment";
import axios from "axios";

import React, { useCallback, useState, useMemo } from "react";
import { useContext } from "react";
import { memo } from "react";
import { AppContext } from "../../Context/AppContext";
import { useEffect } from "react";

function ServiceBill({ dataServiceRoom }) {
  const token = useMemo(() => JSON.parse(localStorage.getItem("token")), []);

  const data = dataServiceRoom?.id > 0 ? dataServiceRoom : {};

  const { customerData, serviceData } = useContext(AppContext);

  const getCustomerData = customerData.filter(function (item) {
    if (item?.id === data?.client_id) {
      return item;
    }
  });

  const [details, setDetails] = useState({
    bill: "",
    service: "",
    amount: 1,
  });
  const [newDataService, setNewDataService] = useState([]);
  const [amountService, setAmountService] = useState(0);
  const [all, setAll] = useState([]);
  const [total, setTotal] = useState([]);
  const [error, setError] = useState("");
  const [id, setId] = useState("");
  const [idBill, setIdBill] = useState("");

  console.log("id bill", idBill);

  useEffect(() => {
    if (data?.room_id > 0) {
      setIdBill(data?.id);
      getAllService(data?.room_id);
      setId(data?.room_id);
    }
  }, [data]);

  const getDataNewService = useCallback(
    (newName) => {
      const dataNew = serviceData.filter(function (item) {
        if (item?.name === newName) {
          return item;
        }
      });
      setNewDataService(dataNew);

      setDetails({
        bill: data?.id,
        service: dataNew[0]?.id,
        amount: details?.amount,
      });
    },
    [data]
  );
  const handleAddService = (e) => {
    e.preventDefault();
    addService(details, id);
  };

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

      if (id !== 0) {
        setId(id);
      }
      setAll(res.data.service);
      setTotal(res.data.bill);
    },
    [token]
  );

  //get api by id
  const addService = useCallback(
    async (details, id) => {
      try {
        let res = await axios.post(
          `http://localhost:8000/bill/addservice`,
          details,
          {
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${token}`,
            },
          }
        );
        if (id > 0) {
          getAllService(id);
        }
        alert("Thêm thành công dịch vụ !");
      } catch (error) {
        setError(JSON.parse(error.response.data).bill[0]);
      }
    },
    [token]
  );

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
              <div className="col-sm d-flex align-item-end">
                <label className="col-sm-4 " htmlFor="inputLastname">
                  Tên dịch vụ :
                </label>
                <select
                  id="nameService"
                  className="form-control col-sm-7"
                  onChange={(e) => {
                    const selectIdService = e.target.value;
                    getDataNewService(selectIdService);
                  }}
                  defaultValue={"DEFAULT"}
                >
                  <option value="DEFAULT" disabled>
                    Dịch Vụ
                  </option>
                  {serviceData.map((item) => (
                    <option key={item?.id}>{item?.name}</option>
                  ))}
                </select>
              </div>

              <div className="row col-sm-4 d-flex">
                <label
                  className="col-sm-6 align-content-center"
                  htmlFor="inputLastname"
                >
                  Giá dịch vụ :
                </label>

                <p className="col-sm-6">
                  {new Intl.NumberFormat("vi-VN", {
                    style: "currency",
                    currency: "VND",
                  }).format(newDataService[0]?.price ?? 0)}
                </p>
              </div>

              <div className="row col-sm-3 d-flex">
                <label
                  className="col-sm-7 align-content-center"
                  htmlFor="inputLastname"
                >
                  Số lượng
                </label>
                <input
                  type="number"
                  min={1}
                  className="form-control bg-white col-sm-4"
                  id="sldv"
                  onChange={(e) => {
                    setAmountService(e.target.value);
                    setDetails({
                      ...details,
                      amount: e.target.value,
                    });
                  }}
                  defaultValue={details?.amount}
                />
              </div>
            </div>

            <div className="row d-flex justify-content-between mt-4 mr-4 ">
              <p className="text-danger d-flex col-sm align-content-start ml-5">
                {error}
              </p>
              <button
                type="button"
                className="btn btn-primary  "
                onClick={handleAddService}
              >
                Thêm dịch vụ
              </button>
            </div>

            <div className="row mt-5 ">
              <div className="table-responsive">
                <table className="table table-striped">
                  <thead>
                    <tr>
                      <th className="center">Tên Dịch Vụ</th>

                      {/* <th className="right">Giá</th> */}
                      <th className="center">Số Lượng</th>

                      <th className="center">Giá</th>
                      <th className="center"></th>
                    </tr>
                  </thead>

                  <tbody>
                    {all?.length > 0 &&
                      all.map((item) => (
                        <tr key={item?.id}>
                          <td className="center">{item?.name}</td>
                          <td className="center">{item?.amount}</td>
                          <td className="center">{item?.price}</td>
                          <td className="center">
                            {" "}
                            <div className="d-flex black">
                              {/* ẩn */}
                              <a
                                type="button"
                                onClick={async function deleteService() {
                                  try {
                                    let res = await axios.post(
                                      `http://localhost:8000/bill/deletesevice?bill=${idBill}&service=${item?.id}`,
                                      "",
                                      {
                                        headers: {
                                          "Content-Type": "application/json",
                                          Authorization: `Bearer ${token}`,
                                        },
                                      }
                                    );
                                    res = await res;
                                    if (id > 0) {
                                      console.log("yes");
                                      getAllService(id);
                                    }
                                    alert("Xóa dịch vụ thành công !");
                                  } catch (error) {
                                    alert("Xóa dịch vụ không thành công !");
                                  }
                                }}
                              >
                                <i className="bi bi-trash3 hover-text black hover-text"></i>
                              </a>
                            </div>
                          </td>
                        </tr>
                      ))}
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
                        {new Intl.NumberFormat("vi-VN", {
                          style: "currency",
                          currency: "VND",
                        }).format(total?.total_room_rate ?? 0)}
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
                        }).format(data?.total_service_fee ?? 0)}
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
                          total?.total_room_rate + data?.total_service_fee ?? 0
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
            {/* <button
              type="button"
              className="btn btn-primary "
              //   onClick={handleChangeRoom}
            >
              Cập Nhật Dịch Vụ
            </button> */}
          </div>
          {/* footer */}
        </div>
      </div>
    </div>

    // {/* modal */}
  );
}

export default memo(ServiceBill);
