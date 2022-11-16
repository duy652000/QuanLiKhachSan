import React, { useState, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import axios from "axios";

function UpdateService() {
  const token = JSON.parse(localStorage.getItem("token"));
  const [error, setError] = useState("");
  const [details, setDetails] = useState({});
  const history = useNavigate();
  const {id} = useParams();

  //get infor
  const getData = async () => {
    //await here
    let res = await axios.get(`http://localhost:8000/service/service-info/?id=${id}`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
    res = await res.data;
    let kq = res.data[0];
    

    setDetails({name: kq.name,
                price: kq.price,
                description: kq.description,
                status:""});
    
  };
  useEffect(() => {
    getData();
  }, [token]);
  //////

  const handleUpdate = (e) => {
    e.preventDefault();
    // console.log(details);
    // updateProfile(details);
  };

  // change infor
  async function updateProfile(detail) {
    try {
      let res = await axios.post(
        "http://localhost:8000/service/service-info",
        detail,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer`,
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
        <h6 className="mt-2 font-weight-bold text-primary">Add Service</h6>
        <div className="">
          <Link type="button" to="/service" className="btn btn-primary fw-bold">
            <i className="bi bi-arrow-return-right"></i> Back
          </Link>
        </div>
      </div>

      <div className="card-body">
        <div className="table-responsive">
          <form className="ml-1" onClick={handleUpdate}>
            <div className="form-group">
              <label htmlFor="exampleInputEmail1">Tên dịch vụ</label>
              <div className="text-danger">{error.name}</div>

              <input
                type="text "
                className="form-control"
                id="name"
                name="name"
                placeholder="Điền tên dịch vụ ... "
                onChange={(e) => {
                  setDetails({
                    ...details,
                    name: e.target.value,
                  });
                }}
                value={details.name?details.name:""}
              />
            </div>

            <div className="form-group">
              <label htmlFor="telephone number">Giá dịch vụ</label>
              <div className="text-danger">{error.price}</div>

              <input
                type="number"
                className="form-control"
                id="price"
                name="price"
                placeholder="Điền giá dịch vụ"
                onChange={(e) => {
                  setDetails({
                    ...details,
                    price: e.target.value,
                  });
                }}
                value={details.price?details.price:""}
              />
            </div>

            <div className="form-group">
              <label htmlFor="exampleInputEmail1">Mô tả dịch vụ</label>
              <div className="text-danger">{error.description}</div>

              <input
                type="text "
                className="form-control"
                id="decription"
                name="decription"
                placeholder="Điền mô tả ... "
                onChange={(e) => {
                  setDetails({
                    ...details,
                    description: e.target.value,
                  });
                }}
                value={details.description?details.description:""}
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

export default UpdateService;
