import React, { useState, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import axios from "axios";

function UpdateService() {
  const token = JSON.parse(localStorage.getItem("token"));
  const [error, setError] = useState("");
  const [details, setDetails] = useState({name:"",price:"",description:""});
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
                });
    
  };
  useEffect(() => {
    getData();
  }, [token]);
  //////


 // call update 
  const handleUpdate = (e) => {
    e.preventDefault();
    // console.log(details);
    updateService(details);
  };




  // update infor
  async function updateService(detail) {
    try {
      console.log(detail)
      let res = await axios.post(
        `http://localhost:8000/service/edit/id=${id}`,
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
      alert("Cập nhật thành công !")
    } catch (error) {}
    console.log("Error",error)
    console.log(error)
    // console.log(JSON.parse(error.response.data));
    // setError(JSON.parse(error.response.data));
  }
  //




  return (
    <div className="card shadow mb-4">
      <div className="card-header py-3  d-flex justify-content-between">
        <h6 className="mt-2 font-weight-bold text-primary">Update Service</h6>
        <div className="">
          <Link type="button" to="/service" className="btn btn-primary fw-bold">
            <i className="bi bi-arrow-return-right"></i> Back
          </Link>
        </div>
      </div>

      <div className="card-body">
        <div className="table-responsive">
          <form className="ml-1" onSubmit={handleUpdate}>
            <div className="form-group">
              <label htmlFor="exampleInputEmail1">Tên dịch vụ</label>
              <p className="text-danger">{error.name}</p>

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
                value={details.name}
              />
            </div>

            <div className="form-group">
              <label htmlFor="telephone number">Giá dịch vụ</label>
              <p className="text-danger">{error.price}</p>

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
                value={details.price}
              />
            </div>

            <div className="form-group">
              <label htmlFor="exampleInputEmail1">Mô tả dịch vụ</label>
              <p className="text-danger">{error.description}</p>

              <input
                type="text "
                className="form-control"
                id="decription"
                name="decription"
                placeholder="Điền mô tả ... "
                onChange={(e) => {
                  setDetails({
                    ...details,
                    description:e.target.value,
                  });
                }}
                value={details.description}
              />
            </div>
{/* 
            <label htmlFor="Status">Trạng Thái</label>
            <div className="text-danger">{error.status}</div>

            <div className="form-group form-check ml-1">
              <input
                type="radio"
                name="5"
                className="form-check-input"
                id="check11"
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
                name="5"
                className="form-check-input"
                id="check00"
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
            </div> */}

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
