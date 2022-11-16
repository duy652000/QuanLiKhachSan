import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

function AddService() {
 /////////////////
 const [details, setDetails] = useState({
  name: "",
  price: "",
  status: "",
  description: "",
 
});
const [error, setError] = useState("");
const history = useNavigate();

const handleAddService = (e) => {
  e.preventDefault();

  addService(details);
};
//call api
async function addService(detail) {
  try {
    let res = await axios.post("http://localhost:8000/service/add", detail, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer`,
      },
    });
    res = await res;

    history("/service");
  } catch (error) {
    setError(JSON.parse(error.response.data));
  }
  console.log(error);
}
////////////////





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
              <form className="ml-1" onClick={handleAddService}>
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
                    value={details.name}

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
                    value={details.price}
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
                    value={details.description}

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

export default AddService