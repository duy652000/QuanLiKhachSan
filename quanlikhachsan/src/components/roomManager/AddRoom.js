import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { useMemo } from "react";

function AddRoom() {
 const [details, setDetails] = useState({
    name_room: "",
    typ_room: "",
    price: "",
    capacity: "",
    description: ""
});
const [error, setError] = useState("");
const token = useMemo(() => JSON.parse(localStorage.getItem("token")), []);


const history = useNavigate();

const handleAddService = (e) => {
  e.preventDefault();
  addRoom(details);
};

//hàm thêm mới phòng
async function addRoom(detail) {
  try {
    let res = await axios.post("http://localhost:8000/room/add", detail, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
    res = await res;
    setError("");
    window.location="/room-manager";
    alert("Thêm phòng thành công !");
  } catch (error) {
    setError(JSON.parse(error.response.data));
  }

}






    return (
        <div className="card shadow mb-4">
          <div className="card-header py-3  d-flex justify-content-between">
            <h6 className="mt-2 font-weight-bold text-primary">Thêm phòng</h6>
            <div className="">
              <Link type="button" to="/service" className="btn btn-primary fw-bold">
              <i className="bi bi-arrow-return-right"></i> Trở lại
              </Link>
            </div>
          </div>
    
          
    
          <div className="card-body">
            <div className="table-responsive">
              <form className="ml-1" onSubmit={handleAddService}>
                <div className="form-group">
                  <label htmlFor="exampleInputEmail1">Tên Phòng</label>
            <div className="text-danger">{error.name_room}</div>

                  <input
                    type="text "
                    className="form-control"
                    id="nameRoom"
                    name="name"
                    placeholder="Điền tên phòng ... "

                    onChange={(e) => {
                      setDetails({
                        ...details,
                        name_room: e.target.value,
                      });
                    }}
                    value={details.name_room}

                  />
                </div>
                
                <div className="form-group">
                  <label htmlFor="price-service">Kiểu Phòng</label>
            <div className="text-danger">{error.typ_room}</div>

                  <input
                    type="text"
                    className="form-control"
                    id="typeRoom"
                    name="type"
                    placeholder="Điền kiểu phòng ..."
                    onChange={(e) => {
                      setDetails({
                        ...details,
                        typ_room: e.target.value,
                      });
                    }}
                    value={details.typ_room}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="price-service">Giá Phòng</label>
            <div className="text-danger">{error.price}</div>

                  <input
                    type="number"
                    className="form-control"
                    id="priceRoom"
                    name="price"
                    placeholder="Điền giá phòng ..."
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
                  <label htmlFor="exampleInputEmail1">Sức Chứa Phòng</label>
            <div className="text-danger">{error.capacity}</div>

                  <input
                    type="number"
                    className="form-control"
                    id="capacityRoom"
                    name="capacity"
                    placeholder="Điền sức chứa phòng ... "

                    onChange={(e) => {
                      setDetails({
                        ...details,
                        capacity: e.target.value,
                      });
                    }}
                    value={details.capacity}

                  />
                </div>

                <div className="form-group">
                  <label htmlFor="exampleInputEmail1">Mô tả</label>
            <div className="text-danger">{error.description}</div>

                  <input
                    type="text "
                    className="form-control"
                    id="descriptionRoom"
                    name="description"
                    placeholder="Điền mô tả phòng ... "

                    onChange={(e) => {
                      setDetails({
                        ...details,
                        description: e.target.value,
                      });
                    }}
                    value={details.description}

                  />
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

export default AddRoom