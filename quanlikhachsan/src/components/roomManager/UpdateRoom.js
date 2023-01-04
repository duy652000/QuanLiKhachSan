import React, { useState, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import axios from "axios";

function UpdateService() {
  const token = JSON.parse(localStorage.getItem("token"));
  const [errorName, setErrorName] = useState("");
  const [errorType, setErrorType] = useState("");
  const [errorPrice, setErrorPrice] = useState("");
  const [errorCapacity, setErrorCapacity] = useState("");
  const [errorDescription, setErrorDescription] = useState("");



  const [details, setDetails] = useState({
    name_room: "",
    typ_room: "",
    price: "",
    capacity: "",
    description: ""
  });
  const history = useNavigate();
  const { id } = useParams();
 

  //get infor
  const getData = async () => {
    //await here
    let res = await axios.get(
      `http://localhost:8000/room/getid/id=${id}`,
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      }
    );
    res = await res.data;
    console.log("Res",res)
    let kq = res.data;
    if (kq == null) {
      history("/room-manager");
    }else {
      setDetails({

        name_room: kq.name_room,
        typ_room: kq.typ_room,
        price: kq.price,
        capacity: kq.capacity,
        description: kq.description

      
      });
    }
  };
  useEffect(() => {
    getData();
  }, [token]);
  //////

  // call update
  const handleUpdate = (e) => {
    e.preventDefault();
    updateService(details);
  };

  // update infor
  async function updateService(detail) {
    try {
      let res = await axios.post(
        `http://localhost:8000/room/edit/id=${id}`,
        detail,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );
      res = await res;
      window.location="/room-manager";
      alert("Cập nhật thành công !");
    } catch (error) {
      console.log("error",error) 
      setErrorName(JSON.parse(error.response.data).name_room[0])
      setErrorType(JSON.parse(error.response.data).typ_room[0])
      setErrorPrice(JSON.parse(error.response.data).price[0])
      setErrorCapacity(JSON.parse(error.response.data).capacity[0])
      setErrorDescription(JSON.parse(error.response.data).description[0])



    //  name_room
    //  typ_room
    //  price
    //  capacity
    //  description
      
    }
  }

  return (
    <div className="card shadow mb-4">
      <div className="card-header py-3  d-flex justify-content-between">
        <h6 className="mt-2 font-weight-bold text-primary">Cập nhật phòng</h6>
        <div className="">
          <Link type="button" to="/service" className="btn btn-primary fw-bold">
            <i className="bi bi-arrow-return-right"></i> Trở lại
          </Link>
        </div>
      </div>

      <div className="card-body">
        <div className="table-responsive">
          <form className="ml-1" onSubmit={handleUpdate}>
          <div className="form-group">
                  <label htmlFor="exampleInputEmail1">Tên Phòng</label>
            <div className="text-danger">{errorName}</div>

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
                    value={details?.name_room}

                  />
                </div>
                
                <div className="form-group">
                  <label htmlFor="price-service">Kiểu Phòng</label>
            <div className="text-danger">{errorType}</div>

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
                    value={details?.typ_room}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="price-service">Giá Phòng</label>
            <div className="text-danger">{errorPrice}</div>

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
                    value={details?.price}
                  />
                </div>

           

           


                <div className="form-group">
                  <label htmlFor="exampleInputEmail1">Sức Chứa Phòng</label>
            <div className="text-danger">{errorCapacity}</div>

                  <input
                    type="number "
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
                    value={details?.capacity}

                  />
                </div>

                <div className="form-group">
                  <label htmlFor="exampleInputEmail1">Mô tả</label>
            <div className="text-danger">{errorDescription}</div>

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
                    value={details?.description}

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

export default UpdateService;
