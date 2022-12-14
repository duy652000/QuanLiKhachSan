import React, { useContext, useEffect, useState } from "react";
import { AppContext } from "../../Context/AppContext";
import {  useNavigate } from "react-router-dom";
import axios from "axios";
import moment from "moment";
import $ from "jquery";


function OderRoomForm({ dataItem }) {

  const history = useNavigate();

//lấy dữ liệu từ app context
  const { customerData, serviceData } = useContext(AppContext);

  //filter dữ liệu customer có status = 1 từ dữ liệu tổng
  const dataCustomer = customerData.filter(function (item) {
    if (item?.status === 1) {
      return item;
    }
  });

    //filter dữ liệu service có status = 1 từ dữ liệu tổng
  const dataService = serviceData.filter(function (item) {
    if (item?.status === 1) {
      return item;
    }
  });


  useEffect(()=>{
    setDayCome(dataItem[3]);
    setDayGo(dataItem[4])
  },[dataItem[3],dataItem[4]])


  const [idCustomer, setIdCustomer] = useState();
  const [dayCome, setDayCome] = useState(dataItem[3]);
  const [dayGo, setDayGo] = useState(dataItem[4]);
  const [amountService, setAmountService] = useState(0);
  const [priceService, setPriceService] = useState(0);
  const [idService, setIdService] = useState("");
  const [errorClientId, setErrorClientId] = useState("");
  const [errorDayIn, setErrorDayIn] = useState("");
  const [errorDayOut, setErrorDayOut] = useState("");
  const [total, setTotal] = useState({
    total_service_fee: "",
    total_room_rate: "",
    total_money: "",
  });




  const token = JSON.parse(localStorage.getItem("token"));
  const handleSumService = (e) => {
    e.preventDefault();
    setTotal({
      total_room_rate:
        dataItem[2] *
        ((Date.parse(moment(dayGo)) - Date.parse(moment(dayCome))) / 86400000 >
        0
          ? (Date.parse(moment(dayGo)) - Date.parse(moment(dayCome))) / 86400000
          : 1),
      total_service_fee: priceService * amountService,
      total_money:
        priceService * amountService +
        dataItem[2] *
          ((Date.parse(moment(dayGo)) - Date.parse(moment(dayCome))) /
            86400000 >
          0
            ? (Date.parse(moment(dayGo)) - Date.parse(moment(dayCome))) /
              86400000
            : 1),
    });
    if (idService == "") {
      setDetails({
        client_id: idCustomer,
        room_id: dataItem[0],
        day_in: dayCome,
        day_out: dayGo,
        amount: amountService,
      });
    } else {
      setDetails({
        client_id: idCustomer,
        room_id: dataItem[0],
        day_in: dayCome,
        day_out: dayGo,
        service_id: idService,
        amount: amountService,
      });
    }
  };

  const [details, setDetails] = useState({
    client_id: "",
    room_id: "",
    day_in: "",
    day_out: "",
    service_id: "",
    amount: "",
  });

  const handleOderBill = (e) => {
    e.preventDefault();
    // console.log("Details",details)
    addBill(details);
  };

  //thêm bill
  async function addBill(detail) {
    try {
      let res = await axios.post("http://localhost:8000/bill/create", detail, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });
      res = await res;
      hideModal();
      history("/room/booked");
      alert("Đặt phòng thành công !");
    } catch (error) {
      setErrorDayIn(JSON.parse(error.response.data).day_in);
      setErrorClientId(JSON.parse(error.response.data).client_id);
      setErrorDayOut(JSON.parse(error.response.data).day_out);
    }
  }

  function hideModal() {
    $(".close").click();
  }

  return (
    <>
      {/* modal */}
      <div
        className="modal fade"
        id="OderRoomModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-lg">
          <div className="modal-content">
            {/* header */}
            <div className="modal-header">
              <h4 className="modal-title text-dark" id="exampleModalLabel ">
                Thông tin đặt phòng
              </h4>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            {/* header */}

            {/* body */}
            <div className="modal-body text-dark">
              <form>
                {/* thông tin khách hàng */}
                <h5 className="my-3">Thông tin khách hàng </h5>
                <div className="line-page "></div>

                <div className="form-group row mt-5 justify-content-around">
                  <div className="col-sm d-flex justify-content-around">
                    <label className="col-sm" htmlFor="inputLastname">
                      Mã KH:
                    </label>
                    <input
                      disabled={true}
                      type="text"
                      className="form-control col-sm-8 bg-white"
                      id="maKH"
                      name="maKH"
                      placeholder="Điền mã khách hàng ..."
                      onChange={(e) => {
                        setIdCustomer({
                          ...idCustomer,
                          id: e.target.value,
                        });
                        setDetails({
                          ...details,
                          client_id: e.target.value,
                          
                        });
                      }}
                      value={idCustomer ? idCustomer : ""}
                    />
                  </div>

                  <div className="col-sm d-flex justify-content-around">
                    <label className="col-sm" htmlFor="inputLastname">
                      Tên KH :
                    </label>
                    <select
                      id="cars"
                      className="form-control col-sm-8"
                      onChange={(e) => {
                        const selectIdCustomer = e.target.value;
                        setIdCustomer(selectIdCustomer);
                        setDetails({
                          ...details,
                          client_id: selectIdCustomer,
                        });
                      }}
                    >
                      {" "}
                      Tên khách hàng :<option>Khách hàng</option>
                      {dataCustomer.map((item) => (
                        <option key={item.id} value={item.id}>
                          {" "}
                          KH-
                          {item.id} {item.firtname} {item.lastname}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
                <div className="text-danger col-sm-8">{errorClientId}</div>
                {/* thông tin khách hàng */}

                {/* thông tin phòng */}
                <div className="line-page mt-5 "></div>
                <h5 className="my-3">Thông tin phòng </h5>
                <div className="line-page "></div>

                <div className="form-group row mt-5 justify-content-around ">
                  <div className="col-sm d-flex justify-content-around">
                    <label className="col-sm" htmlFor="inputLastname">
                      Tên phòng :
                    </label>
                    <input
                      disabled={true}
                      type="text"
                      className="form-control bg-white col-sm-8"
                      id="tenPhong"
                      name="ten"
                      placeholder="Điền tên phòng ..."
                      defaultValue={dataItem[1]}
                    />
                  </div>

                  <div className="col-sm d-flex justify-content-around">
                    <label className="col-sm" htmlFor="inputLastname">
                      Giá Phòng :
                    </label>
                    <input
                      disabled={true}
                      type="text"
                      className="form-control bg-white col-sm-8"
                      id="giaphong"
                      name="gia"
                      placeholder="Điền giá phòng ..."
                      defaultValue={dataItem[2]}
                    />
                  </div>
                </div>

                <div className="form-group row mt-4 justify-content-around ">
                  <div className="col-sm d-flex justify-content-around">
                    <label className="col-sm " htmlFor="inputLastname">
                      Ngày đến :
                    </label>

                    <input
                      type="date"
                      disabled={true}
                      className="form-control col-sm-8"
                      id="ngayden"
                      name="ngayden"
                      placeholder="Điền ngày đến ..."
                      onChange={(e) => {
                        const dayCome = e.target.value;
                        setDayCome(dayCome);
                      }}
                      value={dayCome==""?"":dayCome}
                    />
                  </div>

                  <div className="col-sm d-flex justify-content-around">
                    <label className="col-sm" htmlFor="inputLastname">
                      Ngày đi :
                    </label>

                    <input
                     disabled={true}
                      type="date"
                      className="form-control col-sm-8"
                      id="ngaydi"
                      name="ngaydi"
                      placeholder="Điền ngày đi ..."
                      onChange={(e) => {
                        const dayGo = e.target.value;
                        setDayGo(dayGo);
                      }}
                      value={dayGo==""?"":dayGo}
               
                    />
                  </div>
                </div>

                <div className="form-group row justify-content-center ">
                  <div className="col-sm d-flex justify-content-start">
                    <label className="col-sm"> </label>
                    <div className="text-danger col-sm-8">{errorDayIn}</div>
                  </div>

                  <div className="col-sm d-flex justify-content-center">
                    <label className="col-sm"></label>
                    <div className="text-danger col-sm-8">{errorDayOut}</div>
                  </div>
                </div>

                {/* thông tin dịch vụ */}
                <div className="line-page mt-5"></div>
                <h5 className="my-3">Thông tin dịch vụ </h5>
                <div className="line-page "></div>

                <div className="form-group row mt-5">
                  <div className="col-sm-5">
                    <label htmlFor="inputLastname">Tên dịch vụ :</label>
                    <select
                      id="cars"
                      className="form-control"
                      onChange={(e) => {
                        const selectDataService = e.target.value;
                        const arr = selectDataService.split(",");
                        setPriceService(arr[0]);
                        setIdService(arr[1]);
                      }}
                    >
                      {" "}
                      Tên khách hàng :<option>Dịch Vụ</option>
                      {dataService.map((item) => (
                        <option key={item.id} value={[item.price, item.id]}>
                          {" "}
                          DV-
                          {item.id} {item.name}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div className="col-sm-4">
                    <label htmlFor="inputLastname">Giá dịch vụ:</label>
                    <input
                      disabled={true}
                      type="text"
                      className="form-control bg-white"
                      id="giadv"
                      placeholder="Điền giá dịch vụ ..."
                      onChange={(e) => {
                        setIdCustomer({
                          ...priceService,
                          price: e.target.value,
                        });
                      }}
                      value={priceService ? priceService : ""}
                    />
                  </div>

                  <div className="col-sm-3">
                    <label htmlFor="inputFirstname"> Số lượng</label>
                    <input
                      type="number"
                      className="form-control"
                      id="inputFirstname"
                      placeholder="Số lượng ..."
                      onChange={(e) => {
                        const amout = e.target.value;
                        const amoutNumber = Number(amout);
                        setAmountService(amoutNumber);
                      }}
                      value={amountService ? amountService : ""}
                    />
                  </div>

                  <div className="col-sm-12 mt-2 d-flex justify-content-end">
                    <p className="text-small px-4 float-left mt-4 pt-2 text-muted">
                      ( *ấn để cộng bill )
                    </p>
                    <button
                      type="button"
                      className="btn btn-primary px-4 float-left mt-4 pt-2"
                      onClick={handleSumService}
                    >
                      Tính tổng tiền
                    </button>
                  </div>
                </div>

                <h6 className="my-3 float-left">Thông tin tổng hóa đơn</h6>
                <br />
                <div className="line-page-bold mt-4 "></div>

                <div className="my-3 ">
                  <p className="float-left ">Tổng phí phòng :</p>
                  <p className="float-right">
                    {new Intl.NumberFormat("vi-VN", {
                      style: "currency",
                      currency: "VND",
                    }).format(
                      dataItem[2] *
                        ((Date.parse(moment(dayGo)) -
                          Date.parse(moment(dayCome))) /
                          86400000 >
                        0
                          ? (Date.parse(moment(dayGo)) -
                              Date.parse(moment(dayCome))) /
                            86400000
                          : 1) ?? 0
                    )}
                  </p>
                </div>

                <br />

                <div className="my-3">
                  <p className="float-left">Tổng phí dịch vụ :</p>
                  <p className="float-right">
                    {new Intl.NumberFormat("vi-VN", {
                      style: "currency",
                      currency: "VND",
                    }).format(priceService * amountService ?? 0)}
                  </p>
                </div>
                <div className=" mt-5 line-page-bold"></div>

                <div className="my-3">
                  <h6 className="float-left">Tổng hóa đơn :</h6>
                  <h6 className="float-right">
                    {new Intl.NumberFormat("vi-VN", {
                      style: "currency",
                      currency: "VND",
                    }).format(total.total_money ?? 0)}
                  </h6>
                </div>
                <div className=" mt-5  line-page-bold"></div>
              </form>
            </div>
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
              <button
                onClick={handleOderBill}
                type="button"
                className="btn btn-primary"
              >
                Đặt phòng
              </button>
            </div>
            {/* footer */}
          </div>
        </div>
      </div>
      {/* modal */}
    </>
  );
}

export default OderRoomForm;
