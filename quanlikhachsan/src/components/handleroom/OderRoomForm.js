import React, { useContext, useEffect, useState } from "react";
import { AppContext } from "../../Context/AppContext";

function OderRoomForm({ dataItem }) {
  
  const { customerData ,serviceData } = useContext(AppContext);
  const [idCustomer, setIdCustomer] = useState("1");


  const [amountService, setAmountService] = useState("0");
  const [priceService, setPriceService] = useState(serviceData[0].price);
  const[sumService,setSumService] =useState("0");

  const handleSumService = (e) => {
    e.preventDefault();
    setSumService(priceService*amountService);
  };


  const dataCustomer = customerData;
  const item = dataItem;

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

                <div className="form-group row mt-3">
                  <div className="col-sm-6">
                    <label htmlFor="inputLastname">Mã khách hàng :</label>
                    <input
                      type="text"
                      className="form-control"
                      id="maKH"
                      placeholder="Điền mã khách hàng ..."
                      onChange={(e) => {
                        setIdCustomer({
                          ...idCustomer,
                          id: e.target.value,
                        });
                      }}
                      value={idCustomer ? idCustomer : ""}
                    />
                  </div>
                  <div className="col-sm-6">
                    <label htmlFor="inputLastname">Tên khách hàng :</label>

                    <select
                      id="cars"
                      className="form-control"
                      onChange={(e) => {
                        const selectIdCustomer = e.target.value;
                        setIdCustomer(selectIdCustomer);
                      }}
                    >
                      {" "}
                      Tên khách hàng :
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
                {/* thông tin khách hàng */}

                {/* thông tin phòng */}
                <div className="line-page mt-5 "></div>

                <h5 className="my-3">Thông tin phòng </h5>
                <div className="line-page "></div>

                <div className="form-group row mt-3">
                  <div className="col-sm-6">
                    <label htmlFor="inputLastname">Tên phòng :</label>
                    <input
                      type="text"
                      className="form-control"
                      id="tenPhong"
                      placeholder="Điền tên phòng ..."
                      defaultValue={item.name_room ? item.name_room : ""}
                    />
                  </div>
                  <div className="col-sm-6">
                    <label htmlFor="inputLastname">Giá Phòng :</label>
                    <input
                      type="text"
                      className="form-control"
                      id="giaphong"
                      placeholder="Điền giá phòng ..."
                      defaultValue={item.price ? item.price : ""}
                    />
                  </div>
                </div>

                <div className="form-group row mt-3">
                  <div className="col-sm-6">
                    <label htmlFor="inputLastname">Ngày đến :</label>
                    <input
                      type="date"
                      className="form-control"
                      id="ngayden"
                      placeholder="Điền ngày đến ..."
                    />
                  </div>
                  <div className="col-sm-6">
                    <label htmlFor="inputLastname">Ngày đi :</label>
                    <input
                      type="date"
                      className="form-control"
                      id="ngaydi"
                      placeholder="Điền ngày đi ..."
                    />
                  </div>
                </div>

                <div className="line-page mt-5"></div>
                <h5 className="my-3">Thông tin dịch vụ </h5>
                <div className="line-page "></div>

                <div className="form-group row mt-3">
                  <div className="col-sm-5">
                    <label htmlFor="inputLastname">Tên dịch vụ :</label>
                    <select
                      id="cars"
                      className="form-control"
                      onChange={(e) => {
                        const selectDataService= e.target.value;
                        setPriceService(selectDataService);

                      }}
                    >
                      {" "}
                      Tên khách hàng :
                      {serviceData.map((item) => (
                        <option key={item.id} value={item.price}>
                          {" "}
                          DV-
                          {item.id} {item.name}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div className="col-sm-4">
                    <label htmlFor="inputLastname">Giá :</label>
                    <input
                      type="text"
                      className="form-control"
                      id="giadv"
                      placeholder="Điền giá dịch vụ ..."
                      onChange={(e) => {
                        setIdCustomer({
                          ...priceService,
                          price: e.target.value,
                        });
                      }}
                      value={priceService?priceService : ""}
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
                        setAmountService(amout);
                      }}
                      value={amountService?amountService:""}
                    />
                  </div>

                  <div className="col-sm-12 mt-2 d-flex justify-content-end">
                    <button
                      type="button"
                      className="btn btn-primary px-4 float-left mt-4 pt-2"
                      onClick={handleSumService}
                    >
                      Add
                    </button>
                  </div>
                </div>

                <h6 className="my-3 float-left">Thông tin tổng hóa đơn</h6>
                <br />
                <div className="line-page-bold mt-4 "></div>

                <div className="my-3 ">
                  <p className="float-left ">Tổng phí phòng :</p>
                  <p className="float-right">
                  {item.price} <span> VND</span>
                  </p>
                </div>

                <br />

                <div className="my-3">
                  <p className="float-left">Tổng phí dịch vụ :</p>
                  <p className="float-right">
                  {sumService} <span> VND</span>
                  </p>
                </div>
                <div className=" mt-5 line-page-bold"></div>

                <div className="my-3">
                  <h6 className="float-left">Tổng hóa đơn :</h6>
                  <h6 className="float-right">
                    4000 <span> VND</span>
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
              <button type="button" className="btn btn-primary">
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
