import React, { useEffect, useState } from "react";
import axios from "axios";

function OderRoomForm({ dataItem }) {
  const token = JSON.parse(localStorage.getItem("token"));
  const [dataCustomer, setDataCustomer] = useState([]);
  const [idCustomer, setIdCustomer] = useState("1");

  const getDataCustomer = async () => {
    //await here
    let res = await axios.get("http://localhost:8000/client/client-profile", {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
    res = await res.data.data;
    setDataCustomer(res);
  };
  useEffect(() => {
    getDataCustomer();
  }, [token]);
  

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
                      value={idCustomer? idCustomer :""}
                    />
                  </div>
                  <div className="col-sm-6">
                    <label htmlFor="inputLastname">Tên khách hàng :</label>

                    <select id="cars" className="form-control"
                     onChange={(e) => {
                      const selectIdCustomer = e.target.value;
                      setIdCustomer(selectIdCustomer)}}>
                      {" "}
                      Tên khách hàng :


                      {dataCustomer.map((item) => (
                        <option key={item.id}
                        value={item.id}
                        >
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
                  <div className="col-sm-4">
                    <label htmlFor="inputLastname">Tên dịch vụ :</label>
                    <input
                      type="text"
                      className="form-control"
                      id="tendv"
                      placeholder="Điền tên dịch vụ ..."
                    />
                  </div>
                  <div className="col-sm-4">
                    <label htmlFor="inputLastname">Giá :</label>
                    <input
                      type="text"
                      className="form-control"
                      id="giadv"
                      placeholder="Điền giá dịch vụ ..."
                    />
                  </div>

                  <div className="col-sm-2">
                    <label htmlFor="inputFirstname">Số lượng :</label>
                    <input
                      type="number"
                      className="form-control"
                      id="inputFirstname"
                      placeholder="Số lượng ..."
                    />
                  </div>

                  <div className="col-sm-2 mt-2">
                    <button
                      type="button"
                      className="btn btn-primary px-4 float-left mt-4 pt-2"
                    >
                      Add
                    </button>
                  </div>
                </div>

                <table
                  id="example"
                  className="table table-striped"
                  style={{ width: "100%" }}
                >
                  <thead>
                    <tr>
                      <th>Tên dịch vụ</th>
                      <th>Giá</th>
                      <th>Số lượng</th>
                      <th>Thành tiền</th>
                    </tr>
                  </thead>

                  <tbody>
                    {/*  */}
                    {/* {data.map((item) => ( */}
                    <tr>
                      <td>Ủi</td>
                      <td>1000</td>
                      <td>2</td>
                      <td>2000</td>
                    </tr>

                    {/* ))} */}
                    <tr>
                      <td>Giặt</td>
                      <td>1000</td>
                      <td>2</td>
                      <td>2000</td>
                    </tr>

                    {/* total  */}
                    <tr>
                      <td>Tổng tiền :</td>
                      <td></td>
                      <td></td>
                      <td>4000</td>
                    </tr>
                    {/*  */}

                    {/*  */}
                  </tbody>
                </table>

                <h6 className="my-3 float-left">Thông tin tổng hóa đơn</h6>
                <br />
                <div className="line-page-bold mt-4 "></div>

                <div className="my-3 ">
                  <p className="float-left ">Tổng phí phòng :</p>
                  <p className="float-right">
                    2000 <span> VND</span>
                  </p>
                </div>

                <br />

                <div className="my-3">
                  <p className="float-left">Tổng phí dịch vụ :</p>
                  <p className="float-right">
                    2000 <span> VND</span>
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
