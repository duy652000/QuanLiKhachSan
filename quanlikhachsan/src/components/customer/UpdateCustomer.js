import React, { useState, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import axios from "axios";

function UpdateCustomer() {
  const token = JSON.parse(localStorage.getItem("token"));
  const [error, setError] = useState("");
  const [details, setDetails] = useState({});
  const history = useNavigate();
  const { id } = useParams();

  //get infor
  const getData = async () => {
    //await here
    let res = await axios.get(
      `http://localhost:8000/client/client-profile/?id=${id}`,
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      }
    );
    res = await res.data;
    let kq = res.data[0];
    setDetails({
      firtname: kq.firtname,
      lastname: kq.lastname,
      phone: kq.phone,
      email: kq.email,
      CMND: kq.CMND,
      status: "",
    });
  };
  useEffect(() => {
    getData();
  }, [token]);
  //////

  // call update
  const handleUpdate = (e) => {
    e.preventDefault();
    console.log(details);
    updateService(details);
  };

  // update infor
  async function updateService(detail) {
    try {
      let res = await axios.post(
        `http://localhost:8000//client/edit/id=${id}`,
        detail,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );
      res = await res;
      history("/service");
    } catch (error) {}
    setError(JSON.parse(error.response.data));
  }
  //

  return (
    <div className="card shadow mb-4">
      <div className="card-header py-3  d-flex justify-content-between">
        <h6 className="mt-2 font-weight-bold text-primary">
          Update Thông Tin Khách Hàng
        </h6>
        <div className="">
          <Link type="button" to="/customer" className="btn btn-primary fw-bold">
            <i className="bi bi-arrow-return-right"></i> Back
          </Link>
        </div>
      </div>

      <div className="card-body">
        <div className="table-responsive">
          <form className="ml-1" onClick={handleUpdate}>
            <div className="form-group">
              <label htmlFor="exampleInputEmail1">Họ và tên lót</label>
              <div className="text-danger">{error.firtname}</div>
              <input
                type="text "
                className="form-control"
                id="fistName"
                name="fistName"
                placeholder="Điền họ và tên lót ..."
                onChange={(e) => {
                  setDetails({
                    ...details,
                    firtname: e.target.value,
                  });
                }}
                value={details.firtname?details.firtname:""}
              />
            </div>

            <div className="form-group">
              <label htmlFor="exampleInputEmail1">Tên</label>
              <div className="text-danger">{error.lastname}</div>

              <input
                type="text "
                className="form-control"
                id="lastName"
                name="lastName"
                placeholder="Điền tên ..."
                onChange={(e) => {
                  setDetails({
                    ...details,
                    lastname: e.target.value,
                  });
                }}
                value={details.lastname?details.lastname:""}
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                className="form-control"
                id="exampleInputEmail1"
                name="email"
                placeholder="Điền email..."
                aria-describedby="emailHelp"
                onChange={(e) => {
                  setDetails({
                    ...details,
                    email: e.target.value,
                  });
                }}
                value={details.email?details.email:""}
                
              />
            </div>
            <div className="form-group">
              <label htmlFor="phone">Số điện thoại</label>
              <input
                type="number"
                className="form-control"
                id="phone"
                name="phone"
                placeholder="Điền số điện thoại ..."
                onChange={(e) => {
                  setDetails({
                    ...details,
                    phone: e.target.value,
                  });
                }}
                value={details.phone?details.phone:""}
              />
            </div>

            <div className="form-group">
              <label htmlFor="exampleInputEmail1">CCCD</label>
              <input
                type="numbe"
                className="form-control"
                id="CCCD"
                name="CCCD"
                placeholder="Điền Căn cước công dân ..."
                onChange={(e) => {
                  setDetails({
                    ...details,
                    CMND: e.target.value,
                  });
                }}
                value={details.CMND?details.CMND:""}
              />
            </div>

            <label htmlFor="Status">Trạng Thái</label>
            <div className="text-danger">{error.status}</div>

            <div className="form-group form-check ml-1">
              <input
                type="radio"
                name="2"
                className="form-check-input"
                id="check1"
                onChange={(e) => {
                  setDetails({
                    ...details,
                    status: e.target.value,
                  });
                }}
                value="1"
              />
              <label className="form-check-label" htmlFor="kichhoat">
                Kích Hoạt
              </label>
            </div>

            <div className="form-group form-check ml-1">
              <input
                type="radio"
                name="2"
                className="form-check-input"
                id="check0"
                onChange={(e) => {
                  setDetails({
                    ...details,
                    status: e.target.value,
                  });
                }}
                value="0"
              />
              <label className="form-check-label" htmlFor="An">
                Ẩn
              </label>
            </div>

            <button type="submit" className="btn btn-primary">
              Lưu
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default UpdateCustomer;
